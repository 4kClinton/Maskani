import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:5600/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server response:', data); // Log the response to inspect its structure
        if (data.success) {
          localStorage.setItem('token', data.access_token);
          navigate('/home');
        } else {
          alert('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="form-box">
          <form className="form" onSubmit={handleSubmit}>
            <span className="title">Login</span>
            <div className="form-container">
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="form-section">
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
