import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField,} from '@mui/material';
// import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here
    navigate('/admin/dashboard'); // Redirect after successful login
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
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
