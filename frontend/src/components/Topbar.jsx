import "../styles/topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div>
        <h2>Dashboard</h2>
        <p>Welcome back to BusinessAI 👋</p>
      </div>

      <div className="profile">
        <span>Admin</span>
      </div>
    </div>
  );
}

export default Topbar;