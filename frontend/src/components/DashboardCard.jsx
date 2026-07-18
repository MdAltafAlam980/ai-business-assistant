function DashboardCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderLeft: `6px solid ${color}`,
        minWidth: "220px",
        flex: 1,
      }}
    >
      <h3 style={{ margin: 0, color: "#555" }}>{title}</h3>

      <h2
        style={{
          marginTop: "10px",
          color: "#111",
        }}
      >
        {value}
      </h2>
    </div>
  );
}

export default DashboardCard;