import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
              <a>ChatBot</a>
              <a>Submit Ticket</a>
              <a>FAQ's</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Help</button>
            <div className="dropdown-content">
              <a>Advisor</a>
              <a>Contact Us</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn reason">Reason for Call Today</button>
            <div className="dropdown-content">
              <a>Payment</a>
              <a>Fraud</a>
              <a>Renew Card</a>
              <a>New Customer</a>
            </div>
          </div>
        </nav>

        <div className={`search-container ${isSearchOpen ? 'active' : ''}`}>
          <button className="search-btn" onClick={toggleSearchBar}>
            <img src="./search.png" alt="Search" className="search-icon" />
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            autoFocus={isSearchOpen}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
