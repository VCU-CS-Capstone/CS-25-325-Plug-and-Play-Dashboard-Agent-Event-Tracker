import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom"; // Remove BrowserRouter import here
import ReactGA from "react-ga4";
import MyComponent from "./components/MyComponent";
import Payment from "./components/Payment";
import ReportFraud from "./components/ReportFraud";
import ReplaceCard from "./components/ReplaceCard";
import NewCustomer from "./components/NewCustomer";
import AccountActivity from "./components/AccountActivity";
import Chatbot from "./components/Chatbot";
import Ticket from "./components/Ticket";
import FAQ from "./components/FAQ";
import Advisor from "./components/Advisor";
import Contact from "./components/Contact";
import AccountDetail from "./components/AccountDetail"; 
import { useLocation } from "react-router-dom";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [accountSearchTerm, setAccountSearchTerm] = useState("");
  const [filteredAccounts, setFilteredAccounts] = useState([]);

  const sampleAccounts = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Mike Johnson" },
    { id: 4, name: "Emily Davis" },
    { id: 5, name: "Mike Robertson" },
    { id: 6, name: "Olivia Taylor" },
    { id: 7, name: "Henry Moore" },
  ];

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
    setFilteredAccounts(sampleAccounts);
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

  const location = useLocation();
  console.log("Current Path:", location.pathname);  // Log the current path
  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/vcu.png`} alt="VCU Logo" />
          </Link>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/x.png`} alt="X" />
          </Link>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/capitalone.png`}
              alt="Capital One Logo"
            />
          </Link>
        </div>

        <nav className="nav-links">
          <div className="dropdown">
            <button className="dropbtn reason">Reason for Call Today</button>
            <div className="dropdown-content">
              <Link to="/payment-auto-pay">Payment/Auto Pay</Link>
              <Link to="/report-fraud">Fraud</Link>
              <Link to="/replace-card">Replace/Renew Card</Link>
              <Link to="/new-customer">New Customer</Link>
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
            <img
              src={`${process.env.PUBLIC_URL}/search.png`}
              alt="Search"
              className="search-icon"
            />
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
                    <Link to={`/account/${account.id}`} className="account-link">
                      {account.name} (ID: {account.id})
                    </Link>
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
          <Route path="/report-fraud" element={<ReportFraud />} />
          <Route path="/replace-card" element={<ReplaceCard />} />
          <Route path="/new-customer" element={<NewCustomer />} />
          <Route path="/account-activity" element={<AccountActivity />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/account/:accountId" element={<AccountDetail accounts={sampleAccounts} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
