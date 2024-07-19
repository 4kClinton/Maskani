// BottomNav.js
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import HouseIcon from '@mui/icons-material/House';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
// import './BottomNav.css';

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const routes = [
    '/admin/dashboard',
    '/admin/tenants',
    '/admin/payments',
    '/admin/properties',
    '/admin/settings',
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(routes[newValue]);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className="admin-bottom-navigation"
    >
      <BottomNavigationAction
        label="Dashboard"
        icon={<HomeIcon />}
        className="bottom-navigation-action"
      />
      <BottomNavigationAction
        label="Tenants"
        icon={<PeopleIcon />}
        className="bottom-navigation-action"
      />
      <BottomNavigationAction
        label="All Payments"
        icon={<PaymentIcon />}
        className="bottom-navigation-action"
      />
      <BottomNavigationAction
        label="Properties"
        icon={<HouseIcon />}
        className="bottom-navigation-action"
      />
      <BottomNavigationAction
        label="Settings"
        icon={<SettingsIcon />}
        className="bottom-navigation-action"
      />
    </BottomNavigation>
  );
};

export default BottomNav;
