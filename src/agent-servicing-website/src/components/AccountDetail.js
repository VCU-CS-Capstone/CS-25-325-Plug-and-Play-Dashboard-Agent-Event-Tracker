// AccountDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import './AccountDetail.css';


const AccountDetail = () => {
  const { accountId } = useParams();

  const accounts = [
    { id: 1, name: "John Doe", address: "123 Main St", email: "john@example.com", phone: "555-1234" },
    { id: 2, name: "Jane Smith", address: "456 Oak Ave", email: "jane@example.com", phone: "555-5678" },
    { id: 3, name: "Mike Johnson", address: "789 Pine Rd", email: "mike@example.com", phone: "555-8765" },
    { id: 4, name: "Emily Davis", address: "321 Elm St", email: "emily@example.com", phone: "555-4321" },
    { id: 5, name: "Mike Robertson", address: "654 Maple Ln", email: "miker@example.com", phone: "555-9876" },
    { id: 6, name: "Olivia Taylor", address: "987 Birch Blvd", email: "olivia@example.com", phone: "555-6543" },
    { id: 7, name: "Henry Moore", address: "213 Cedar Ct", email: "henry@example.com", phone: "555-3210" },
  ];

  const account = accounts.find((acct) => acct.id === parseInt(accountId));

  if (!account) {
    return <p>Account not found.</p>;
  }

  return (
    <div>
      <h2>Account Details</h2>
      <p><strong>Name:</strong> {account.name}</p>
      <p><strong>Address:</strong> {account.address}</p>
      <p><strong>Email:</strong> {account.email}</p>
      <p><strong>Phone:</strong> {account.phone}</p>
    </div>
  );
};

export default AccountDetail;
