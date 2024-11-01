import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* global dataLayer */ // Define dataLayer as a global variable for ESLint

// Google Analytics Initialization Function
function initializeGoogleAnalytics() {
  const trackingID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
  if (trackingID) {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', trackingID);
  }
}

// Call the function to initialize Google Analytics
initializeGoogleAnalytics();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance in the app
reportWebVitals();
