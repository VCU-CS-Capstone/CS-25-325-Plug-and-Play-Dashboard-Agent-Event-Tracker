import React, { useState } from "react";
import "./AccountActivity.css";
import { useNavigate } from "react-router-dom";

const AccountActivity = () => {
  const navigate = useNavigate();

  // Sample account activity data
  const [transactions] = useState([
    {
      id: 1,
      date: "2025-01-10",
      description: "Amazon Purchase",
      amount: -89.99,
      type: "Debit",
    },
    {
      id: 2,
      date: "2025-01-09",
      description: "Payment Received",
      amount: 200.0,
      type: "Credit",
    },
    {
      id: 3,
      date: "2025-01-08",
      description: "Netflix Subscription",
      amount: -15.99,
      type: "Debit",
    },
    {
      id: 4,
      date: "2025-01-07",
      description: "Grocery Store",
      amount: -123.45,
      type: "Debit",
    },
    {
      id: 5,
      date: "2025-01-06",
      description: "Refund - Clothing Store",
      amount: 45.67,
      type: "Credit",
    },
    {
      id: 6,
      date: "2025-01-05",
      description: "Dining - Italian Restaurant",
      amount: -67.89,
      type: "Debit",
    },
    {
      id: 7,
      date: "2025-01-04",
      description: "Payment Received",
      amount: 150.0,
      type: "Credit",
    },
    {
      id: 8,
      date: "2025-01-03",
      description: "Gas Station",
      amount: -40.25,
      type: "Debit",
    },
    {
      id: 9,
      date: "2025-01-02",
      description: "Online Shopping - Electronics",
      amount: -299.99,
      type: "Debit",
    },
    {
      id: 10,
      date: "2025-01-01",
      description: "Refund - Electronics Store",
      amount: 75.0,
      type: "Credit",
    },
  ]);

  const handleReportFraud = (transactionId) => {
    // Navigate to the Report Fraud page with the transaction ID
    navigate(`/report-fraud?transactionId=${transactionId}`);
  };

  return (
    <div className="account-activity-container">
      <h2>Account Activity</h2>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td
                className={transaction.amount < 0 ? "debit" : "credit"}
              >
                {transaction.amount < 0
                  ? `-$${Math.abs(transaction.amount).toFixed(2)}`
                  : `$${transaction.amount.toFixed(2)}`}
              </td>
              <td>{transaction.type}</td>
              <td>
                <div className="actions">
                  <button
                    className="action-button"
                    onClick={() => handleReportFraud(transaction.id)}
                  >
                    •••
                  </button>
                  <div className="dropdown-menu">
                    <button
                      onClick={() => handleReportFraud(transaction.id)}
                    >
                      Report Fraud
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountActivity;
