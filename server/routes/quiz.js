const express = require('express');
const { authenticate } = require('../middleware');
const { awardXp, XP_REWARDS } = require('./gamification');

const router = express.Router();

// Submit quiz result
router.post('/submit', authenticate, (req, res) => {
  const { chapterId, quizId, score, totalQuestions } = req.body;

  if (chapterId == null || !quizId || score == null || !totalQuestions) {
    return res.status(400).json({ error: 'All quiz fields are required.' });
  }

  const result = req.db.prepare(`
    INSERT INTO quiz_progress (user_id, chapter_id, quiz_id, score, total_questions)
    VALUES (?, ?, ?, ?, ?)
  `).run(req.user.id, chapterId, quizId, score, totalQuestions);

  // Award XP based on score percentage
  const pct = (score / totalQuestions) * 100;
  let xpAmount = 0;
  let xpSource = 'quiz_pass';
  if (pct === 100) { xpAmount = XP_REWARDS.quiz_perfect; xpSource = 'quiz_perfect'; }
  else if (pct >= 80) { xpAmount = XP_REWARDS.quiz_good; xpSource = 'quiz_good'; }
  else if (pct >= 60) { xpAmount = XP_REWARDS.quiz_pass; xpSource = 'quiz_pass'; }

  let gamification = null;
  if (xpAmount > 0) {
    gamification = awardXp(req.db, req.user.id, xpAmount, xpSource, `ch${chapterId}`);
  }

  res.status(201).json({
    id: result.lastInsertRowid,
    chapterId,
    quizId,
    score,
    totalQuestions,
    gamification
  });
});

// Get quiz history for a chapter
router.get('/history/:chapterId', authenticate, (req, res) => {
  const history = req.db.prepare(`
    SELECT * FROM quiz_progress
    WHERE user_id = ? AND chapter_id = ?
    ORDER BY completed_at DESC
  `).all(req.user.id, req.params.chapterId);

  res.json(history.map(h => ({
    id: h.id,
    quizId: h.quiz_id,
    score: h.score,
    totalQuestions: h.total_questions,
    completedAt: h.completed_at
  })));
});

module.exports = router;
