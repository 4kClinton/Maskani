import React, { useState, useEffect } from 'react';
import BottomNavBar from '../components/BottomNavbar';
import Header from '../components/Header';


const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payments data from an API or a database
    // Replace the following code with your own API call
    fetch(`http://127.0.0.1:5000/payments`)
      .then(response => response.json())
      .then(data => setPayments(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="payments-page">
      <Header />
      <div className="payments-table">
        <h2>Payments</h2>

        {payments.length === 0 ? (
          <div>Loading payments...</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment.id}>
                  <td>{payment.date}</td>
                  <td>${payment.amount}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Payments;
