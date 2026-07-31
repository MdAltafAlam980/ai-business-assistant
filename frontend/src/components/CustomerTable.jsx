function CustomerTable({ customers, onDelete, onEdit }) {
  return (
    <div className="table-container">
      <h3>Customer List</h3>

      <table>
        <thead>
          <tr>
           <th>👤 Customer</th>
           <th>📱 Phone</th>
           <th>📧 Email</th>
           <th>📍 Address</th>
           <th>⚙️ Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
             <td colSpan="5">
  <div className="empty-state">
    <h2>👥</h2>
    <h3>No customers found</h3>
    <p>Click "Add Customer" to create your first customer.</p>
  </div>
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

                  <div className="table-actions">
                    <button
                       className="edit-btn"
                       onClick={() => onEdit(customer)}
                      >
                         ✏ Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => onDelete(customer.id)}
                      >
                        🗑 Delete 
                      </button>
                   </div>

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