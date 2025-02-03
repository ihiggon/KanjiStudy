// routes/flashcardRoutes.js
const express = require('express');
const router = express.Router();

// Temporary storage for flashcard logs (in a real app, use a database)
const flashcardLogs = [];

// Endpoint: Log flashcard interaction data
router.post('/flashcard-data', (req, res) => {
  const { userId, cardId, studyMethod, interactionType, timestamp, additionalData } = req.body;

  // Validate required fields (you can extend this validation)
  if (!userId || !cardId || !studyMethod || !interactionType || !timestamp) {
    return res.status(400).json({ success: false, message: 'Missing required flashcard interaction data.' });
  }

  // Create a log entry
  const logEntry = {
    id: flashcardLogs.length + 1,
    userId,
    cardId,
    studyMethod,        // e.g., "simple", "handwriting", "spaced repetition"
    interactionType,    // e.g., "flip", "next", "back"
    timestamp,
    additionalData,     // Any extra information (like time spent, response rating, etc.)
  };

  flashcardLogs.push(logEntry);
  res.json({ success: true, message: 'Flashcard interaction logged.', log: logEntry });
});

module.exports = router;
