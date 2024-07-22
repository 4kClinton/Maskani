import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
// import './Dashboard.css';  // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container"> {/* Add a container class */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className="dashboard-paper">
            <Typography className="dashboard-title" variant="h6">Total Tenants</Typography>
            <Typography className="dashboard-value" variant="h4">25</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="dashboard-paper">
            <Typography className="dashboard-title" variant="h6">Total Payments</Typography>
            <Typography className="dashboard-value" variant="h4">Ksh 26,000,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className="dashboard-paper">
            <Typography className="dashboard-title" variant="h6">Total Properties</Typography>
            <Typography className="dashboard-value" variant="h4">10</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
