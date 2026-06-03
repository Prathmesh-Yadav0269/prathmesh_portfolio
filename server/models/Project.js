const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  problem: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  technologies: {
    type: [String],
    default: []
  },
  features: {
    type: [String],
    default: []
  },
  learnings: {
    type: [String],
    default: []
  },
  github: {
    type: String,
    default: ""
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);
