const express = require('express');
const { authenticate } = require('../middleware');
const { awardXp, XP_REWARDS } = require('./gamification');

const router = express.Router();

// GET /api/flashcards/:chapterId
router.get('/:chapterId', async (req, res) => {
  const result = await req.db.execute({ sql: 'SELECT * FROM flashcards WHERE chapter_id = ? ORDER BY id', args: [req.params.chapterId] });
  res.json(result.rows.map(c => ({ id: c.id, chapterId: c.chapter_id, frontEn: c.front_en, frontKa: c.front_ka, backEn: c.back_en, backKa: c.back_ka, category: c.category })));
});

// GET /api/flashcards/:chapterId/progress
router.get('/:chapterId/progress', authenticate, async (req, res) => {
  const result = await req.db.execute({
    sql: 'SELECT ufp.* FROM user_flashcard_progress ufp JOIN flashcards f ON ufp.flashcard_id = f.id WHERE ufp.user_id = ? AND f.chapter_id = ?',
    args: [req.user.id, req.params.chapterId],
  });
  res.json(result.rows.map(p => ({ flashcardId: p.flashcard_id, difficulty: p.difficulty, reviewCount: p.review_count, nextReview: p.next_review, lastReviewed: p.last_reviewed })));
});

// POST /api/flashcards/review
router.post('/review', authenticate, async (req, res) => {
  const { flashcardId, difficulty } = req.body;
  if (!flashcardId || !difficulty) return res.status(400).json({ error: 'flashcardId and difficulty are required.' });

  const intervals = { hard: 1, medium: 3, easy: 7 };
  const daysUntilNext = intervals[difficulty] || 1;
  const nextReview = new Date(Date.now() + daysUntilNext * 86400000).toISOString();
  const now = new Date().toISOString();

  await req.db.execute({
    sql: `INSERT INTO user_flashcard_progress (user_id, flashcard_id, difficulty, review_count, next_review, last_reviewed)
          VALUES (?, ?, ?, 1, ?, ?)
          ON CONFLICT(user_id, flashcard_id) DO UPDATE SET difficulty = ?, review_count = review_count + 1, next_review = ?, last_reviewed = ?`,
    args: [req.user.id, flashcardId, difficulty, nextReview, now, difficulty, nextReview, now],
  });

  res.json({ success: true, nextReview, difficulty });
});

// POST /api/flashcards/session-complete
router.post('/session-complete', authenticate, async (req, res) => {
  const { chapterId } = req.body;
  const today = new Date().toISOString().slice(0, 10);
  const alreadyToday = await req.db.execute({
    sql: "SELECT id FROM user_xp WHERE user_id = ? AND source = 'flashcard_session' AND source_id = ? AND DATE(created_at) = ?",
    args: [req.user.id, `ch${chapterId}`, today],
  });

  let gamification = null;
  if (alreadyToday.rows.length === 0) {
    gamification = await awardXp(req.db, req.user.id, XP_REWARDS.flashcard_session, 'flashcard_session', `ch${chapterId}`);
  }

  res.json({ success: true, gamification });
});

// GET /api/flashcards/all/summary
router.get('/all/summary', async (req, res) => {
  const result = await req.db.execute('SELECT chapter_id, COUNT(*) as count FROM flashcards GROUP BY chapter_id ORDER BY chapter_id');
  res.json(result.rows.map(s => ({ chapterId: s.chapter_id, count: s.count })));
});

module.exports = router;
