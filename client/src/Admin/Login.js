import React, { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', { email, password });
      if (response.status === 200) {
        alert('Login successful!');
        navigate('/home');  // Navigate to the home page after successful login
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Email" 
          fullWidth 
          margin="normal" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <TextField 
          label="Password" 
          type="password" 
          fullWidth 
          margin="normal" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Button 
          variant="contained" 
          color="primary" 
          style={{ marginTop: 16 }} 
          type="submit"
          // onClick={() => navigate('/home')}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
