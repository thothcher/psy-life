const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticate, JWT_SECRET } = require('../middleware');

const router = express.Router();

// Register
router.post('/register', (req, res) => {
  const { email, username, password, displayName } = req.body;

  if (!email || !username || !password || !displayName) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters.' });
  }

  const existing = req.db.prepare('SELECT id FROM users WHERE email = ? OR username = ?').get(email, username);
  if (existing) {
    return res.status(409).json({ error: 'Email or username already exists.' });
  }

  const hash = bcrypt.hashSync(password, 10);
  const result = req.db.prepare(`
    INSERT INTO users (email, username, password_hash, display_name)
    VALUES (?, ?, ?, ?)
  `).run(email, username, hash, displayName);

  const token = jwt.sign(
    { id: result.lastInsertRowid, username, role: 'user' },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(201).json({
    token,
    user: { id: result.lastInsertRowid, email, username, displayName, role: 'user', subscriptionStatus: 'trial' }
  });
});

// Login
router.post('/login', (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: 'Login and password are required.' });
  }

  const user = req.db.prepare('SELECT * FROM users WHERE email = ? OR username = ?').get(login, login);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }

  if (!bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: 'Invalid credentials.' });
  }

  // Update last login
  req.db.prepare('UPDATE users SET last_login = datetime(?) WHERE id = ?').run(new Date().toISOString(), user.id);

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      displayName: user.display_name,
      role: user.role,
      subscriptionStatus: user.subscription_status,
      trialStartDate: user.trial_start_date
    }
  });
});

// Get current user profile
router.get('/me', authenticate, (req, res) => {
  const user = req.db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  res.json({
    id: user.id,
    email: user.email,
    username: user.username,
    displayName: user.display_name,
    role: user.role,
    subscriptionStatus: user.subscription_status,
    trialStartDate: user.trial_start_date,
    createdAt: user.created_at,
    lastLogin: user.last_login
  });
});

// Update profile
router.put('/me', authenticate, (req, res) => {
  const { displayName, email } = req.body;
  const updates = [];
  const params = [];

  if (displayName) {
    updates.push('display_name = ?');
    params.push(displayName);
  }
  if (email) {
    const existing = req.db.prepare('SELECT id FROM users WHERE email = ? AND id != ?').get(email, req.user.id);
    if (existing) {
      return res.status(409).json({ error: 'Email already in use.' });
    }
    updates.push('email = ?');
    params.push(email);
  }

  if (updates.length === 0) {
    return res.status(400).json({ error: 'No fields to update.' });
  }

  params.push(req.user.id);
  req.db.prepare(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`).run(...params);

  res.json({ message: 'Profile updated.' });
});

module.exports = router;
