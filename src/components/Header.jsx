import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src="path/to/profile-pic.jpg" alt="Profile" />
        <div>
          <p>USA, Miami</p>
        </div>
        <button className="notification-button">
          <i className="bell-icon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;