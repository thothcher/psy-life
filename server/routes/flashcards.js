const express = require('express');
const { authenticate } = require('../middleware');
const { awardXp, XP_REWARDS } = require('./gamification');

const router = express.Router();

// GET /api/flashcards/:chapterId — Get flashcards for a chapter
router.get('/:chapterId', (req, res) => {
  const cards = req.db.prepare('SELECT * FROM flashcards WHERE chapter_id = ? ORDER BY id').all(req.params.chapterId);

  res.json(cards.map(c => ({
    id: c.id,
    chapterId: c.chapter_id,
    frontEn: c.front_en,
    frontKa: c.front_ka,
    backEn: c.back_en,
    backKa: c.back_ka,
    category: c.category,
  })));
});

// GET /api/flashcards/:chapterId/progress — Get user's flashcard progress
router.get('/:chapterId/progress', authenticate, (req, res) => {
  const progress = req.db.prepare(`
    SELECT ufp.* FROM user_flashcard_progress ufp
    JOIN flashcards f ON ufp.flashcard_id = f.id
    WHERE ufp.user_id = ? AND f.chapter_id = ?
  `).all(req.user.id, req.params.chapterId);

  res.json(progress.map(p => ({
    flashcardId: p.flashcard_id,
    difficulty: p.difficulty,
    reviewCount: p.review_count,
    nextReview: p.next_review,
    lastReviewed: p.last_reviewed,
  })));
});

// POST /api/flashcards/review — Submit a flashcard review
router.post('/review', authenticate, (req, res) => {
  const { flashcardId, difficulty } = req.body;

  if (!flashcardId || !difficulty) {
    return res.status(400).json({ error: 'flashcardId and difficulty are required.' });
  }

  // Spaced repetition: set next review based on difficulty
  const intervals = { hard: 1, medium: 3, easy: 7 };
  const daysUntilNext = intervals[difficulty] || 1;
  const nextReview = new Date(Date.now() + daysUntilNext * 86400000).toISOString();
  const now = new Date().toISOString();

  req.db.prepare(`
    INSERT INTO user_flashcard_progress (user_id, flashcard_id, difficulty, review_count, next_review, last_reviewed)
    VALUES (?, ?, ?, 1, ?, ?)
    ON CONFLICT(user_id, flashcard_id) DO UPDATE SET
      difficulty = ?, review_count = review_count + 1, next_review = ?, last_reviewed = ?
  `).run(req.user.id, flashcardId, difficulty, nextReview, now, difficulty, nextReview, now);

  res.json({ success: true, nextReview, difficulty });
});

// POST /api/flashcards/session-complete — Mark a flashcard study session done (for XP)
router.post('/session-complete', authenticate, (req, res) => {
  const { chapterId } = req.body;

  // Award XP once per chapter per day
  const today = new Date().toISOString().slice(0, 10);
  const alreadyToday = req.db.prepare(`SELECT id FROM user_xp WHERE user_id = ? AND source = 'flashcard_session' AND source_id = ? AND DATE(created_at) = ?`).get(req.user.id, `ch${chapterId}`, today);

  let gamification = null;
  if (!alreadyToday) {
    gamification = awardXp(req.db, req.user.id, XP_REWARDS.flashcard_session, 'flashcard_session', `ch${chapterId}`);
  }

  res.json({ success: true, gamification });
});

// GET /api/flashcards/all/summary — Summary for all chapters
router.get('/all/summary', (req, res) => {
  const summary = req.db.prepare(`
    SELECT chapter_id, COUNT(*) as count FROM flashcards GROUP BY chapter_id ORDER BY chapter_id
  `).all();

  res.json(summary.map(s => ({
    chapterId: s.chapter_id,
    count: s.count,
  })));
});

module.exports = router;
