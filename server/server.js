const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve React build folder
app.use(express.static(path.join(__dirname, "../client/dist")));

// Catch-all route to serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node server!" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

