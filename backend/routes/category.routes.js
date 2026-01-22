import express from 'express';
import multer from 'multer';
import { createCategory, getCategories } from '../../controllers/category.controller.js';
import { protect, verifyAdmin } from '../../middleware/auth.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only images'), false);
  }
});

router.post('/', protect, verifyAdmin, upload.array('images', 1), createCategory);
router.get('/', protect, verifyAdmin, getCategories);

export default router;
