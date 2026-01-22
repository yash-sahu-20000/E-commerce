import express from "express";

const router = express.Router();
router.get('/profile', protect, verifyUser, getProfile);


export default router;
