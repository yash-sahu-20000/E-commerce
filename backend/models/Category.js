import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      trim: true,
      maxlength: [50, "Category name cannot exceed 50 characters"],
    },

    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },

    images: [{ type: String, default: [] }],

    description: {
      type: String,
      maxlength: [200, "Description cannot exceed 200 characters"],
    },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);


export default mongoose.model("Category", categorySchema);