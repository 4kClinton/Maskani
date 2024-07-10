import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyCard from './components/PropertyCard';
import Header from './components/Header';

ReactDOM.render(
  <Router>
    <App />
    <Home/>
    <Properties/>
   
  </Router>,
  document.getElementById('root')
);