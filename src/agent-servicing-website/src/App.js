import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Payment from "./components/Payment";
import Chatbot from "./components/Chatbot";
import Ticket from "./components/Ticket";
import FAQ from "./components/FAQ";
import ReactGA from "react-ga4";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
            <img src="./vcu.png" alt="VCU Logo" />
            <img src="./x.png" alt="X" />
            <img src="./capitalone.png" alt="Capital One Logo" />
          </div>

          <nav className="nav-links">
            <div className="dropdown">
              <button className="dropbtn reason">Reason for Call Today</button>
              <div className="dropdown-content">
                <a href="/payment-auto-pay">Payment/Auto Pay</a>
                <a href="#">Fraud</a>
                <a href="#">Replace/Renew Card</a>
                <a href="#">New Customer</a>
                <a href="#">Rewards/Redem</a>
                <a href="#">Account Activity</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Support</button>
              <div className="dropdown-content">
                <a href="/chatbot">ChatBot</a>
                <a href="/ticket">Submit Ticket</a>
                <a href="/faq">FAQ</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Help</button>
              <div className="dropdown-content">
                <a href="#">Advisor</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </nav>

          <div className={`search-container ${isSearchOpen ? "active" : ""}`}>
            <button className="search-btn" onClick={toggleSearchBar}>
              <img src="./search.png" alt="Search" className="search-icon" />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                autoFocus
              />
            )}
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/payment-auto-pay" element={<Payment />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
