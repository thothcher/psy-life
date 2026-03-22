const express = require('express');
const { authenticate } = require('../middleware');
const { awardXp, XP_REWARDS } = require('./gamification');

const router = express.Router();

// Submit memory game score
router.post('/score', authenticate, (req, res) => {
  const { level, moves, timeSeconds } = req.body;

  if (!level || moves == null || timeSeconds == null) {
    return res.status(400).json({ error: 'Level, moves and timeSeconds are required.' });
  }

  const result = req.db.prepare(`
    INSERT INTO memory_game_scores (user_id, level, moves, time_seconds)
    VALUES (?, ?, ?, ?)
  `).run(req.user.id, level, moves, timeSeconds);

  // Award XP (once per level per day)
  const today = new Date().toISOString().slice(0, 10);
  const alreadyToday = req.db.prepare(`SELECT id FROM user_xp WHERE user_id = ? AND source = 'memory_game' AND source_id = ? AND DATE(created_at) = ?`).get(req.user.id, level, today);

  let gamification = null;
  if (!alreadyToday) {
    gamification = awardXp(req.db, req.user.id, XP_REWARDS.memory_game, 'memory_game', level);
  }

  res.status(201).json({ id: result.lastInsertRowid, gamification });
});

// Get leaderboard
router.get('/leaderboard/:level', (req, res) => {
  const scores = req.db.prepare(`
    SELECT u.username, u.display_name, MIN(g.moves) as best_moves, MIN(g.time_seconds) as best_time
    FROM memory_game_scores g
    JOIN users u ON g.user_id = u.id
    WHERE g.level = ?
    GROUP BY g.user_id
    ORDER BY best_moves ASC, best_time ASC
    LIMIT 10
  `).all(req.params.level);

  res.json(scores.map(s => ({
    username: s.username,
    displayName: s.display_name,
    bestMoves: s.best_moves,
    bestTime: s.best_time
  })));
});

module.exports = router;
