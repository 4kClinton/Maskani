import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Tenants';
import Properties from './pages/Properties';
import PropertyPage from './pages/Payments';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/properties" component={Properties} />
        <Route path="/property/:id" component={PropertyPage} />
      </Routes>
      {/* <BottomNavBar /> */}
    </div>
  );
}

export default App;