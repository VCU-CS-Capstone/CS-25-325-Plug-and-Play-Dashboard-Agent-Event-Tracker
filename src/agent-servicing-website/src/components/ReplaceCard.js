import React, { useState } from "react";
import "./ReplaceCard.css";

const ReplaceCard = () => {
  const [reason, setReason] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [sendToAddress, setSendToAddress] = useState("onFile");
  const [customAddress, setCustomAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setCustomAddress({ ...customAddress, [name]: value });
  };

  const handleSubmit = () => {
    if (!reason) {
      alert("Please select a reason for replacing/renewing the card.");
      return;
    }

    const address =
      sendToAddress === "onFile"
        ? "Address on file"
        : `${customAddress.addressLine1}, ${customAddress.addressLine2}, ${customAddress.city}, ${customAddress.state}, ${customAddress.zip}`;

    alert(
      `Your request to replace/renew the card has been submitted.\n\nReason: ${reason}\nAdditional Details: ${
        additionalDetails || "None"
      }\nSend To: ${address}`
    );

    // Clear the form
    setReason("");
    setAdditionalDetails("");
    setSendToAddress("onFile");
    setCustomAddress({
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <div className="replace-card-container">
      <h2>Replace/Renew Card</h2>

      {/* Dropdown for Reason Selection */}
      <div className="dropdown-container">
        <label htmlFor="reason">Select Reason:</label>
        <select
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          <option value="" disabled>
            -- Select a reason --
          </option>
          <option value="Damaged Card">Damaged Card</option>
          <option value="Lost Card">Lost Card</option>
          <option value="Expired Card">Expired Card</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Text Box for Additional Details */}
      <div className="text-box-container">
        <label htmlFor="additional-details">Additional Details (Optional):</label>
        <textarea
          id="additional-details"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          placeholder="Provide any additional details about your request..."
        />
      </div>

      {/* Address Selection */}
      <div className="address-selection-container">
        <p>Where should the replacement card be sent?</p>
        <div>
          <label>
            <input
              type="radio"
              name="sendToAddress"
              value="onFile"
              checked={sendToAddress === "onFile"}
              onChange={(e) => setSendToAddress(e.target.value)}
            />
            Address on file
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sendToAddress"
              value="custom"
              checked={sendToAddress === "custom"}
              onChange={(e) => setSendToAddress(e.target.value)}
            />
            Different location
          </label>
          {sendToAddress === "custom" && (
            <div className="custom-address-container">
              <input
                type="text"
                name="addressLine1"
                value={customAddress.addressLine1}
                onChange={handleAddressChange}
                placeholder="Street address or P.O. Box"
              />
              <input
                type="text"
                name="addressLine2"
                value={customAddress.addressLine2}
                onChange={handleAddressChange}
                placeholder="Apt, suite, unit, building, floor, etc."
              />
              <div className="address-row">
                <input
                  type="text"
                  name="city"
                  value={customAddress.city}
                  onChange={handleAddressChange}
                  placeholder="City"
                />
                <input
                  type="text"
                  name="state"
                  value={customAddress.state}
                  onChange={handleAddressChange}
                  placeholder="State"
                />
                <input
                  type="text"
                  name="zip"
                  value={customAddress.zip}
                  onChange={handleAddressChange}
                  placeholder="ZIP Code"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button className="submit-button" onClick={handleSubmit}>
        Submit Request
      </button>
    </div>
  );
};

export default ReplaceCard;
