import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: String,

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isActive: { type: Boolean, default: true },
    address: String,

    cart: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
