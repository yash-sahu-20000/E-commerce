import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  searchProducts
} from "../controllers/product.controller.js";
import multerUpload from '../config/multer.js'

import { protect, verifyAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/search", searchProducts);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", protect, verifyAdmin, multerUpload.array('images', 4), createProduct);
router.put("/:id", protect, verifyAdmin, multerUpload.array('images', 4), updateProduct);
router.delete("/:id", protect, verifyAdmin, deleteProduct);

export default router;
