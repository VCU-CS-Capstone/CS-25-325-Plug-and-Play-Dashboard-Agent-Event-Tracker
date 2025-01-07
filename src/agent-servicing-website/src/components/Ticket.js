import React, { useState } from "react";
import "./Ticket.css";

const Ticket = () => {
  const [ticketData, setTicketData] = useState({
    title: "",
    description: "",
    priority: "",
    category: "",
    email: "",
    accountId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ticket submission here
    console.log("Ticket submitted:", ticketData);
    // Reset form after submission
    setTicketData({
      title: "",
      description: "",
      priority: "medium",
      category: "technical",
      email: "",
      accountId: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleButtonSelect = (field, value) => {
    setTicketData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="ticket-container">
      <h2>Submit a Support Ticket</h2>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={ticketData.title}
            onChange={handleChange}
            placeholder="Brief description of your issue"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="accountId">Account ID</label>
          <input
            type="text"
            id="accountId"
            name="accountId"
            value={ticketData.accountId}
            onChange={handleChange}
            placeholder="Enter your account ID"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={ticketData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <div className="button-group">
            {["technical", "account", "billing", "other"].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleButtonSelect("category", category)}
                className={`option-button ${
                  ticketData.category === category ? "selected" : ""
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Priority</label>
          <div className="button-group">
            {["low", "medium", "high"].map((priority) => (
              <button
                key={priority}
                type="button"
                onClick={() => handleButtonSelect("priority", priority)}
                className={`option-button ${
                  ticketData.priority === priority ? "selected" : ""
                }`}
              >
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={ticketData.description}
            onChange={handleChange}
            placeholder="Please provide detailed information about your issue"
            required
            rows="5"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit Ticket
          </button>
          <button type="button" className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ticket;
