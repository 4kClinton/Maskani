import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
// import './Signup.css';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('tenant'); // Default role to tenant
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://maskani-backend-1.onrender.com/register', {
        full_name: fullName,
        email,
        phone_number: phoneNumber,
        password,
        role,
        profile_picture: '', // Assuming empty string if not provided
      });

      if (response.status === 201) {
        alert('Registration successful!');
      console.log('Registration successful!', Response.data);
        if (role === "tenant") {navigate('/Maskani/login')} else{navigate('/Maskani/admin-login')};
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setError('There was an error registering! ' + error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="form-box">
          <form className="form" onSubmit={handleSubmit}>
            <span className="title">Sign up</span>
            <span className="subtitle">Create a free account with your email.</span>
            <div className="form-container">
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                className="input"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
              <select
                className="input"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="tenant">Tenant</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button className="signup-button">Sign up</button>
          </form>
          <div className="form-section">
            <p>Have an account? <a href="/Maskani/login">Log in</a></p>
          </div>
          {error && <div className="signup-error">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default Signup;
