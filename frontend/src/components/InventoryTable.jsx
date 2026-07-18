function InventoryTable({ products, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <h3>Inventory</h3>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Purchase</th>
            <th>Selling</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No products found.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td>₹{product.purchasePrice}</td>
                <td>₹{product.sellingPrice}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => onEdit(product)}>Edit</button>

                  <button
                    onClick={() => onDelete(product.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;