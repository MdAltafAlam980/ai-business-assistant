import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ReportCards from "../components/ReportCards";
import "../styles/dashboard.css";

function Reports() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <div className="dashboard-container">
          <h1 className="dashboard-title">Reports</h1>

          <p className="dashboard-subtitle">
            View business performance and analytics.
          </p>

          <ReportCards />

          <div
            style={{
              marginTop: "30px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Business Summary</h3>

            <p>Total Sales: ₹0</p>
            <p>Total Expenses: ₹0</p>
            <p>Net Profit: ₹0</p>
            <p>Total Customers: 0</p>
            <p>Total Products: 0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;