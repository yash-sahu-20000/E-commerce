import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    brand: String,

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    price: { type: Number, required: true },
    oldPrice: Number,
    discount: Number,
    rating: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    description: String,
    images: [String],

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
