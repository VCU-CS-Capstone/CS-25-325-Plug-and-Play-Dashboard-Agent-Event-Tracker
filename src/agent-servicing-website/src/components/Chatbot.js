import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [activeTab, setActiveTab] = useState("Chat");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle message submission here
    setMessage("");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Chat":
        return (
          <div className="chat-content">
            <div className="chat-placeholder">Chatbot Placeholder</div>
          </div>
        );

      case "History":
        return (
          <div className="history-content">
            <div className="history-placeholder">Chat History Placeholder</div>
          </div>
        );

      case "Settings":
        return (
          <div className="settings-content">
            <div className="settings-placeholder">Settings Placeholder</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="chatbot-container">
      <div className="tabs">
        <button
          className={activeTab === "Chat" ? "active" : ""}
          onClick={() => setActiveTab("Chat")}
        >
          Chat
        </button>
        <button
          className={activeTab === "History" ? "active" : ""}
          onClick={() => setActiveTab("History")}
        >
          History
        </button>
        <button
          className={activeTab === "Settings" ? "active" : ""}
          onClick={() => setActiveTab("Settings")}
        >
          Settings
        </button>
      </div>
      <div className="content">{renderContent()}</div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="chat-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
