function SalesTable({ sales }) {
  return (
    <>
      <h2 className="section-title">Sales List</h2>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {sales.length === 0 ? (
            <tr>
              <td colSpan="5">No sales found.</td>
            </tr>
          ) : (
            sales.map((sale, index) => (
              <tr key={index}>
                <td>{sale.date}</td>
                <td>{sale.customer}</td>
                <td>{sale.product}</td>
                <td>{sale.quantity}</td>
                <td>₹{sale.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default SalesTable;