function ExpenseTable({ expenses, onEdit, onDelete }) {
  return (
    <div className="table-container">
      <h3>Expense Records</h3>

      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No expenses found.
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.category}</td>
                <td>₹{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.notes}</td>
                <td>
                  <button onClick={() => onEdit(expense)}>Edit</button>

                  <button
                    onClick={() => onDelete(expense.id)}
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

export default ExpenseTable;