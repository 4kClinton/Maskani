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
// import AdminLanding from './Admin/AdminLanding'; // Import AdminLanding
import Admin from './pages/Landlord';
import LandingPage from './pages/MaskaniLanding'; // Import LandingPage
import AdminLogin from './pages/AdminLogin';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/Maskani" element={<LandingPage />} />
        <Route path="/Maskani/home" element={<Home />} />
        <Route path="/Maskani/payments" element={<Payments />} />
        <Route path="/Maskani/profile" element={<Profile />} />
        <Route path="/Maskani/maintenance" element={<Maintenance />} />
        <Route path="/Maskani/property" element={<Property />} />
        <Route path="/Maskani/login" element={<Login />} />
        <Route path="/Maskani/signup" element={<Register />} />
        <Route path="/Maskani/admin-login" element={<AdminLogin />} />
        
        {/* Admin routes */}
        <Route path="/Maskani/admin" element={<Admin />} >
          {/* <Route path="/Maskani/admin/dashboard" element={<Admin />}> */}
          <Route path="/Maskani/admin/dashboard" element={<Dashboard />} />
          <Route path="/Maskani/admin/properties" element={<Properties />} />
          <Route path="/Maskani/admin/tenants" element={<Tenants />} />
          <Route path="/Maskani/admin/rent" element={<Rent />} />
          <Route path="/Maskani/admin/settings" element={<Settings />} />
          
        </Route>
      </Routes>
      {/* <BottomNavBar /> */}
    </div>
  );
}

export default App;
