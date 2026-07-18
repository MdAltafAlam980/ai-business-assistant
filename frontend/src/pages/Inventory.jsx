import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import InventoryForm from "../components/InventoryForm";
import InventoryTable from "../components/InventoryTable";
import "../styles/dashboard.css";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const resetForm = () => {
    setProductName("");
    setCategory("");
    setPurchasePrice("");
    setSellingPrice("");
    setQuantity("");
    setEditingId(null);
  };

  const handleSaveProduct = () => {
    if (
      !productName ||
      !category ||
      !purchasePrice ||
      !sellingPrice ||
      !quantity
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editingId !== null) {
      setProducts(
        products.map((product) =>
          product.id === editingId
            ? {
                ...product,
                productName,
                category,
                purchasePrice,
                sellingPrice,
                quantity,
              }
            : product
        )
      );
    } else {
      const newProduct = {
        id: Date.now(),
        productName,
        category,
        purchasePrice,
        sellingPrice,
        quantity,
      };

      setProducts([...products, newProduct]);
    }

    resetForm();
    setShowForm(false);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (product) => {
    setEditingId(product.id);
    setProductName(product.productName);
    setCategory(product.category);
    setPurchasePrice(product.purchasePrice);
    setSellingPrice(product.sellingPrice);
    setQuantity(product.quantity);
    setShowForm(true);
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <div className="dashboard-container">
          <h1 className="dashboard-title">Inventory</h1>

          <p className="dashboard-subtitle">
            Manage your products and stock.
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
              placeholder="Search Product..."
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
              + Add Product
            </button>
          </div>

          {showForm && (
            <InventoryForm
              productName={productName}
              setProductName={setProductName}
              category={category}
              setCategory={setCategory}
              purchasePrice={purchasePrice}
              setPurchasePrice={setPurchasePrice}
              sellingPrice={sellingPrice}
              setSellingPrice={setSellingPrice}
              quantity={quantity}
              setQuantity={setQuantity}
              onSave={handleSaveProduct}
            />
          )}

          <InventoryTable
            products={filteredProducts}
            onDelete={handleDeleteProduct}
            onEdit={handleEditProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default Inventory;