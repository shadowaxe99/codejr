```javascript
const express = require('express');
const router = express.Router();
const Collaboration = require('../models/Collaboration');

// Route to share edit
router.post('/shareEdit', async (req, res) => {
    try {
        const sharedEdit = new Collaboration({
            projectId: req.body.projectId,
            userId: req.body.userId,
            code: req.body.code
        });
        const savedEdit = await sharedEdit.save();
        res.json(savedEdit);
    } catch (collaborationError) {
        res.json({ message: collaborationError });
    }
});

// Route to add comment
router.post('/addComment', async (req, res) => {
    try {
        const comment = new Collaboration({
            projectId: req.body.projectId,
            userId: req.body.userId,
            comment: req.body.comment
        });
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (collaborationError) {
        res.json({ message: collaborationError });
    }
});

module.exports = router;
```