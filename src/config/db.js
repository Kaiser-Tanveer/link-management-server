require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// 🔹 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 🔹 Middlewares
app.use(cors());
app.use(express.json());

// 🔹 Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({ message: "API is running 🚀" });
});

module.exports = app;
