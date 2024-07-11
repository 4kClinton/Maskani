import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';
import Tenants from './pages/Tenants';
import Properties from './pages/Properties';
import PropertyCard from './components/PropertyCard';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
    <Tenants/>
    <Properties/>
  </Router>
);
