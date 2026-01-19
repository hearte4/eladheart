const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve React build folder
app.use(express.static(path.join(__dirname, "../client/dist")));

// Debug all incoming requests
app.use((req, res, next) => {
  console.log("Request URL:", req.url);
  next();
});

// API routes first   
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node server!" });
});

// React Router fallback (must come last)
app.get('/weight', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/weight`);
});
