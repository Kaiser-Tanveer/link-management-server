require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");


// Import Routes

// Credential of MongoDB
user: linkManagementUser;
pass: linkManagementPass;

// Middlewares
app.use(cors());
app.use(express.json());   

// 🔹 Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({ message: "API is running 🚀" });
});

module.exports = app;  