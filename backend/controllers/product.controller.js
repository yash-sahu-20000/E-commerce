import cloudinary from "../config/cloudinary.js";
import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const {
      category,
      minPrice,
      maxPrice,
      rating,
      isPopular,
      isFeatured,
      search,
      page = 1,
      limit = 8
    } = req.query;
    console.log(req.query)
    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (rating) {
      filter.rating = { $gte: Number(rating) };
    }

    if (isPopular !== undefined) {
      filter.isPopular = isPopular === "true";
    }

    if (isFeatured !== undefined) {
      filter.isFeatured = isFeatured === "true";
    }

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    const skip = (page - 1) * limit;

    const products = await Product.find(filter)
      .populate("category", "name")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Product.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      products,
      total,
      totalPages,
      page: Number(page),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById({_id: req.params.id})
      .populate("category", "name")
      .sort({ createdAt: -1 });

    res.json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createProduct = async (req, res) => {
  try {
    const {
      title,
      category,
      price,
      stock,
      status,
      description,
    } = req.body;

    let images = [];

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(
          `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
          { folder: "products" }
        );

        images.push(result.secure_url);
      }
    }

    const product = await Product.create({
      title,
      category, 
      price,
      stock,
      status,
      description,
      images,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create product",
    });
  }
};



export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let updateData = { ...req.body };

    let existingImages = [];
    if (req.body.existingImages) {
      existingImages = JSON.parse(req.body.existingImages);
    }

    let newImages = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(
          `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
          { folder: "products" }
        );
        newImages.push(result.secure_url);
      }
    }

    updateData.images = [...existingImages, ...newImages];

    const product = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product updated successfully",
      product,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update product",
    });
  }
};


export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete product",
    });
  }
};

