const express = require('express');
const { sendContactNotification } = require('../mailer');
const router = express.Router();

// POST /api/contact — submit a contact message
router.post('/', async (req, res) => {
  const { username, email, message } = req.body;

  if (!username || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (typeof username !== 'string' || username.trim().length === 0) {
    return res.status(400).json({ error: 'Username is required' });
  }

  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  if (typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters' });
  }

  try {
    const stmt = req.db.prepare(
      'INSERT INTO contact_messages (username, email, message) VALUES (?, ?, ?)'
    );
    stmt.run(username.trim(), email.trim(), message.trim());

    // Send email notification to admin
    let emailSent = false;
    try {
      console.log('[CONTACT] Sending email notification...');
      await sendContactNotification({ username: username.trim(), email: email.trim(), message: message.trim() });
      console.log('[CONTACT] Email sent successfully!');
      emailSent = true;
    } catch (mailErr) {
      console.error('[CONTACT] Failed to send email:', mailErr.message);
    }

    res.status(201).json({ message: 'Message sent successfully! We will get back to you soon.', emailSent });
  } catch (err) {
    console.error('Contact submission error:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// GET /api/contact — admin: list all contact messages
router.get('/', (req, res) => {
  try {
    const messages = req.db.prepare(
      'SELECT * FROM contact_messages ORDER BY created_at DESC'
    ).all();
    res.json(messages);
  } catch (err) {
    console.error('Contact fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
