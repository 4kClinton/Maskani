
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src="https://i.pinimg.com/564x/2f/d4/ef/2fd4ef702209af8f1d928a1e9c2358a9.jpg" alt="Profile" id/>
        <div>
          <p>Kenya,Nairobi</p>
        </div>
        <button className="notification-button">
          <i className="bell-icon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;