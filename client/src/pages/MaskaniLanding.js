import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
// import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="landing-page" maxWidth="md">
      <Box textAlign="center" mt={8}>
        <Typography variant="h2" gutterBottom>
          Welcome to Maskani Homes
        </Typography>
        <Typography variant="h5" gutterBottom>
          Your ultimate rental property management system
        </Typography>
        <img
          src={`${process.env.PUBLIC_URL}/tech-real-estate.jpeg`}
          alt="Tech meets Real estate"
          className="landing-image"
        />
        <Typography variant="h6" className="landing-motto">
          Where Tech Meets Real Estate
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/login')}
            className="landing-page-button"
          >
            Login as Tenant
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/signup')}
            className="landing-page-button"
            style={{ marginLeft: '16px' }}
          >
            Sign Up
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/admin-login')}
            className="landing-page-button"
            style={{ marginLeft: '16px' }}
          >
            Login as Admin
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
