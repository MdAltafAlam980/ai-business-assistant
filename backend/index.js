const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { generateReply } = require("./services/aiService");

const app = express();

// Temporary conversation memory
let chatHistory = [];

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
    if (!message || message.trim() === "") {
  return res.status(400).json({
    reply: "Please enter a message.",
  });
}

    // Save user message
    chatHistory.push({
      role: "user",
      text: message,
    });

    // Keep only last 10 messages
    if (chatHistory.length > 10) {
      chatHistory.shift();
    }

    console.log("\n========= CHAT HISTORY =========");
    console.table(chatHistory);

    // Call AI Service
    const reply = await generateReply(message, chatHistory);

    // Save AI reply
    chatHistory.push({
      role: "assistant",
      text: reply,
    });

    res.json({
      reply,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      reply: "Internal Server Error",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});