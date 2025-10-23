import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import app from "./app.js"; // your existing app.js routes/middleware

// -------------------- CONFIG --------------------

// Use dynamic port for Render or fallback to 4000 for local dev
const PORT = process.env.PORT || 4000;

// CORS - allow your deployed frontend URL
// Replace with your actual frontend Render URL
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
  origin: FRONTEND_URL,
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

// -------------------- MONGODB CONNECTION --------------------

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// -------------------- START SERVER --------------------

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
