import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../Admin/BottomNavbar';
// import './Admin.css';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <Container className="admin-container">
      <Typography variant="h3" className="admin-title">
        Admin Panel
      </Typography>
      <Grid container spacing={3} className="admin-grid">
        <Grid item xs={12} sm={6} md={4}>
          <Paper 
            onClick={() => navigate('/Maskani/admin/dashboard')} 
            elevation={3} 
            className="admin-paper"
          >
            <Typography variant="h5">Dashboard</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper 
            onClick={() => navigate('/Maskani/admin/properties')} 
            elevation={3} 
            className="admin-paper"
          >
            <Typography variant="h5">Properties</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper 
            onClick={() => navigate('/Maskani/admin/tenants')} 
            elevation={3} 
            className="admin-paper"
          >
            <Typography variant="h5">Tenants</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper 
            onClick={() => navigate('/Maskani/admin/rent')} 
            elevation={3} 
            className="admin-paper"
          >
            <Typography variant="h5">Rent Payments</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper 
            onClick={() => navigate('/Maskani/admin/settings')} 
            elevation={3} 
            className="admin-paper"
          >
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
