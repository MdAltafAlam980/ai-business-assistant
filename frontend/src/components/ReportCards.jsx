function ReportCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div className="stat-card">
        <h3>Total Sales</h3>
        <h2>₹0</h2>
      </div>

      <div className="stat-card">
        <h3>Total Expenses</h3>
        <h2>₹0</h2>
      </div>

      <div className="stat-card">
        <h3>Total Customers</h3>
        <h2>0</h2>
      </div>

      <div className="stat-card">
        <h3>Total Products</h3>
        <h2>0</h2>
      </div>
    </div>
  );
}

export default ReportCards;