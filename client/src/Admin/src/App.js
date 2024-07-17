import React from 'react';
import './App.css';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

function App() {
  return (
    //<BrowserRouter> {/* Wrap entire app with BrowserRouter */}
      <div className="App">
        <div className="AppGlass">
          <Sidebar /> {/* Render Sidebar component */}
          <MainDash />
          <RightSide />
        </div>
      </div>
    // </BrowserRouter>
  );
}

export default App;
