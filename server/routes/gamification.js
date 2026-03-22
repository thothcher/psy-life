const express = require('express');
const { authenticate } = require('../middleware');

const router = express.Router();

// ── XP Reward amounts ──
const XP_REWARDS = {
  quiz_pass: 15,       // Quiz score >= 60%
  quiz_good: 25,       // Quiz score >= 80%
  quiz_perfect: 50,    // Quiz score = 100%
  chapter_complete: 25,
  memory_game: 10,
  flashcard_session: 10,
  daily_login: 5,
  streak_bonus_7: 30,
  note_created: 5,
};

// ── Level thresholds ──
const LEVELS = [
  { level: 1, xp: 0, titleEn: 'Beginner', titleKa: 'დამწყები' },
  { level: 2, xp: 100, titleEn: 'Curious Mind', titleKa: 'ცნობისმოყვარე' },
  { level: 3, xp: 300, titleEn: 'Fast Learner', titleKa: 'სწრაფი მოსწავლე' },
  { level: 4, xp: 600, titleEn: 'Knowledge Seeker', titleKa: 'ცოდნის მაძიებელი' },
  { level: 5, xp: 1000, titleEn: 'Quiz Champion', titleKa: 'ვიქტორინის ჩემპიონი' },
  { level: 6, xp: 1500, titleEn: 'Brain Master', titleKa: 'ტვინის ოსტატი' },
  { level: 7, xp: 2200, titleEn: 'Psychology Pro', titleKa: 'ფსიქოლოგიის პროფი' },
  { level: 8, xp: 3000, titleEn: 'Scholar', titleKa: 'მეცნიერი' },
  { level: 9, xp: 4000, titleEn: 'Expert', titleKa: 'ექსპერტი' },
  { level: 10, xp: 5500, titleEn: 'PsyLearn Legend', titleKa: 'PsyLearn ლეგენდა' },
];

function getLevel(totalXp) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (totalXp >= l.xp) current = l;
    else break;
  }
  const nextLevel = LEVELS.find(l => l.xp > totalXp);
  return {
    level: current.level,
    titleEn: current.titleEn,
    titleKa: current.titleKa,
    currentXp: totalXp,
    nextLevelXp: nextLevel ? nextLevel.xp : null,
  };
}

// ── Streak helper ──
function updateStreak(db, userId) {
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  let streak = db.prepare('SELECT * FROM streaks WHERE user_id = ?').get(userId);
  if (!streak) {
    db.prepare('INSERT INTO streaks (user_id, current_streak, longest_streak, last_activity_date) VALUES (?, 1, 1, ?)').run(userId, today);
    return { currentStreak: 1, longestStreak: 1, isNewDay: true };
  }

  if (streak.last_activity_date === today) {
    return { currentStreak: streak.current_streak, longestStreak: streak.longest_streak, isNewDay: false };
  }

  let newStreak;
  if (streak.last_activity_date === yesterday) {
    newStreak = streak.current_streak + 1;
  } else {
    newStreak = 1;
  }
  const newLongest = Math.max(newStreak, streak.longest_streak);

  db.prepare('UPDATE streaks SET current_streak = ?, longest_streak = ?, last_activity_date = ? WHERE user_id = ?')
    .run(newStreak, newLongest, today, userId);

  return { currentStreak: newStreak, longestStreak: newLongest, isNewDay: true };
}

// ── Badge check helper ──
function checkBadges(db, userId) {
  const allBadges = db.prepare('SELECT * FROM badges').all();
  const earnedIds = new Set(
    db.prepare('SELECT badge_id FROM user_badges WHERE user_id = ?').all(userId).map(b => b.badge_id)
  );

  const totalXp = db.prepare('SELECT COALESCE(SUM(amount), 0) as total FROM user_xp WHERE user_id = ?').get(userId).total;
  const quizzesCompleted = db.prepare('SELECT COUNT(DISTINCT chapter_id) as c FROM quiz_progress WHERE user_id = ?').get(userId).c;
  const perfectQuizzes = db.prepare(`SELECT COUNT(*) as c FROM quiz_progress WHERE user_id = ? AND score = total_questions`).get(userId).c;
  const chaptersCompleted = db.prepare(`SELECT COUNT(*) as c FROM chapter_progress WHERE user_id = ? AND status = 'completed'`).get(userId).c;
  const streak = db.prepare('SELECT current_streak FROM streaks WHERE user_id = ?').get(userId);
  const streakDays = streak ? streak.current_streak : 0;
  const notesCreated = db.prepare('SELECT COUNT(*) as c FROM notes WHERE user_id = ?').get(userId).c;
  const memoryWins = db.prepare(`SELECT COUNT(DISTINCT level) as c FROM memory_game_scores WHERE user_id = ?`).get(userId).c;
  const memoryHard = db.prepare(`SELECT COUNT(*) as c FROM memory_game_scores WHERE user_id = ? AND level = 'hard'`).get(userId).c;
  const flashcardSessions = db.prepare(`SELECT COUNT(DISTINCT DATE(last_reviewed) || '-' || flashcard_id / 100) as c FROM user_flashcard_progress WHERE user_id = ? AND review_count > 0`).get(userId).c;

  const stats = {
    xp_total: totalXp,
    quizzes_completed: quizzesCompleted,
    perfect_quiz: perfectQuizzes,
    chapters_completed: chaptersCompleted,
    streak_days: streakDays,
    notes_created: notesCreated,
    memory_game_win: memoryWins,
    memory_game_hard: memoryHard,
    flashcard_sessions: flashcardSessions,
  };

  const newBadges = [];
  const insertBadge = db.prepare('INSERT OR IGNORE INTO user_badges (user_id, badge_id) VALUES (?, ?)');

  for (const badge of allBadges) {
    if (earnedIds.has(badge.id)) continue;
    const statVal = stats[badge.condition_type] || 0;
    if (statVal >= badge.condition_value) {
      insertBadge.run(userId, badge.id);
      newBadges.push({
        id: badge.id,
        nameEn: badge.name_en,
        nameKa: badge.name_ka,
        descriptionEn: badge.description_en,
        descriptionKa: badge.description_ka,
        icon: badge.icon,
        category: badge.category,
      });
    }
  }

  return newBadges;
}

