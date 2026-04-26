import express from 'express';
import Document from '../models/Document.js';

const router = express.Router();

/**
 * GET /api/documents
 * Optional query params:
 * - search
 * - topCategory
 * - section
 */
router.get('/', async (req, res) => {
  try {
    const { search = '', topCategory = '', section = '' } = req.query;

    const query = {
      visible: true,
    };

    if (topCategory) {
      query.topCategory = topCategory;
    }

    if (section) {
      query.section = section;
    }

    if (search.trim()) {
      query.$or = [
        { title: { $regex: search.trim(), $options: 'i' } },
        { topCategory: { $regex: search.trim(), $options: 'i' } },
        { section: { $regex: search.trim(), $options: 'i' } },
        { subgroup: { $regex: search.trim(), $options: 'i' } },
        { tags: { $elemMatch: { $regex: search.trim(), $options: 'i' } } },
      ];
    }

    const documents = await Document.find(query).sort({
      topCategory: 1,
      section: 1,
      subgroup: 1,
      sortOrder: 1,
      title: 1,
    });

    res.status(200).json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ message: 'Failed to fetch documents' });
  }
});

export default router;