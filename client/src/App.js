// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Property from './pages/Property';
import Payments from './pages/Payments';
import Profile from './pages/Profile';
import Maintenance from './pages/Maintenance';
import './App.css';
// import Header from './components/Header';
// import BottomNavBar from './components/BottomNavbar';
import Register from './pages/Signup';
import Dashboard from './Admin/Dashboard';
import Login from './pages/Login';
import Properties from './Admin/Properties';
import Tenants from './Admin/Tenants';
import Rent from './Admin/Rent';
import Settings from './Admin/Settings';
import AdminLanding from './Admin/AdminLanding'; // Import AdminLanding
import Admin from './pages/Landlord';
import LandingPage from './pages/MaskaniLanding'; // Import LandingPage
import AdminLogin from './pages/AdminLogin';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/property" element={<Property />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* Admin routes */}
        <Route path="/admin" element={<Admin />}>
          {/* <Route index element={<AdminLanding />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="properties" element={<Properties />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="rent" element={<Rent />} />
          <Route path="settings" element={<Settings />} />
          
        </Route>
      </Routes>
      {/* <BottomNavBar /> */}
    </div>
  );
}

export default App;
