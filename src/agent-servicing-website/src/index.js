import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga4"

<<<<<<< HEAD
const id = "S7XSSNJ5Y1";
=======
const id = 'G-S7XSSNJ5Y1'
>>>>>>> 7c305842b9947afb00c2020fc9b8ea4f4326be1e
ReactGA.initialize(id);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
