const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// Create a new document
router.post('/create', async (req, res) => {
    try {
        const newDocument = new Document(req.body);
        const savedDocument = await newDocument.save();
        res.json(savedDocument);
    } catch (documentError) {
        res.status(500).json({ error: documentError.message });
    }
});

// Get a specific document
router.get('/:id', async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) throw new Error('Document not found');
        res.json(document);
    } catch (documentError) {
        res.status(500).json({ error: documentError.message });
    }
});

// Update a document
router.put('/:id', async (req, res) => {
    try {
        const document = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!document) throw new Error('Document not found');
        res.json(document);
    } catch (documentError) {
        res.status(500).json({ error: documentError.message });
    }
});

// Delete a document
router.delete('/:id', async (req, res) => {
    try {
        const document = await Document.findByIdAndDelete(req.params.id);
        if (!document) throw new Error('Document not found');
        res.json({ message: 'Document deleted' });
    } catch (documentError) {
        res.status(500).json({ error: documentError.message });
    }
});

module.exports = router;