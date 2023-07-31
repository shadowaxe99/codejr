```javascript
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Assign a new task
router.post('/assign', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        assignee: req.body.assignee,
        status: 'Assigned'
    });

    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        res.json({ message: taskError, error: err });
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.json({ message: taskError, error: err });
    }
});

// Update task progress
router.patch('/:taskId', async (req, res) => {
    try {
        const updatedTask = await Task.updateOne(
            { _id: req.params.taskId },
            { $set: { status: req.body.status } }
        );
        res.json(updatedTask);
    } catch (err) {
        res.json({ message: taskError, error: err });
    }
});

module.exports = router;
```