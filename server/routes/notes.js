const express = require('express');
const { authenticate } = require('../middleware');

const router = express.Router();

// Get all notes for current user
router.get('/', authenticate, (req, res) => {
  const notes = req.db.prepare(`
    SELECT * FROM notes WHERE user_id = ? ORDER BY updated_at DESC
  `).all(req.user.id);

  res.json(notes.map(n => ({
    id: n.id,
    title: n.title,
    content: n.content,
    chapterId: n.chapter_id,
    color: n.color,
    createdAt: n.created_at,
    updatedAt: n.updated_at
  })));
});

// Create note
router.post('/', authenticate, (req, res) => {
  const { title, content, chapterId, color } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }

  const result = req.db.prepare(`
    INSERT INTO notes (user_id, title, content, chapter_id, color)
    VALUES (?, ?, ?, ?, ?)
  `).run(req.user.id, title, content, chapterId || null, color || '#f0e6ff');

  res.status(201).json({
    id: result.lastInsertRowid,
    title,
    content,
    chapterId,
    color: color || '#f0e6ff'
  });
});

// Update note
router.put('/:id', authenticate, (req, res) => {
  const { title, content, color } = req.body;
  const note = req.db.prepare('SELECT * FROM notes WHERE id = ? AND user_id = ?').get(req.params.id, req.user.id);

  if (!note) {
    return res.status(404).json({ error: 'Note not found.' });
  }

  req.db.prepare(`
    UPDATE notes SET title = ?, content = ?, color = ?, updated_at = datetime('now') WHERE id = ?
  `).run(title || note.title, content || note.content, color || note.color, req.params.id);

  res.json({ message: 'Note updated.' });
});

// Delete note
router.delete('/:id', authenticate, (req, res) => {
  const result = req.db.prepare('DELETE FROM notes WHERE id = ? AND user_id = ?').run(req.params.id, req.user.id);

  if (result.changes === 0) {
    return res.status(404).json({ error: 'Note not found.' });
  }

  res.json({ message: 'Note deleted.' });
});

module.exports = router;
