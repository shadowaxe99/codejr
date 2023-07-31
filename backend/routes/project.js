```javascript
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Create a new project
router.post('/create', async (req, res) => {
    const project = new Project({
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner,
        collaborators: req.body.collaborators
    });

    try {
        const savedProject = await project.save();
        res.json(savedProject);
    } catch (err) {
        res.json({ projectError: err });
    }
});

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.json({ projectError: err });
    }
});

// Get a specific project
router.get('/:projectId', async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId);
        res.json(project);
    } catch (err) {
        res.json({ projectError: err });
    }
});

// Update a project
router.patch('/:projectId', async (req, res) => {
    try {
        const updatedProject = await Project.updateOne(
            { _id: req.params.projectId },
            { $set: { name: req.body.name, description: req.body.description } }
        );
        res.json(updatedProject);
    } catch (err) {
        res.json({ projectError: err });
    }
});

// Delete a project
router.delete('/:projectId', async (req, res) => {
    try {
        const removedProject = await Project.remove({ _id: req.params.projectId });
        res.json(removedProject);
    } catch (err) {
        res.json({ projectError: err });
    }
});

module.exports = router;
```