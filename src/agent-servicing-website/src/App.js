import React, { useState, useEffect } from 'react';
import './App.css';
import MyComponent from "./components/MyComponent"; // Ensure the path is correct
import ReactGA from "react-ga4";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Track page views on component mount
  useEffect(() => {
    console.log("Attempting to send pageview event");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);
  

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="./vcu.png" alt="VCU Logo" />
          <img src="./x.png" alt="X" />
          <img src="./capitalone.png" alt="Capital One Logo" />
        </div>

        <nav className="nav-links">
          <div className="dropdown">
            <button className="dropbtn">Support</button>
            <div className="dropdown-content">
              <a href="#">ChatBot</a>
              <a href="#">Submit Ticket</a>
              <a href="#">FAQ's</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Help</button>
            <div className="dropdown-content">
              <a href="#">Advisor</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn reason">Reason for Call Today</button>
            <div className="dropdown-content">
              <a href="#">Payment</a>
              <a href="#">Fraud</a>
              <a href="#">Renew Card</a>
              <a href="#">New Customer</a>
            </div>
          </div>
        </nav>

        <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
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
    </div>
  );
}

export default App;
