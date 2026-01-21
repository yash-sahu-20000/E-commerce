import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(
      req.file.path,
      { folder: "ecommerce" }
    );

    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    res.status(500).json({ message: "Image upload failed" });
  }
};
