const express = require('express');
const { authenticate, requireAdmin } = require('../middleware');

const router = express.Router();

// Get all users (admin only)
router.get('/users', authenticate, requireAdmin, (req, res) => {
  const users = req.db.prepare(`
    SELECT id, email, username, display_name, role, subscription_status,
           trial_start_date, created_at, last_login
    FROM users ORDER BY created_at DESC
  `).all();

  res.json(users.map(u => ({
    id: u.id,
    email: u.email,
    username: u.username,
    displayName: u.display_name,
    role: u.role,
    subscriptionStatus: u.subscription_status,
    trialStartDate: u.trial_start_date,
    createdAt: u.created_at,
    lastLogin: u.last_login
  })));
});

// Get dashboard stats (admin only)
router.get('/stats', authenticate, requireAdmin, (req, res) => {
  const totalUsers = req.db.prepare('SELECT COUNT(*) as count FROM users').get().count;
  const trialUsers = req.db.prepare("SELECT COUNT(*) as count FROM users WHERE subscription_status = 'trial'").get().count;
  const activeUsers = req.db.prepare("SELECT COUNT(*) as count FROM users WHERE subscription_status = 'active'").get().count;
  const totalQuizzes = req.db.prepare('SELECT COUNT(*) as count FROM quiz_progress').get().count;
  const totalNotes = req.db.prepare('SELECT COUNT(*) as count FROM notes').get().count;

  res.json({ totalUsers, trialUsers, activeUsers, totalQuizzes, totalNotes });
});

// Update user subscription (admin only)
router.put('/users/:id/subscription', authenticate, requireAdmin, (req, res) => {
  const { status } = req.body;
  if (!['trial', 'active', 'expired'].includes(status)) {
    return res.status(400).json({ error: 'Invalid subscription status.' });
  }

  req.db.prepare('UPDATE users SET subscription_status = ? WHERE id = ?').run(status, req.params.id);
  res.json({ message: 'Subscription updated.' });
});

// Delete user (admin only)
router.delete('/users/:id', authenticate, requireAdmin, (req, res) => {
  if (Number(req.params.id) === req.user.id) {
    return res.status(400).json({ error: 'Cannot delete yourself.' });
  }

  req.db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id);
  res.json({ message: 'User deleted.' });
});

module.exports = router;
