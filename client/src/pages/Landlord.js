// src/Admin/Admin.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../Admin/BottomNavbar';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Admin Panel
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper onClick={() => navigate('/admin/dashboard')} elevation={3} style={{ padding: 20, cursor: 'pointer' }}>
            <Typography variant="h5">Dashboard</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper onClick={() => navigate('/admin/properties')} elevation={3} style={{ padding: 20, cursor: 'pointer' }}>
            <Typography variant="h5">Properties</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper onClick={() => navigate('/admin/tenants')} elevation={3} style={{ padding: 20, cursor: 'pointer' }}>
            <Typography variant="h5">Tenants</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper onClick={() => navigate('/admin/rent')} elevation={3} style={{ padding: 20, cursor: 'pointer' }}>
            <Typography variant="h5">Rent Payments</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper onClick={() => navigate('/admin/settings')} elevation={3} style={{ padding: 20, cursor: 'pointer' }}>
            <Typography variant="h5">Settings</Typography>
          </Paper>
        </Grid>
      </Grid>
      <BottomNav />
      <Outlet />
    </Container>
  );
};

export default Admin;
