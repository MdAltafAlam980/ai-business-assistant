const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const app = express();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 AI Business Assistant Backend is Running!");
});

// Chat API
app.post("/api/chat", async (req, res) => {
  try {
  const { message } = req.body;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: message,
  });

  res.json({
    reply: response.text,
  });
}  catch (error) {
  console.error(error);

  res.status(500).json({
    reply: "Sorry, something went wrong. Please try again.",
  });
}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});