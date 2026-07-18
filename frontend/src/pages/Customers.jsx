import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";
import "../styles/dashboard.css";

function Customers() {
  const [customers, setCustomers] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setEditingId(null);
  };

  const handleSaveCustomer = () => {
    if (!name || !phone) {
      alert("Customer Name and Phone Number are required.");
      return;
    }

    if (editingId !== null) {
      setCustomers(
        customers.map((customer) =>
          customer.id === editingId
            ? {
                ...customer,
                name,
                phone,
                email,
                address,
              }
            : customer
        )
      );
    } else {
      const newCustomer = {
        id: Date.now(),
        name,
        phone,
        email,
        address,
      };

      setCustomers([...customers, newCustomer]);
    }

    resetForm();
    setShowForm(false);
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  const handleEditCustomer = (customer) => {
    setEditingId(customer.id);
    setName(customer.name);
    setPhone(customer.phone);
    setEmail(customer.email);
    setAddress(customer.address);
    setShowForm(true);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <div className="dashboard-container">
          <h1 className="dashboard-title">Customers</h1>

          <p className="dashboard-subtitle">
            Manage all your business customers.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              placeholder="Search Customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px",
                width: "300px",
              }}
            />

            <button
              className="action-button"
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
            >
              + Add Customer
            </button>
          </div>

          {showForm && (
            <CustomerForm
              name={name}
              setName={setName}
              phone={phone}
              setPhone={setPhone}
              email={email}
              setEmail={setEmail}
              address={address}
              setAddress={setAddress}
              onSave={handleSaveCustomer}
            />
          )}

          <CustomerTable
            customers={filteredCustomers}
            onDelete={handleDeleteCustomer}
            onEdit={handleEditCustomer}
          />
        </div>
      </div>
    </div>
  );
}

export default Customers;