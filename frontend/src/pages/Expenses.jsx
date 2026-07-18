import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import "../styles/dashboard.css";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const resetForm = () => {
    setCategory("");
    setAmount("");
    setDate("");
    setNotes("");
    setEditingId(null);
  };

  const handleSaveExpense = () => {
    if (!category || !amount || !date) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingId !== null) {
      setExpenses(
        expenses.map((expense) =>
          expense.id === editingId
            ? {
                ...expense,
                category,
                amount,
                date,
                notes,
              }
            : expense
        )
      );
    } else {
      const newExpense = {
        id: Date.now(),
        category,
        amount,
        date,
        notes,
      };

      setExpenses([...expenses, newExpense]);
    }

    resetForm();
    setShowForm(false);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleEditExpense = (expense) => {
    setEditingId(expense.id);
    setCategory(expense.category);
    setAmount(expense.amount);
    setDate(expense.date);
    setNotes(expense.notes);
    setShowForm(true);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Topbar />

        <div className="dashboard-container">
          <h1 className="dashboard-title">Expenses</h1>

          <p className="dashboard-subtitle">
            Track and manage business expenses.
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
              placeholder="Search Category..."
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
              + Add Expense
            </button>
          </div>

          {showForm && (
            <ExpenseForm
              category={category}
              setCategory={setCategory}
              amount={amount}
              setAmount={setAmount}
              date={date}
              setDate={setDate}
              notes={notes}
              setNotes={setNotes}
              onSave={handleSaveExpense}
            />
          )}

          <ExpenseTable
            expenses={filteredExpenses}
            onEdit={handleEditExpense}
            onDelete={handleDeleteExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default Expenses;