const express = require('express');
const cors = require('cors');
const { initDatabase } = require('./database');
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');
const progressRoutes = require('./routes/progress');
const adminRoutes = require('./routes/admin');
const quizRoutes = require('./routes/quiz');
const gameRoutes = require('./routes/game');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = 3000;

// Initialize database
const db = initDatabase();

// Middleware
app.use(cors({ origin: ['http://localhost:4200', 'http://localhost:4201'], credentials: true }));
app.use(express.json());

// Attach db to request
app.use((req, _res, next) => {
  req.db = db;
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/game', gameRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`PsyLearn API running on http://localhost:${PORT}`);
});
