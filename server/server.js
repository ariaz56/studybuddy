require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(helmet());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/auth", rateLimit({ windowMs: 15 * 60 * 1000, max: 50 }), authRoutes);
app.get("/api/health", (req, res) => res.json({ status: "ok", service: "StudyBuddy API" }));
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.statusCode || 500).json({ message: error.message || "Server error" });
});

const port = process.env.PORT || 5000;
if (require.main === module) {
  connectDB().then(() => app.listen(port, () => console.log(`StudyBuddy API running on port ${port}`))).catch((error) => {
    console.error("Startup failed:", error.message);
    process.exit(1);
  });
}

module.exports = app;
