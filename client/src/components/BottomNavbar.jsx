import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ListAlt, AddCircle } from '@mui/icons-material';


const BottomNavBar = () => {
  return (
    <div id='bottomNav'>

    <nav className="bottom-nav">
        <Link to="/" className="nav-item">
            <Home />
            <span>Tenants</span>
        </Link>
        <Link to="/properties" className="nav-item">
            <ListAlt />
            <span>Properties</span>
        </Link>
        <Link to="/add-property" className="nav-item">
            <AddCircle />
            <span>payments</span>
        </Link>
        </nav>


    </div>
   
  );
};

export default BottomNavBar;