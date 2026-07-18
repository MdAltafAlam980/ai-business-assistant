function CustomerForm({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  address,
  setAddress,
  onSave,
}) {
  return (
    <div className="form-container">
      <h3>Add Customer</h3>

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email (Optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Address (Optional)"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={onSave}>Save Customer</button>
    </div>
  );
}

export default CustomerForm;