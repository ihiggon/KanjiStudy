// routes/questionnaireRoutes.js
const express = require('express');
const router = express.Router();

// Temporary storage for questionnaire responses
const questionnaireResponses = [];

// Endpoint: Save daily questionnaire responses
router.post('/daily-questionnaire', (req, res) => {
  const { userId, date, responses } = req.body;
  if (!userId || !date || !responses) {
    return res.status(400).json({ success: false, message: 'Missing required questionnaire data.' });
  }

  const entry = {
    id: questionnaireResponses.length + 1,
    userId,
    date,
    responses,
    timestamp: new Date(),
  };

  questionnaireResponses.push(entry);
  res.json({ success: true, message: 'Daily questionnaire recorded.', entry });
});

// Endpoint: Save final assessment responses
router.post('/final-assessment', (req, res) => {
  const { userId, responses } = req.body;
  if (!userId || !responses) {
    return res.status(400).json({ success: false, message: 'Missing final assessment data.' });
  }

  // You might store this differently; for now, we append it to the same storage.
  const entry = {
    id: questionnaireResponses.length + 1,
    userId,
    responses,
    timestamp: new Date(),
  };

  questionnaireResponses.push(entry);
  res.json({ success: true, message: 'Final assessment recorded.', entry });
});

module.exports = router;
