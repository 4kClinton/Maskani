import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
// import './Tenants.css';  // Import the CSS file

const Tenants = () => {
  const tenants = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
    // Add more tenants as needed
  ];

  return (
    <Paper className="tenants-paper">
      <Table className="tenants-table">
        <TableHead>
          <TableRow>
            <TableCell className="tenants-table-cell">Name</TableCell>
            <TableCell className="tenants-table-cell">Email</TableCell>
            <TableCell className="tenants-table-cell">Phone</TableCell>
            <TableCell className="tenants-table-cell">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tenants.map((tenant) => (
            <TableRow key={tenant.id}>
              <TableCell>{tenant.name}</TableCell>
              <TableCell>{tenant.email}</TableCell>
              <TableCell>{tenant.phone}</TableCell>
              <TableCell>
                <div className="tenants-actions">
                  <Button variant="contained" color="primary">Edit</Button>
                  <Button variant="contained" color="secondary">Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tenants;
