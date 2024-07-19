// Login.js
import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';

const Login = () => {
  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6">Login</Typography>
      <form>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" style={{ marginTop: 16 }}>Login</Button>
      </form>
    </Paper>
  );
};

export default Login;
