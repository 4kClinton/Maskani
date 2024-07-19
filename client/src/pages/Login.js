// src/components/Auth/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Check for successful login in response data (e.g., 'success': true)
      if (data.success) {
        localStorage.setItem('token', data.access_token);
        navigate('/home');
      } else {
        console.error("Login failed:", data.message); // Handle login failure message from server
      }

    } catch (error) {
      console.error("There was an error logging in!", error);
    }
  };


  return (

    <>
    <Header />
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className='btn' type="submit">Login</button>
      </form>
    </div>
    </>
    
  );
};

export default Login;
