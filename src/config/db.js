const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.tl2ww1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

console.log(uri);
if (!uri) {
  console.error("❌ MONGO_URI is not set in environment variables!");
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
