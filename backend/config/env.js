import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  nodeEnv: process.env.NODE_ENV || "development",
  apiBaseUrl: process.env.BASE_URL,
  frontEndUrl: process.env.FRONTEND_URL,
  adminFrontEndUrl: process.env.ADMIN_FRONT_END_URL,
  cloudinaryName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryKey: process.env.CLOUDINARY_API_KEY,
  cloudinarySecret: process.env.CLOUDINARY_API_SECRET,
  cloudinaryURL : process.env.CLOUDINARY_URL
};
