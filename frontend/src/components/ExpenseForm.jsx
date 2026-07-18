function ExpenseForm({
  category,
  setCategory,
  amount,
  setAmount,
  date,
  setDate,
  notes,
  setNotes,
  onSave,
}) {
  return (
    <div className="form-container">
      <h3>Add Expense</h3>

      <input
        type="text"
        placeholder="Expense Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <textarea
        placeholder="Notes (Optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows="3"
      />

      <button className="action-button" onClick={onSave}>
        Save Expense
      </button>
    </div>
  );
}

export default ExpenseForm;