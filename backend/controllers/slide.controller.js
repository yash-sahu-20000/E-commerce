import Slide from "../models/Slide.js";
import cloudinary from "../config/cloudinary.js";

export const getSlide = async (req, res) => {
  try {

    const slide = await Slide.findById(req.params.id);
    if (!slide) {
      return res.status(404).json({ message: "Slide not found" });
    }

    res.status(200).json({ slide });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch slides",
    });
  }
};

export const getSlides = async (req, res) => {
  try {
    const { type } = req.query;

    const filter = {};
    if (type) filter.type = type;

    const slides = await Slide.find(filter).sort({ order: 1 });

    res.status(200).json({ slides });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch slides",
    });
  }
};

export const createSlide = async (req, res) => {
  try {
    const { title, order, status, type, price, link } = req.body;

    if (!title || !order || !type) {
      return res.status(400).json({
        success: false,
        message: "Title, order and type are required",
      });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Slide image is required",
      });
    }

    let images = [];

    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(
        `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
        { folder: "slides" }
      );
      images.push(result.secure_url);
    }

    const slide = await Slide.create({
      title,
      order,
      status: status || "active",
      price,
      link,
      type,
      images,
    });

    res.status(201).json({
      success: true,
      slide,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export const updateSlide = async (req, res) => {
  try {
    const slide = await Slide.findById(req.params.id);
    if (!slide) {
      return res.status(404).json({ message: "Slide not found" });
    }
    const { title, order, status, type, price, link } = req.body;

    if (title) slide.title = title;
    if (order) slide.order = order;
    if (status) slide.status = status;
    if (type) slide.type = type;
    if (link) slide.link = link;
    if (price) slide.price = price;

    if (req.files && req.files.length > 0) {
      const images = [];
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(
          `data:${file.mimetype};base64,${file.buffer.toString("base64")}`,
          { folder: "slides" }
        );
        images.push(result.secure_url);
      }
      slide.images = images; 
    }

    await slide.save();

    res.json({ success: true, slide });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update slide" });
  }
};


export const deleteSlide = async (req, res) => {
  try {
    const slide = await Slide.findByIdAndDelete(req.params.id);

    if (!slide) {
      return res.status(404).json({
        message: "Slide not found",
      });
    }

    res.json({
      message: "Slide deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to delete slide",
    });
  }
};
