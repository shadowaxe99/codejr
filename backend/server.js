```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/project');
const versionControlRoutes = require('./routes/versionControl');
const collaborationRoutes = require('./routes/collaboration');
const taskManagementRoutes = require('./routes/taskManagement');
const documentationRoutes = require('./routes/documentation');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/codeCollabDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Could not connect to MongoDB: ', error));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/versionControl', versionControlRoutes);
app.use('/api/collaboration', collaborationRoutes);
app.use('/api/taskManagement', taskManagementRoutes);
app.use('/api/documentation', documentationRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
```