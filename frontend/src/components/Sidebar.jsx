import {
  FaHome,
  FaChartLine,
  FaUsers,
  FaBoxes,
  FaMoneyBillWave,
  FaChartBar,
  FaRobot,
  FaCog,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>BusinessAI</h2>
        <p>AI Business Assistant</p>
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/dashboard" className="menu-link">
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/sales" className="menu-link">
            <FaChartLine />
            <span>Sales</span>
          </NavLink>
        </li>

        <li>
  <NavLink to="/customers" className="menu-link">
    <FaUsers />
    <span>Customers</span>
  </NavLink>
</li>

        <li>
  <NavLink to="/inventory" className="menu-link">
    <FaBoxes />
    <span>Inventory</span>
  </NavLink>
</li>

<li>
  <NavLink to="/expenses" className="menu-link">
    <FaMoneyBillWave />
    <span>Expenses</span>
  </NavLink>
</li>

<li>
  <NavLink to="/reports" className="menu-link">
    <FaChartBar />
    <span>Reports</span>
  </NavLink>
</li>

<li>
  <NavLink to="/ai-assistant" className="menu-link">
    <FaRobot />
    <span>AI Assistant</span>
  </NavLink>
</li>

<li>
  <NavLink to="/settings" className="menu-link">
    <FaCog />
    <span>Settings</span>
  </NavLink>
</li>
      </ul>
    </div>
  );
}

export default Sidebar;