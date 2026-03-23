const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticate, JWT_SECRET } = require('../middleware');
const { generateOTP, sendVerificationEmail, sendPasswordResetEmail } = require('../mailer');

const router = express.Router();

// Register — creates account and sends verification email
router.post('/register', async (req, res) => {
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
    INSERT INTO users (email, username, password_hash, display_name, email_verified)
    VALUES (?, ?, ?, ?, 0)
  `).run(email, username, hash, displayName);

  const userId = result.lastInsertRowid;

  // Generate and store verification code
  const code = generateOTP();
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString();
  req.db.prepare('DELETE FROM email_verification_codes WHERE user_id = ?').run(userId);
  req.db.prepare('INSERT INTO email_verification_codes (user_id, code, expires_at) VALUES (?, ?, ?)').run(userId, code, expiresAt);

  // Send verification email
  try {
    console.log('[AUTH] Sending verification email to', email);
    await sendVerificationEmail(email, code, displayName);
    console.log('[AUTH] Verification email sent successfully!');
  } catch (err) {
    console.error('[AUTH] Failed to send verification email:', err.message);
  }

  const token = jwt.sign(
    { id: userId, username, role: 'user' },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(201).json({
    token,
    user: { id: userId, email, username, displayName, role: 'user', subscriptionStatus: 'trial', trialStartDate: new Date().toISOString(), emailVerified: false },
    requiresVerification: true
  });
});

// Verify email with OTP code
router.post('/verify-email', authenticate, (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Verification code is required.' });
  }

  const record = req.db.prepare(
    'SELECT * FROM email_verification_codes WHERE user_id = ? AND code = ? ORDER BY created_at DESC LIMIT 1'
  ).get(req.user.id, code);

  if (!record) {
    return res.status(400).json({ error: 'Invalid verification code.' });
  }

  if (new Date(record.expires_at) < new Date()) {
    return res.status(400).json({ error: 'Verification code has expired. Request a new one.' });
  }

  req.db.prepare('UPDATE users SET email_verified = 1 WHERE id = ?').run(req.user.id);
  req.db.prepare('DELETE FROM email_verification_codes WHERE user_id = ?').run(req.user.id);

  const user = req.db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);

  res.json({
    message: 'Email verified successfully.',
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      displayName: user.display_name,
      role: user.role,
      subscriptionStatus: user.subscription_status,
      emailVerified: true
    }
  });
});

// Resend verification code
router.post('/resend-verification', authenticate, async (req, res) => {
  const user = req.db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  if (user.email_verified) {
    return res.status(400).json({ error: 'Email already verified.' });
  }

  const code = generateOTP();
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString();
  req.db.prepare('DELETE FROM email_verification_codes WHERE user_id = ?').run(user.id);
  req.db.prepare('INSERT INTO email_verification_codes (user_id, code, expires_at) VALUES (?, ?, ?)').run(user.id, code, expiresAt);

  try {
    await sendVerificationEmail(user.email, code, user.display_name);
    res.json({ message: 'Verification code sent.' });
  } catch (err) {
    console.error('Failed to resend verification email:', err.message);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// Login — blocks unverified users
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

  // Auto-expire trial after 7 days
  let subscriptionStatus = user.subscription_status;
  if (subscriptionStatus === 'trial' && user.trial_start_date) {
    const trialEnd = new Date(user.trial_start_date);
    trialEnd.setDate(trialEnd.getDate() + 7);
    if (new Date() > trialEnd) {
      subscriptionStatus = 'expired';
      req.db.prepare('UPDATE users SET subscription_status = ? WHERE id = ?').run('expired', user.id);
    }
  }

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  const emailVerified = !!user.email_verified;

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      displayName: user.display_name,
      role: user.role,
      subscriptionStatus,
      trialStartDate: user.trial_start_date,
      emailVerified
    },
    requiresVerification: !emailVerified
  });
});

// Forgot password — sends OTP to email
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const user = req.db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user) {
    // Don't reveal if user exists
    return res.json({ message: 'If an account exists with this email, a reset code has been sent.' });
  }

  const code = generateOTP();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();
  req.db.prepare('DELETE FROM password_reset_codes WHERE user_id = ?').run(user.id);
  req.db.prepare('INSERT INTO password_reset_codes (user_id, code, expires_at) VALUES (?, ?, ?)').run(user.id, code, expiresAt);

  try {
    await sendPasswordResetEmail(user.email, code, user.display_name);
  } catch (err) {
    console.error('Failed to send password reset email:', err.message);
  }

  res.json({ message: 'If an account exists with this email, a reset code has been sent.' });
});

// Reset password with OTP code
router.post('/reset-password', (req, res) => {
  const { email, code, newPassword } = req.body;

  if (!email || !code || !newPassword) {
    return res.status(400).json({ error: 'Email, code, and new password are required.' });
  }

  if (newPassword.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters.' });
  }

  const user = req.db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user) {
    return res.status(400).json({ error: 'Invalid email or code.' });
  }

  const record = req.db.prepare(
    'SELECT * FROM password_reset_codes WHERE user_id = ? AND code = ? ORDER BY created_at DESC LIMIT 1'
  ).get(user.id, code);

  if (!record) {
    return res.status(400).json({ error: 'Invalid reset code.' });
  }

  if (new Date(record.expires_at) < new Date()) {
    return res.status(400).json({ error: 'Reset code has expired. Request a new one.' });
  }

  const hash = bcrypt.hashSync(newPassword, 10);
  req.db.prepare('UPDATE users SET password_hash = ? WHERE id = ?').run(hash, user.id);
  req.db.prepare('DELETE FROM password_reset_codes WHERE user_id = ?').run(user.id);

  res.json({ message: 'Password reset successfully. You can now log in.' });
});

// Get current user profile
router.get('/me', authenticate, (req, res) => {
  const user = req.db.prepare('SELECT * FROM users WHERE id = ?').get(req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  // Auto-expire trial after 7 days
  let subscriptionStatus = user.subscription_status;
  if (subscriptionStatus === 'trial' && user.trial_start_date) {
    const trialEnd = new Date(user.trial_start_date);
    trialEnd.setDate(trialEnd.getDate() + 7);
    if (new Date() > trialEnd) {
      subscriptionStatus = 'expired';
      req.db.prepare('UPDATE users SET subscription_status = ? WHERE id = ?').run('expired', user.id);
    }
  }

  res.json({
    id: user.id,
    email: user.email,
    username: user.username,
    displayName: user.display_name,
    role: user.role,
    subscriptionStatus,
    trialStartDate: user.trial_start_date,
    createdAt: user.created_at,
    lastLogin: user.last_login,
    emailVerified: !!user.email_verified
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
