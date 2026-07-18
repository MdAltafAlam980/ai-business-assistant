function CustomerTable({ customers, onDelete, onEdit }) {
  return (
    <div className="table-container">
      <h3>Customer List</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No customers found.
              </td>
            </tr>
          ) : (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.email || "-"}</td>
                <td>{customer.address || "-"}</td>
                <td>
                  <button onClick={() => onEdit(customer)}>Edit</button>

                  <button
                    onClick={() => onDelete(customer.id)}
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

export default CustomerTable;