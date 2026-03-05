import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/api", productRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "🚀 API Running Successfully",
    project: "Bus Booking System",
    developer: "Aditya",
    status: "Online",
    uptime: `${process.uptime().toFixed(2)} seconds`,
    timestamp: new Date(),
  });
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
