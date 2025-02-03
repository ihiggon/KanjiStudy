// routes/progressRoutes.js
const express = require('express');
const router = express.Router();

// Temporary in-memory storage for progress logs
const progressLogs = [];

// Endpoint: Update daily progress
router.post('/progress', (req, res) => {
  const { userId, date, completedSets } = req.body;

  if (!userId || !date || !completedSets) {
    return res.status(400).json({ success: false, message: 'Missing required progress data.' });
  }

  const progressEntry = {
    id: progressLogs.length + 1,
    userId,
    date,
    completedSets, // This might be an object or array indicating which sets are complete
    timestamp: new Date(),
  };

  progressLogs.push(progressEntry);
  res.json({ success: true, message: 'Progress updated.', progress: progressEntry });
});

module.exports = router;
