```javascript
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User Sign Up
router.post('/signup', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ authError: 'Error creating user' });
  }
});

// User Sign In
router.post('/signin', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ authError: 'User not found' });
    }
    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(400).json({ authError: 'Invalid password' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ authError: 'Error signing in' });
  }
});

module.exports = router;
```