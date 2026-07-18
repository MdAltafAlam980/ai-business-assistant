function InventoryForm({
  productName,
  setProductName,
  category,
  setCategory,
  purchasePrice,
  setPurchasePrice,
  sellingPrice,
  setSellingPrice,
  quantity,
  setQuantity,
  onSave,
}) {
  return (
    <div className="form-container">
      <h3>Add Product</h3>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        placeholder="Purchase Price"
        value={purchasePrice}
        onChange={(e) => setPurchasePrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Selling Price"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={onSave}>Save Product</button>
    </div>
  );
}

export default InventoryForm;