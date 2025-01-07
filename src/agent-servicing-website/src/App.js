// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import MyComponent from "./components/MyComponent";
import Payment from "./components/Payment"; 
import ReactGA from "react-ga4";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [accountSearchTerm, setAccountSearchTerm] = useState("");
  const [filteredAccounts, setFilteredAccounts] = useState([]);

  const sampleAccounts = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Mike Johnson" },
  ];

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleAccountSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setAccountSearchTerm(searchTerm);
    const filtered = sampleAccounts.filter(
      (account) =>
        account.name.toLowerCase().includes(searchTerm) ||
        account.id.toString().includes(searchTerm)
    );
    setFilteredAccounts(filtered);
  };

  const isHomePage = window.location.pathname === "/";

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

        <main className="content">
          {/* Render Account Lookup only on the homepage */}
          {isHomePage && (
            <section className="account-lookup">
              <h2>Account Lookup</h2>
              <div className="account-search-bar">
                <input
                  type="text"
                  placeholder="Search by Name or ID..."
                  value={accountSearchTerm}
                  onChange={handleAccountSearch}
                />
              </div>
              <div className="account-results">
                {filteredAccounts.length > 0 ? (
                  filteredAccounts.map((account) => (
                    <div key={account.id} className="account-item">
                      {account.name} (ID: {account.id})
                    </div>
                  ))
                ) : (
                  <p>No accounts found.</p>
                )}
              </div>
            </section>
          )}

          <Routes>
            <Route path="/payment-auto-pay" element={<Payment />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
