// Properties.js
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';

const Properties = () => {
  const properties = [
    { id: 1, address: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
    // Add more properties as needed
  ];

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>ZIP</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell>{property.address}</TableCell>
              <TableCell>{property.city}</TableCell>
              <TableCell>{property.state}</TableCell>
              <TableCell>{property.zip}</TableCell>
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

export default Properties;
