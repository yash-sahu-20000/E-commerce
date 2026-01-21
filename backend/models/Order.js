import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      name: String,
      email: String,
    },
    items: [
      {
        title: String,
        qty: Number,
        price: Number,
      },
    ],
    totalAmount: Number,
    status: {
      type: String,
      enum: ["pending", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
