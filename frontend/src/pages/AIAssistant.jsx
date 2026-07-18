import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ChatMessage from "../components/ChatMessage";
import "../styles/dashboard.css";

function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm BusinessAI. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { sender: "user", text: input },
      {
        sender: "ai",
        text: "AI backend will be connected in the next phase.",
      },
    ]);

    setInput("");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <div className="dashboard-container">
          <h1 className="dashboard-title">AI Assistant</h1>

          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "20px",
              height: "500px",
              overflowY: "auto",
              marginBottom: "20px",
            }}
          >
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                sender={msg.sender}
                text={msg.text}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              placeholder="Ask BusinessAI..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: "12px",
              }}
            />

            <button className="action-button" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAssistant;