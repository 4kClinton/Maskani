// src/Admin/Settings.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, CardActions } from '@mui/material';

const Settings = () => {
  const [newProperty, setNewProperty] = useState('');
  const [properties, setProperties] = useState(['Property A', 'Property B', 'Property C']); // Example initial properties

  const handleAddProperty = () => {
    if (newProperty.trim() !== '') {
      setProperties([...properties, newProperty.trim()]);
      setNewProperty('');
    }
  };

  const handleDeleteProperty = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Settings
      </Typography>
      
      {/* Add New Property Form */}
      <Typography variant="h5" gutterBottom>
        Add New Property
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            label="Property Name"
            variant="outlined"
            fullWidth
            value={newProperty}
            onChange={(e) => setNewProperty(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary" onClick={handleAddProperty}>
            Add Property
          </Button>
        </Grid>
      </Grid>
      
      {/* List of Properties */}
      <Typography variant="h5" gutterBottom style={{ marginTop: 20 }}>
        Properties List
      </Typography>
      <Grid container spacing={2}>
        {properties.map((property, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="body1">{property}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary" onClick={() => handleDeleteProperty(index)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Settings;
