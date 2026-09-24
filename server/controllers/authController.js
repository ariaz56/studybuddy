const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const publicUser = (user) => ({ id: user._id, name: user.name, email: user.email, role: user.role });

async function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "Name, email, and password are required" });
  if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters" });
  const normalizedEmail = email.trim().toLowerCase();
  if (await User.exists({ email: normalizedEmail })) return res.status(409).json({ message: "Email is already registered" });
  const user = await User.create({ name, email: normalizedEmail, password });
  res.status(201).json({ user: publicUser(user), token: generateToken(user._id) });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email?.trim().toLowerCase() }).select("+password");
  if (!user || !(await user.comparePassword(password || ""))) return res.status(401).json({ message: "Invalid email or password" });
  res.json({ user: publicUser(user), token: generateToken(user._id) });
}

function profile(req, res) { res.json(publicUser(req.user)); }
module.exports = { register, login, profile };
