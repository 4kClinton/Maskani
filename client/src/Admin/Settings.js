import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
// import './Settings.css';  // Import the CSS file

const Settings = () => {
  const [newPropertyName, setNewPropertyName] = useState('');
  const [newPropertyLocation, setNewPropertyLocation] = useState('');
  const [properties, setProperties] = useState([
    { name: 'Property A', location: 'Location A' },
    { name: 'Property B', location: 'Location B' },
    { name: 'Property C', location: 'Location C' }
  ]);

  const handleAddProperty = () => {
    if (newPropertyName.trim() !== '' && newPropertyLocation.trim() !== '') {
      setProperties([...properties, { name: newPropertyName.trim(), location: newPropertyLocation.trim() }]);
      setNewPropertyName('');
      setNewPropertyLocation('');
    }
  };

  const handleDeleteProperty = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
  };

  return (
    <Container className="settings-container">
      <Typography variant="h2" className="settings-heading">
        Settings
      </Typography>
      
      {/* Add New Property Form */}
      <div className="add-property-section">
        <Typography variant="h5" gutterBottom>
          Add New Property
        </Typography>
        <Grid container spacing={2} className="property-form">
          <Grid item xs={12} sm={6} className="property-form-item">
            <TextField
              label="Property Name"
              variant="outlined"
              fullWidth
              value={newPropertyName}
              onChange={(e) => setNewPropertyName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} className="property-form-item">
            <TextField
              label="Property Location"
              variant="outlined"
              fullWidth
              value={newPropertyLocation}
              onChange={(e) => setNewPropertyLocation(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleAddProperty}>
              Add Property
            </Button>
          </Grid>
        </Grid>
      </div>
      
      {/* List of Properties */}
      <Typography variant="h5" gutterBottom className="property-list">
        Properties List
      </Typography>
      <Grid container spacing={2}>
        {properties.map((property, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className="property-card">
              <CardContent className="property-card-content">
                <Typography variant="body1"><strong>Name:</strong> {property.name}</Typography>
                <Typography variant="body1"><strong>Location:</strong> {property.location}</Typography>
              </CardContent>
              <CardActions className="property-card-actions">
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
