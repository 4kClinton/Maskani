import React, { useState, useEffect } from 'react';
import BottomNavBar from '../components/BottomNavbar';
import Header from '../components/Header';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box } from '@mui/material';

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch payments data from an API or a database
    fetch('https://maskani-backend-1.onrender.com/payments')
      .then(response => response.json())
      .then(data => {
        setPayments(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching payments:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="payments-page">
      <Header />
      <div className="payments-table">
        <h2>Payments</h2>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date Paid</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Amount Due </TableCell>
                  {/* <TableCell>Amount Due</TableCell> */}
                  {/* <TableCell>Status</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.map(payment => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.date_payed}</TableCell>
                    <TableCell>${payment.amount}</TableCell>
                    <TableCell>{payment.amount_due}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Payments;
