// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Payment from "./components/Payment";
import Chatbot from "./components/Chatbot";
import Ticket from "./components/Ticket";
import FAQ from "./components/FAQ";
import Advisor from "./components/Advisor";
import Contact from "./components/Contact";
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
    <Router basename="/CS-25-325-Plug-and-Play-Dashboard-Agent-Event-Tracker">
      <div className="App">
        <header className="header">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/vcu.png`} alt="VCU Logo" />
            <img src={`${process.env.PUBLIC_URL}/x.png`} alt="X" />
            <img src={`${process.env.PUBLIC_URL}/capitalone.png`} alt="Capital One Logo" />
          </div>

          <nav className="nav-links">
            <div className="dropdown">
              <button className="dropbtn reason">Reason for Call Today</button>
              <div className="dropdown-content">
                <Link to="/payment-auto-pay">Payment/Auto Pay</Link>
                <Link to="/fraud">Fraud</Link>
                <Link to="/replace-card">Replace/Renew Card</Link>
                <Link to="/new-customer">New Customer</Link>
                <Link to="/rewards">Rewards/Redem</Link>
                <Link to="/account-activity">Account Activity</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Support</button>
              <div className="dropdown-content">
                <Link to="/chatbot">ChatBot</Link>
                <Link to="/ticket">Submit Ticket</Link>
                <Link to="/faq">FAQ</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Help</button>
              <div className="dropdown-content">
                <Link to="/advisor">Advisor</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>
          </nav>

          <div className={`search-container ${isSearchOpen ? "active" : ""}`}>
            <button className="search-btn" onClick={toggleSearchBar}>
              <img src={`${process.env.PUBLIC_URL}/search.png`} alt="Search" className="search-icon" />
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
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/advisor" element={<Advisor />} />
            <Route path="/contact-us" element={<Contact />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;