// routes/kanjiRoutes.js
const express = require('express');
const router = express.Router();

// Example Kanji list (in a real app, load from a database or file)
const kanjiList = [
  { id: 1, character: '日', readings: { japanese: ['にち', 'ひ'], romanji: ['nichi', 'hi'] } },
  { id: 2, character: '月', readings: { japanese: ['げつ', 'つき'], romanji: ['getsu', 'tsuki'] } },
  // Add more Kanji as needed
];

// Endpoint: Return the Kanji list
router.get('/', (req, res) => {
  res.json({ success: true, kanji: kanjiList });
});


// Endpoint: Record which Kanji the user already knows
router.post('/screening', (req, res) => {
    const { userId, knownKanjiIds } = req.body;
  
    // For now, just log the information; later update the user's record in your database.
    console.log(`User ${userId} knows Kanji IDs: ${knownKanjiIds}`);
  
    res.json({ success: true, message: 'Kanji screening responses recorded.' });
  });
  
  module.exports = router;
  