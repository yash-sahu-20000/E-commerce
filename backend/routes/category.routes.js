import express from 'express';
import { createCategory, deleteCategory, getCategories, getCategoriesWithChildren, getRootCategories } from '../controllers/category.controller.js';
import { protect, verifyAdmin } from '../middleware/auth.middleware.js';
import multerUpload from '../config/multer.js';

const router = express.Router();


router.post('/add', protect, verifyAdmin, multerUpload.array('images', 1), createCategory);
router.get('/', getCategories);
router.get("/root", getRootCategories);
router.get("/rootwithchild", getCategoriesWithChildren);

router.delete('/:id', protect, verifyAdmin, deleteCategory);


export default router;
