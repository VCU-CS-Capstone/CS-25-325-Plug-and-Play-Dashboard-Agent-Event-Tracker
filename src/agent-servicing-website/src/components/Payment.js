import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [activeTab, setActiveTab] = useState("Make a Payment");

  const renderContent = () => {
    switch (activeTab) {
      case "Make a Payment":
        return (
          <div className="make-payment">
            <h2>Payment Details</h2>

            {/* Payment Amount Options */}
            <div className="payment-options">
              <div className="option">
                <input type="radio" id="current-balance" name="payment" />
                <label htmlFor="current-balance">
                  <span>Current Balance as of 12/31/2024</span>
                  <span>$2,990.37</span>
                </label>
              </div>
              <div className="option">
                <input type="radio" id="statement-balance" name="payment" />
                <label htmlFor="statement-balance">
                  <span>Statement Balance as of 12/10/2024</span>
                  <span>$3,004.93</span>
                </label>
              </div>
              <div className="option">
                <input type="radio" id="minimum-payment" name="payment" />
                <label htmlFor="minimum-payment">
                  <span>Minimum Payment Due on 01/05/2025</span>
                  <span>$83.00</span>
                </label>
              </div>
              <div className="option">
                <input type="radio" id="other-amount" name="payment" />
                <label htmlFor="other-amount">
                  <span>Other Amount</span>
                  <input
                    type="text"
                    className="other-amount-input"
                    placeholder="$"
                  />
                </label>
              </div>
            </div>

            {/* Payment Source */}
            <div className="payment-source">
              <h3>Payment Source</h3>
              <p>BOA</p>
              <button className="button">Update Bank Accounts</button>
            </div>

            {/* Scheduled Payment Date */}
            <div className="payment-date">
              <h3>Scheduled Payment Date</h3>
              <input type="date" defaultValue="2024-12-31" />
            </div>

            {/* Buttons */}
            <div className="action-buttons">
              <button className="button">Continue</button>
              <button className="cancel-btn">Cancel</button>
            </div>
          </div>
        );

      case "Payment History":
        return (
          <div className="payment-history">
            <h2>Payment History</h2>
            <table className="payment-history-table">
              <thead>
                <tr>
                  <th>Payment Posting Date</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Paid From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>December 4, 2024</td>
                  <td>$3,350.00</td>
                  <td>Online</td>
                  <td>Bank of America, NA ending 7241</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "Pending Payments":
        return (
          <div className="pending-payments">
            <h2>Pending Payments</h2>
            <p>
              You currently have no pending payments. If you would like to make
              a payment, click the button below.
            </p>
            <div className="action-buttons">
              <button
                className="button make-payment-btn"
                onClick={() => setActiveTab("Make a Payment")}
              >
                Make a Payment
              </button>
              <a href="/" className="account-home-link">Go to Account Home</a>
            </div>
          </div>
        );

      case "Automatic Payments":
        return (
          <div className="automatic-payments">
            <h2>Set Up Automatic Payments</h2>
            <p>
              Configure auto-pay for your account to ensure timely payments are
              never missed. You can update or cancel at any time.
            </p>
            <button className="button">Set Up Auto Pay</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="payment-container">
      <div className="tabs">
        <button
          className={activeTab === "Make a Payment" ? "active" : ""}
          onClick={() => setActiveTab("Make a Payment")}
        >
          Make a Payment
        </button>
        <button
          className={activeTab === "Payment History" ? "active" : ""}
          onClick={() => setActiveTab("Payment History")}
        >
          Payment History
        </button>
        <button
          className={activeTab === "Pending Payments" ? "active" : ""}
          onClick={() => setActiveTab("Pending Payments")}
        >
          Pending Payments
        </button>
        <button
          className={activeTab === "Automatic Payments" ? "active" : ""}
          onClick={() => setActiveTab("Automatic Payments")}
        >
          Automatic Payments
        </button>
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default Payment;
