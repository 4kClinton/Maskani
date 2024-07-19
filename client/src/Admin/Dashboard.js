// Dashboard.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Paper>
          <Typography variant="h6">Total Tenants</Typography>
          <Typography variant="h4">25</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper>
          <Typography variant="h6">Total Payments</Typography>
          <Typography variant="h4">$10,000</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper>
          <Typography variant="h6">Total Properties</Typography>
          <Typography variant="h4">10</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
