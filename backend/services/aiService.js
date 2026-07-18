const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateReply(message, chatHistory = []) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: message,
    });

    return response.text;

  } catch (error) {

    console.error("AI Service Error:", error.status);

    switch (error.status) {
      case 401:
        return "🔑 Invalid API Key.";

      case 429:
        return "⚠️ Too many requests. Please try again later.";

      case 503:
        return "🚦 Gemini AI is currently busy. Please try again in a few minutes.";

      default:
        return "❌ AI service unavailable.";
    }
  }
}

module.exports = {
  generateReply,
};