// ── Award XP helper ──
function awardXp(db, userId, amount, source, sourceId) {
  db.prepare('INSERT INTO user_xp (user_id, amount, source, source_id) VALUES (?, ?, ?, ?)').run(userId, amount, source, sourceId);

  // Update streak & award daily login XP if new day
  const streakResult = updateStreak(db, userId);
  let bonusXp = 0;
  if (streakResult.isNewDay) {
    db.prepare('INSERT INTO user_xp (user_id, amount, source) VALUES (?, ?, ?)').run(userId, XP_REWARDS.daily_login, 'daily_login');
    bonusXp += XP_REWARDS.daily_login;
    // 7-day streak bonus
    if (streakResult.currentStreak > 0 && streakResult.currentStreak % 7 === 0) {
      db.prepare('INSERT INTO user_xp (user_id, amount, source) VALUES (?, ?, ?)').run(userId, XP_REWARDS.streak_bonus_7, 'streak_bonus');
      bonusXp += XP_REWARDS.streak_bonus_7;
    }
  }

  const newBadges = checkBadges(db, userId);
  const totalXp = db.prepare('SELECT COALESCE(SUM(amount), 0) as total FROM user_xp WHERE user_id = ?').get(userId).total;

  return {
    xpAwarded: amount + bonusXp,
    totalXp,
    level: getLevel(totalXp),
    streak: streakResult,
    newBadges,
  };
}

// ────────────── API ENDPOINTS ──────────────

// GET /api/gamification/stats — Full gamification profile
router.get('/stats', authenticate, (req, res) => {
  const userId = req.user.id;
  const totalXp = req.db.prepare('SELECT COALESCE(SUM(amount), 0) as total FROM user_xp WHERE user_id = ?').get(userId).total;
  const streak = req.db.prepare('SELECT * FROM streaks WHERE user_id = ?').get(userId);
  const badges = req.db.prepare(`
    SELECT b.*, ub.earned_at FROM user_badges ub
    JOIN badges b ON ub.badge_id = b.id
    WHERE ub.user_id = ?
    ORDER BY ub.earned_at DESC
  `).all(userId);
  const allBadges = req.db.prepare('SELECT * FROM badges ORDER BY category, condition_value').all();

  // Recent XP history (last 20)
  const recentXp = req.db.prepare('SELECT * FROM user_xp WHERE user_id = ? ORDER BY created_at DESC LIMIT 20').all(userId);

  // XP earned today
  const today = new Date().toISOString().slice(0, 10);
  const todayXp = req.db.prepare(`SELECT COALESCE(SUM(amount), 0) as total FROM user_xp WHERE user_id = ? AND DATE(created_at) = ?`).get(userId, today).total;

  res.json({
    totalXp,
    todayXp,
    level: getLevel(totalXp),
    streak: streak ? {
      currentStreak: streak.current_streak,
      longestStreak: streak.longest_streak,
      lastActivityDate: streak.last_activity_date,
    } : { currentStreak: 0, longestStreak: 0, lastActivityDate: null },
    earnedBadges: badges.map(b => ({
      id: b.id,
      nameEn: b.name_en,
      nameKa: b.name_ka,
      descriptionEn: b.description_en,
      descriptionKa: b.description_ka,
      icon: b.icon,
      category: b.category,
      earnedAt: b.earned_at,
    })),
    allBadges: allBadges.map(b => ({
      id: b.id,
      nameEn: b.name_en,
      nameKa: b.name_ka,
      descriptionEn: b.description_en,
      descriptionKa: b.description_ka,
      icon: b.icon,
      category: b.category,
      conditionType: b.condition_type,
      conditionValue: b.condition_value,
    })),
    recentXp: recentXp.map(x => ({
      amount: x.amount,
      source: x.source,
      sourceId: x.source_id,
      createdAt: x.created_at,
    })),
  });
});

// GET /api/gamification/leaderboard — Top users by XP
router.get('/leaderboard', (req, res) => {
  const leaders = req.db.prepare(`
    SELECT u.id, u.username, u.display_name, COALESCE(SUM(x.amount), 0) as total_xp,
           COALESCE(s.current_streak, 0) as current_streak
    FROM users u
    LEFT JOIN user_xp x ON u.id = x.user_id
    LEFT JOIN streaks s ON u.id = s.user_id
    WHERE u.role = 'user'
    GROUP BY u.id
    HAVING total_xp > 0
    ORDER BY total_xp DESC
    LIMIT 20
  `).all();

  res.json(leaders.map((l, i) => ({
    rank: i + 1,
    username: l.username,
    displayName: l.display_name,
    totalXp: l.total_xp,
    level: getLevel(l.total_xp),
    currentStreak: l.current_streak,
  })));
});

// GET /api/gamification/levels — Level definitions
router.get('/levels', (_req, res) => {
  res.json(LEVELS);
});

// Expose helpers for other routes
module.exports = router;
module.exports.awardXp = awardXp;
module.exports.XP_REWARDS = XP_REWARDS;
module.exports.updateStreak = updateStreak;
module.exports.checkBadges = checkBadges;
