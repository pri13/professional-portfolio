import express from 'express';
import Project from '../models/Project.js';


const router = express.Router();

// GET /api/projects/getprojects
// fetch all Project(s) by category and sort newest at the top Descending Order.
router.get('/getprojects', async (req, res) => {
    try {
        const projects = await Project.find({ category: req.query.category }).sort({ displayOrder: -1 });
        res.json(projects);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/projects/:slug  -
// fetch single project by slug
router.get('/:slug', async (req, res) => {
    try {
        const slug = req.params.slug;
        const project = await Project.findOne({ slug: slug });
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }

});

export default router;