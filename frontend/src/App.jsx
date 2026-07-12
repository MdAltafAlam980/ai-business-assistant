import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Failed to connect to backend"));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Business Assistant</h1>

      <h2>Backend Response</h2>

      <p>{message}</p>
    </div>
  );
}

export default App;