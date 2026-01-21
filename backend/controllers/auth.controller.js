import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, user });
};

export const register = async (req, res) => {
  console.log(req);
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 12);
  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ message: 'User exists' });

  const newUser = new User({ name, email, password: hashed, role: 'admin' });
  await newUser.save();

  const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user: { id: newUser._id, name, email, role: newUser.role } });
};
