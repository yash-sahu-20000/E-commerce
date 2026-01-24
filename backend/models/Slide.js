import mongoose from "mongoose";

const slideSchema = new mongoose.Schema(
  {
    title: String,
    images: [{
      type: String, 
      default: []
    }],
    price: Number,
    link: String,
    order: Number,
    status: { type: String, enum: ["active", "inactive"] },
    type: { type: String, enum: ["hero", "home"] },
  },
  { timestamps: true }
);

export default mongoose.model("Slide", slideSchema);
