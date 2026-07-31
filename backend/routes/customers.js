const express = require("express");
const router = express.Router();
const pool = require("../config/database");

// ===== GET ALL CUSTOMERS =====
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM customers ORDER BY id ASC"
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// ===== ADD CUSTOMER =====
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    // Store NULL if email is empty
    const customerEmail =
      email && email.trim() !== "" ? email.trim() : null;

    const result = await pool.query(
      `INSERT INTO customers (name, email, phone, address)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [name, customerEmail, phone, address]
    );

    res.status(201).json(result.rows[0]);

} catch (err) {
  console.error(err);

  if (err.code === "23505") {
    return res.status(400).json({
      error: "Phone number already exists.",
    });
  }

  res.status(500).json({
    error: "Server Error",
  });
}
});

// ===== UPDATE CUSTOMER =====
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;

    // Store NULL if email is empty
    const customerEmail =
      email && email.trim() !== "" ? email.trim() : null;

    const result = await pool.query(
      `UPDATE customers
       SET name = $1,
           email = $2,
           phone = $3,
           address = $4
       WHERE id = $5
       RETURNING *`,
      [name, customerEmail, phone, address, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Customer not found",
      });
    }

    res.json(result.rows[0]);

} catch (err) {
  console.error(err);

  if (err.code === "23505") {
    return res.status(400).json({
      error: "Phone number already exists.",
    });
  }

  res.status(500).json({
    error: "Server Error",
  });
}
});

// ===== DELETE CUSTOMER =====
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM customers WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Customer not found",
      });
    }

    res.json({
      message: "Customer deleted successfully",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;