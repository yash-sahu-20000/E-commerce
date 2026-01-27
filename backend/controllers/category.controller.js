import Category from '../models/Category.js';
import cloudinary from '../config/cloudinary.js';



export const createCategory = async (req, res) => {
  try {
    const { name, description, parent } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    let parentCategory = null;
    if (parent) {
      parentCategory = await Category.findById(parent);
      if (!parentCategory) {
        return res.status(400).json({
          success: false,
          message: "Parent category not found",
        });
      }
    }

    let images = [];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(
          `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
          { folder: "categories" }
        );
        images.push(result.secure_url);
      }
    }

    const category = await Category.create({
      name,
      description,
      images,
      parent: parent || null, 
      isActive: true,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getRootCategories = async (req, res) => {
  try {
    const categories = await Category.find({
      parent: null,
      isActive: true,
    })
      .sort({ name: 1 });

    res.json({ success: true, categories });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
export const getCategoriesWithChildren = async (req, res) => {
  try {
    const rootCategories = await Category.find({ parent: null, isActive: true })
      .select("_id name")
      .sort({ name: 1 });

    const rootIds = rootCategories.map((cat) => cat._id);

    const children = await Category.find({ parent: { $in: rootIds }, isActive: true })
      .select("_id name parent")
      .sort({ name: 1 });

    const categoriesWithChildren = rootCategories.map((root) => ({
      _id: root._id,
      name: root.name,
      children: children
        .filter((child) => child.parent.toString() === root._id.toString())
        .map((child) => ({
          _id: child._id,
          name: child.name,
        })),
    }));

    res.json({ success: true, categories: categoriesWithChildren });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};