const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 AI Business Assistant Backend is Running!");
});

// Chat API
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `You said: ${message}`,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});