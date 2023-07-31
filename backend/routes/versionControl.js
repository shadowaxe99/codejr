```javascript
const express = require('express');
const router = express.Router();
const Version = require('../models/Version');

// Get all versions
router.get('/', async (req, res) => {
  try {
    const versions = await Version.find();
    res.json(versions);
  } catch (err) {
    res.status(500).json({ message: 'versionError' });
  }
});

// Get specific version
router.get('/:id', getVersion, (req, res) => {
  res.json(res.version);
});

// Create version
router.post('/', async (req, res) => {
  const version = new Version({
    code: req.body.code,
    timestamp: req.body.timestamp,
    author: req.body.author,
    changes: req.body.changes
  });

  try {
    const newVersion = await version.save();
    res.status(201).json(newVersion);
  } catch (err) {
    res.status(400).json({ message: 'versionError' });
  }
});

// Middleware function for get by ID
async function getVersion(req, res, next) {
  let version;
  try {
    version = await Version.findById(req.params.id);
    if (version == null) {
      return res.status(404).json({ message: 'Cannot find version' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'versionError' });
  }

  res.version = version;
  next();
}

module.exports = router;
```