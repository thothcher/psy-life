const express = require('express');
const { authenticate } = require('../middleware');
const { awardXp, XP_REWARDS } = require('./gamification');

const router = express.Router();

// Get user's overall progress
router.get('/', authenticate, async (req, res) => {
  const chapters = await req.db.execute({ sql: 'SELECT * FROM chapter_progress WHERE user_id = ?', args: [req.user.id] });
  const quizzes = await req.db.execute({ sql: 'SELECT chapter_id, MAX(score) as best_score, total_questions, COUNT(*) as attempts FROM quiz_progress WHERE user_id = ? GROUP BY chapter_id, quiz_id', args: [req.user.id] });
  const gameScores = await req.db.execute({ sql: 'SELECT level, MIN(moves) as best_moves, MIN(time_seconds) as best_time FROM memory_game_scores WHERE user_id = ? GROUP BY level', args: [req.user.id] });

  res.json({
    chapters: chapters.rows.map(c => ({ chapterId: c.chapter_id, status: c.status, updatedAt: c.updated_at })),
    quizzes: quizzes.rows.map(q => ({ chapterId: q.chapter_id, bestScore: q.best_score, totalQuestions: q.total_questions, attempts: q.attempts })),
    gameScores: gameScores.rows.map(g => ({ level: g.level, bestMoves: g.best_moves, bestTime: g.best_time })),
  });
});

// Update chapter progress
router.post('/chapter', authenticate, async (req, res) => {
  const { chapterId, status } = req.body;
  if (!chapterId || !status) return res.status(400).json({ error: 'chapterId and status are required.' });

  const prev = await req.db.execute({ sql: 'SELECT status FROM chapter_progress WHERE user_id = ? AND chapter_id = ?', args: [req.user.id, chapterId] });

  await req.db.execute({
    sql: "INSERT INTO chapter_progress (user_id, chapter_id, status) VALUES (?, ?, ?) ON CONFLICT(user_id, chapter_id) DO UPDATE SET status = ?, updated_at = datetime('now')",
    args: [req.user.id, chapterId, status, status],
  });

  let gamification = null;
  if (status === 'completed' && (prev.rows.length === 0 || prev.rows[0].status !== 'completed')) {
    gamification = await awardXp(req.db, req.user.id, XP_REWARDS.chapter_complete, 'chapter_complete', `ch${chapterId}`);
  }

  res.json({ message: 'Chapter progress updated.', gamification });
});

module.exports = router;
