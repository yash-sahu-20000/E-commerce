import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import slideRoutes from "./routes/slide.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import userRoutes from "./routes/user.routes.js";
import seedRoutes from "./routes/seed.routes.js"
import cartRoutes from "./routes/cart.routes.js"

connectDB();

const app = express();

app.use(cors({
  origin: [env.frontEndUrl, env.adminFrontEndUrl],
  credentials: true 
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/slides", slideRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/seed", seedRoutes);


app.listen(env.port, () =>
  console.log(`Server running on port ${env.port}`)
);
