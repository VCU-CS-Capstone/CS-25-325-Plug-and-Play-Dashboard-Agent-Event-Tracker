import React, { useState } from "react";
import "./NewCustomer.css";

const NewCustomer = () => {
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    accountType: "",
    initialDeposit: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !customerInfo.firstName ||
      !customerInfo.lastName ||
      !customerInfo.email ||
      !customerInfo.phone ||
      !customerInfo.accountType ||
      !customerInfo.initialDeposit
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    alert(`New customer created successfully:\n
    Name: ${customerInfo.firstName} ${customerInfo.lastName}
    Email: ${customerInfo.email}
    Phone: ${customerInfo.phone}
    Address: ${customerInfo.address || "N/A"}
    Account Type: ${customerInfo.accountType}
    Initial Deposit: $${customerInfo.initialDeposit}`);
    
    // Clear the form
    setCustomerInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      accountType: "",
      initialDeposit: "",
    });
  };

  return (
    <div className="new-customer-container">
      <h2>Create New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name<span className="required">*</span>:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={customerInfo.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name<span className="required">*</span>:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={customerInfo.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email<span className="required">*</span>:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={customerInfo.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number<span className="required">*</span>:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={customerInfo.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address<span className="required">*</span>:</label>
          <textarea
            id="address"
            name="address"
            value={customerInfo.address}
            onChange={handleChange}
            placeholder="Enter address"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="accountType">Account Type<span className="required">*</span>:</label>
          <select
            id="accountType"
            name="accountType"
            value={customerInfo.accountType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              -- Select Account Type --
            </option>
            <option value="Checking">Checking</option>
            <option value="Savings">Savings</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="initialDeposit">Initial Deposit<span className="required">*</span>:</label>
          <input
            type="number"
            id="initialDeposit"
            name="initialDeposit"
            value={customerInfo.initialDeposit}
            onChange={handleChange}
            placeholder="Enter initial deposit amount"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Create Customer
        </button>
      </form>
    </div>
  );
};

export default NewCustomer;
