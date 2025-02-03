// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Temporary in-memory storage for demonstration
const users = [];

// Endpoint: Create a new user
router.post('/signup', (req, res) => {
  const { email, userNumber, questionnaire } = req.body;

  // Basic validation: Check that the email and user number exist.
  if (!email || !userNumber) {
    return res.status(400).json({ success: false, message: 'Email and user number are required.' });
  }

  // Create a new user object (in a real app, you'd generate a unique ID, etc.)
  const newUser = {
    id: users.length + 1,
    email,
    userNumber,
    questionnaire, // store any additional data from the sign-up questionnaire
    createdAt: new Date(),
  };

  // Save the new user to the in-memory array (or later, to a database)
  users.push(newUser);
  res.json({ success: true, message: 'User signed up successfully', user: newUser });
});


// Endpoint: Login an existing user
router.post('/login', (req, res) => {
    const { email, userNumber } = req.body;
  
    // Find the user in our in-memory storage
    const user = users.find(u => u.email === email && u.userNumber === userNumber);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or user number.' });
    }
  
    // In a real application, consider generating a session token here.
    res.json({ success: true, message: 'Login successful', user });
  });
  
  module.exports = router;
  