// Tenants.js
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';

const Tenants = () => {
  const tenants = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
    // Add more tenants as needed
  ];

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenants.map((tenant) => (
            <TableRow key={tenant.id}>
              <TableCell>{tenant.name}</TableCell>
              <TableCell>{tenant.email}</TableCell>
              <TableCell>{tenant.phone}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">Edit</Button>
                <Button variant="contained" color="secondary">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tenants;
