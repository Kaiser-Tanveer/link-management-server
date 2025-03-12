require("dotenv").config();
const { MongoClient } = require("mongodb");

console.log("DB USER:", process.env.DB_USER);
console.log("DB PASS:", process.env.DB_PASS);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tl2ww1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);
if (!process.env.USER || !process.env.PASS) {
  console.error("❌ MONGO_URI is missing USER or PASS in environment variables!");
  process.exit(1);
}

const client = new MongoClient(uri);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = { connectDB, client };
