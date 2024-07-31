import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField,} from '@mui/material';
// import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here
    //   const handleSubmit = (e) => {
    // e.preventDefault();

    fetch('https://maskani-backend-1.onrender.com//login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server response:', data); // Log the response to inspect its structure
        if (data.user) {
          localStorage.setItem('token', data.access_token);
          navigate('/Maskani/admin/dashboard');
        } else {
          alert('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
    navigate('/Maskani/admin/dashboard'); // Redirect after successful login
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <form className="form" onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}>
          <span className="title">Admin Login</span>
          <div className="form-container">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="form-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
