import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Property from './pages/Property';
import Payments from './pages/Payments';
import Profile from './pages/Profile';
import Maintenance from './pages/Maintenance';
import './App.css';
import Header from './components/Header';
import BottomNavBar from './components/BottomNavbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/property" element={() => <h2>Page not found</h2>} />
      </Routes>
      <BottomNavBar />
    </div>
  );
}

export default App;
