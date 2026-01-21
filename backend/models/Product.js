import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    brand: String,
    category: String,
    price: Number,
    oldPrice: Number,
    discount: Number,
    rating: Number,
    stock: Number,
    image: String,
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
