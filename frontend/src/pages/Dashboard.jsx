import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCard from "../components/DashboardCard";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div>
      <Sidebar />

      <div className="dashboard-container">
        <Topbar />

        <h1 className="dashboard-title">Dashboard</h1>

        <p className="dashboard-subtitle">
          Welcome to your AI Business Assistant.
        </p>

        {/* Dashboard Cards */}
        <div className="cards-container">
          <DashboardCard
            title="Total Sales"
            value="₹25,000"
            color="#22c55e"
          />

          <DashboardCard
            title="Expenses"
            value="₹8,500"
            color="#ef4444"
          />

          <DashboardCard
            title="Customers"
            value="128"
            color="#3b82f6"
          />

          <DashboardCard
            title="AI Suggestions"
            value="12"
            color="#a855f7"
          />
        </div>

        {/* Quick Actions */}
        <h2 className="section-title">Quick Actions</h2>

        <div className="quick-actions">
          <button className="action-button blue">Add Sale</button>

          <button className="action-button green">Add Expense</button>

          <button className="action-button purple">Ask AI</button>
        </div>

        {/* Recent Transactions */}
        <h2 className="section-title">Recent Transactions</h2>

        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>15 Jul</td>
              <td>Sale</td>
              <td>₹5,000</td>
            </tr>

            <tr>
              <td>14 Jul</td>
              <td>Expense</td>
              <td>₹1,200</td>
            </tr>

            <tr>
              <td>13 Jul</td>
              <td>Sale</td>
              <td>₹3,400</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;