import Slide from "../models/Slide.js";

export const getSlides = async (req, res) => {
  const slides = await Slide.find().sort({ order: 1 });
  res.json(slides);
};

export const createSlide = async (req, res) => {
  const slide = await Slide.create(req.body);
  res.status(201).json(slide);
};

export const updateSlide = async (req, res) => {
  const slide = await Slide.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(slide);
};

export const deleteSlide = async (req, res) => {
  await Slide.findByIdAndDelete(req.params.id);
  res.json({ message: "Slide deleted" });
};
