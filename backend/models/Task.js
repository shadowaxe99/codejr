const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done'],
    default: 'To Do'
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);