// backend/routes/ResumeRoutes.js
import express from 'express';
import Resume from '../models/Resume.js';

const router = express.Router();

// Create a new Resume
router.post('/', async (req, res) => {
  try {
    console.log('Request received to add resume:', req.body);
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();
    res.status(200).json(savedResume);
  } catch (err) {
    console.error('Error saving resume:', err);
    res.status(500).json({ message: 'Failed to save resume', error: err.message });
  }
});

// GET /api/resumes/latest - Get the most recent resume
router.get('/latest', async (req, res) => {
  try {
    const latestResume = await Resume.findOne().sort({ CreatedDateTime: -1 });
    if (!latestResume) {
      return res.status(404).json({ message: 'No resumes found' });
    }
    res.json(latestResume);
  } catch (err) {
    console.error('Error fetching latest resume:', err);
    res.status(500).json({ message: 'Failed to fetch latest resume', error: err.message });
  }
});
// Get a Resume by ID
router.get('/:id', async (req, res) => {
  try {
    const foundResume = await Resume.findById(req.params.id);
    if (!foundResume) {
      return res.status(404).json({ message: 'Resume not found' });
    }
    res.json(foundResume);
  } catch (err) {
    console.error('Error fetching resume by ID:', err);
    res.status(500).json({ message: 'Failed to fetch resume', error: err.message });
  }
});


export default router;
