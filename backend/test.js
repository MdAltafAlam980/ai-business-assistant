require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: "Say hello in one sentence.",
    });

    console.log("SUCCESS:");
    console.log(response.text);
  } catch (err) {
    console.log("STATUS:", err.status);
    console.log("MESSAGE:", err.message);
  }
}

main();