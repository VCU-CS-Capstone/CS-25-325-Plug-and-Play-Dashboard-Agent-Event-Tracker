import React, { useState } from "react";
import "./ReportFraud.css";

const ReportFraud = () => {
  const [disableAccount, setDisableAccount] = useState(false);
  const [fraudDetails, setFraudDetails] = useState("");

  const handleSubmit = () => {
    if (fraudDetails.trim() === "") {
      alert("Please describe the fraud details before submitting.");
      return;
    }

    const message = disableAccount
      ? "Fraud report submitted, and the account has been disabled."
      : "Fraud report submitted.";
    alert(message);

    // Clear the form
    setDisableAccount(false);
    setFraudDetails("");
  };

  return (
    <div className="report-fraud-container">
      <h2>Report Fraud</h2>
      
      {/* Text Box to Explain Fraud */}
      <div className="text-box-container">
        <label htmlFor="fraud-details">Describe the Fraud:</label>
        <textarea
          id="fraud-details"
          value={fraudDetails}
          onChange={(e) => setFraudDetails(e.target.value)}
          placeholder="Provide details about the suspected fraud..."
        />
      </div>

      {/* Disable Account Checkbox */}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="disable-account"
          checked={disableAccount}
          onChange={(e) => setDisableAccount(e.target.checked)}
        />
        <label htmlFor="disable-account">Disable Account</label>
      </div>

      {/* Submit Button */}
      <button className="submit-button" onClick={handleSubmit}>
        Submit Fraud Report
      </button>
    </div>
  );
};

export default ReportFraud;
