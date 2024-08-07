import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Build, Person , Payment} from '@mui/icons-material';

const BottomNavBar = () => {
  const handleClick = (label) => {
    console.log(`${label} clicked`);
  };

  return (
    <div id='bottomNav'>
      <nav className="bottom-nav">
        <Link to="/Maskani/home" className="nav-item" onClick={() => handleClick('Home')}>
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link to="/Maskani/payments" className="nav-item" onClick={() => handleClick('Payments')}>
          <Payment />
          <span>Payments</span>
        </Link>
        <Link to="/Maskani/maintenance" className="nav-item" onClick={() => handleClick('Maintenance')}>
          <Build />
          <span>Maintenance</span>
        </Link>
        <Link to="/Maskani/profile" className="nav-item" onClick={() => handleClick('Profile')}>
          <Person />
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default BottomNavBar;
