const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ createdAt: 1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving projects', error: error.message });
  }
});

// GET single project by slug
router.get('/:slug', async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving project', error: error.message });
  }
});

module.exports = router;
