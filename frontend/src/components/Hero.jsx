import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Your AI Business Assistant</h1>

      <p>
        Get instant business insights, marketing ideas,
        sales analysis, and growth strategies powered by AI.
      </p>

      <div className="hero-input">
        <input
          type="text"
          placeholder="Ask your business question..."
        />

        <button>Ask AI</button>
      </div>
    </section>
  );
}

export default Hero;