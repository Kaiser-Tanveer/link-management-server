require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { connectDB } = require("./config/db");

// Connect to MongoDB Database
connectDB(); // ✅ Call the function

// Middlewares
app.use(cors());
app.use(express.json());   

// 🔹 Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({ message: "API is running 🚀" });
});

// 🔹 Testing the MongoDB connection
app.get("/test-db", async (req, res) => {
    try {
        await connectDB();
        res.status(200).json({ message: "✅ Successfully connected to MongoDB" });
    } catch (error) {
        res.status(500).json({ message: "❌ MongoDB Connection Failed", error: error.message });
    }
});

module.exports = app;  
