import express from 'express';
import { protect, verifyUser, verifyAdmin } from '../middleware/auth.middleware.js';
import { deleteUser, getUser, getUsers, updatePassword, updateUser } from '../controllers/user.controller.js';

const router = express.Router();


router.get('/', protect, verifyAdmin, getUsers);
router.delete('/:id', protect, verifyAdmin, deleteUser);
router.get('/:id', protect, getUser);
router.post('/:id', protect, verifyUser, updateUser);
router.post('/update-password/:id', protect, verifyUser, updatePassword);


export default router;
