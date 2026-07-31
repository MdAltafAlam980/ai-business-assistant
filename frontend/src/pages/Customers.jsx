import { useState, useEffect } from "react";
import { FaUsers, FaSearch, FaPhoneAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import CustomerForm from "../components/CustomerForm";
import CustomerTable from "../components/CustomerTable";
import "../styles/dashboard.css";

function Customers() {
  const API_URL = "http://localhost:5000/api/customers";

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

  const fetchCustomers = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch customers");
      }

      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
      toast.error("Unable to load customers.");
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSaveCustomer = async () => {
    if (!name.trim() || !phone.trim()) {
      toast.warning("Customer Name and Phone Number are required.");
      return;
    }

    try {
      let response;

      if (editingId !== null) {
        response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            address,
          }),
        });

       if (!response.ok) {
  const errorData = await response.json();
  throw new Error(errorData.error);
}
      } else {
        response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            address,
          }),
        });

        if (!response.ok) {
  const errorData = await response.json();
  throw new Error(errorData.error);
}
      }

      await fetchCustomers();

      if (editingId !== null) {
        toast.success("Customer updated successfully!");
      } else {
        toast.success("Customer added successfully!");
      }

      resetForm();
      setShowForm(false);

    }catch (error) {
  console.error("Error saving customer:", error);
  toast.error(error.message);
}
  };

  const handleDeleteCustomer = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete customer");
      }

      await fetchCustomers();

      toast.success("Customer deleted successfully!");

    } catch (error) {
      console.error("Delete Error:", error);
      toast.error("Unable to delete customer.");
    }
  };

    const handleEditCustomer = (customer) => {
    setEditingId(customer.id);
    setName(customer.name);
    setPhone(customer.phone);
    setEmail(customer.email);
    setAddress(customer.address);
    setShowForm(true);
  };

// ===== SEARCH CUSTOMERS =====
const filteredCustomers = customers.filter((customer) => {
  const searchText = search.toLowerCase();

  return (
    customer.name.toLowerCase().includes(searchText) ||
    customer.phone.includes(search) ||
    (customer.email || "").toLowerCase().includes(searchText)
  );
});

// ===== CUSTOMER STATISTICS =====
const totalCustomers = customers.length;

const customersWithPhone = customers.filter(
  (customer) => customer.phone && customer.phone.trim() !== ""
).length;

const searchResults =
  search.trim() === ""
    ? 0
    : filteredCustomers.length;

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

<div className="stats-container">

  <div className="stat-card blue">
    <h2>{totalCustomers}</h2>
    <p>
  <FaUsers style={{ marginRight: "8px" }} />
  Total Customers
</p>
  </div>

  <div className="stat-card blue">
    <h2>{searchResults}</h2>
    <p>
  <FaSearch style={{ marginRight: "8px" }} />
  Search Results
</p>
  </div>

  <div className="stat-card blue">
    <h2>{customersWithPhone}</h2>
    <p>
  <FaPhoneAlt style={{ marginRight: "8px" }} />
  With Phone No
</p>
  </div>

</div>

          <div className="customer-toolbar">
   <div className="search-box">
  <FaSearch className="search-icon" />

  <input
    type="text"
    className="search-input"
    placeholder="Search by name, phone or email..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

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
            onEdit={handleEditCustomer}
            onDelete={handleDeleteCustomer}
          />
        </div>
      </div>
    </div>
  );
}

export default Customers;