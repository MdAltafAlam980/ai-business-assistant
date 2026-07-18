function ChatMessage({ sender, text }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: sender === "user" ? "flex-end" : "flex-start",
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          background: sender === "user" ? "#2563eb" : "#e5e7eb",
          color: sender === "user" ? "#fff" : "#000",
          padding: "12px 16px",
          borderRadius: "12px",
          maxWidth: "70%",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default ChatMessage;