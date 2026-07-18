import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SalesForm from "../components/SalesForm";
import SalesTable from "../components/SalesTable";
import "../styles/dashboard.css";

function Sales() {
  const [showForm, setShowForm] = useState(false);

  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [sales, setSales] = useState([
    {
      date: "18 Jul",
      customer: "Rahul",
      product: "Keyboard",
      quantity: 1,
      price: 1500,
    },
    {
      date: "17 Jul",
      customer: "Aisha",
      product: "Mouse",
      quantity: 2,
      price: 700,
    },
  ]);

  function handleSaveSale() {
    if (!customer || !product || !quantity || !price) {
      alert("Please fill all fields.");
      return;
    }

    const today = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });

    const newSale = {
      date: today,
      customer,
      product,
      quantity,
      price,
    };

    setSales([newSale, ...sales]);

    setCustomer("");
    setProduct("");
    setQuantity("");
    setPrice("");

    setShowForm(false);
  }

  return (
    <div>
      <Sidebar />

      <div className="dashboard-container">
        <Topbar />

        <h1 className="dashboard-title">Sales Management</h1>

        <p className="dashboard-subtitle">
          Manage your business sales here.
        </p>

        <button
          className="action-button blue"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "+ Add New Sale"}
        </button>

        {showForm && (
          <SalesForm
            customer={customer}
            setCustomer={setCustomer}
            product={product}
            setProduct={setProduct}
            quantity={quantity}
            setQuantity={setQuantity}
            price={price}
            setPrice={setPrice}
            onSave={handleSaveSale}
          />
        )}

        <SalesTable sales={sales} />
      </div>
    </div>
  );
}

export default Sales;
