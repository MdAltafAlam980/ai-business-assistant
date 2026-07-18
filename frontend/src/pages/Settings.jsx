import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/dashboard.css";

function Settings() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <div className="dashboard-container">
          <h1 className="dashboard-title">Settings</h1>

          <p className="dashboard-subtitle">
            Manage your BusinessAI preferences.
          </p>

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Application Settings</h3>

            <br />

            <label>
              <input type="checkbox" defaultChecked /> Enable Notifications
            </label>

            <br />
            <br />

            <label>
              <input type="checkbox" defaultChecked /> Dark Mode (Coming Soon)
            </label>

            <br />
            <br />

            <label>
              <input type="checkbox" defaultChecked /> AI Suggestions
            </label>

            <br />
            <br />

            <button className="action-button">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;