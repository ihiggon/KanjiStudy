const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import route files
const userRoutes = require('./routes/userRoutes');
const kanjiRoutes = require('./routes/kanjiRoutes');
const flashcardRoutes = require('./routes/flashcardRoutes');
const progressRoutes = require('./routes/progressRoutes');
const questionnaireRoutes = require('./routes/questionnaireRoutes');

// Mount the routes under a common base path, e.g., '/api'
app.use('/api', userRoutes);              // Handles /api/signup, /api/login, etc.
app.use('/api/kanji', kanjiRoutes);         // Handles /api/kanji (GET) and /api/kanji/screening (POST)
app.use('/api', flashcardRoutes);           // Handles /api/flashcard-data
app.use('/api', progressRoutes);            // Handles /api/progress
app.use('/api', questionnaireRoutes);       // Handles /api/daily-questionnaire, /api/final-assessment

// Health check endpoint
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
