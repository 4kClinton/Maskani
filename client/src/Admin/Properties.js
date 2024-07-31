import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
// import './Properties.css'; // Import the CSS file

const Properties = () => {
  const properties = [
    { id: 1, address: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
    // Add more properties as needed
  ];

  return (
    <Paper className="properties-paper">
      <Typography variant="h4" gutterBottom className="properties-header">
        Properties
      </Typography>

      {/* Add New Property Form */}
      <div className="add-property-form">
        <Typography variant="h6" gutterBottom>
          Add New Property
        </Typography>
        {/* Form elements go here */}
      </div>

      {/* Properties Table */}
      <div className="properties-table-container">
        <Table className="properties-table">
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
      </div>
    </Paper>
  );
};

export default Properties;
