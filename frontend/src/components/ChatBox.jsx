import { useState } from "react";

function ChatBox() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

const sendMessage = async () => {
  setLoading(true);

  const response = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
    }),
  });

  const data = await response.json();

  setReply(data.reply);
  setMessage("");

  setLoading(false);
};

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>💬 Chat with AI Assistant</h2>

   <input
  type="text"
  placeholder="Type your message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }}
  style={{
    padding: "10px",
    width: "300px",
    marginRight: "10px",
  }}
/>

      <button
  onClick={sendMessage}
  style={{ padding: "10px 20px" }}
>
  Send
</button>
<p>{loading ? "🤖 Thinking..." : reply}</p>
    </div>
  );
}

export default ChatBox;