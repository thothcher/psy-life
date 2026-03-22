const express = require('express');
const { authenticate } = require('../middleware');

const router = express.Router();

// Get user's overall progress
router.get('/', authenticate, (req, res) => {
  const chapters = req.db.prepare(`
    SELECT * FROM chapter_progress WHERE user_id = ?
  `).all(req.user.id);

  const quizzes = req.db.prepare(`
    SELECT chapter_id, MAX(score) as best_score, total_questions, COUNT(*) as attempts
    FROM quiz_progress WHERE user_id = ? GROUP BY chapter_id, quiz_id
  `).all(req.user.id);

  const gameScores = req.db.prepare(`
    SELECT level, MIN(moves) as best_moves, MIN(time_seconds) as best_time
    FROM memory_game_scores WHERE user_id = ? GROUP BY level
  `).all(req.user.id);

  res.json({
    chapters: chapters.map(c => ({
      chapterId: c.chapter_id,
      status: c.status,
      updatedAt: c.updated_at
    })),
    quizzes: quizzes.map(q => ({
      chapterId: q.chapter_id,
      bestScore: q.best_score,
      totalQuestions: q.total_questions,
      attempts: q.attempts
    })),
    gameScores: gameScores.map(g => ({
      level: g.level,
      bestMoves: g.best_moves,
      bestTime: g.best_time
    }))
  });
});

// Update chapter progress
router.post('/chapter', authenticate, (req, res) => {
  const { chapterId, status } = req.body;

  if (!chapterId || !status) {
    return res.status(400).json({ error: 'chapterId and status are required.' });
  }

  req.db.prepare(`
    INSERT INTO chapter_progress (user_id, chapter_id, status)
    VALUES (?, ?, ?)
    ON CONFLICT(user_id, chapter_id) DO UPDATE SET status = ?, updated_at = datetime('now')
  `).run(req.user.id, chapterId, status, status);

  res.json({ message: 'Chapter progress updated.' });
});

module.exports = router;
