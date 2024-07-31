import React from 'react';
import { Link } from 'react-router-dom';
import { Home as ListAlt, Build, Person , Payment } from '@mui/icons-material';
import BottomNavBar from '../components/BottomNavbar';
import Header from '../components/Header';

const Home = () => {
  const cards = [
    { path: "/Maskani/property", icon: <ListAlt />, label: "Our Properties" },
    { path: "/Maskani/payments", icon: <Payment />, label: "Payments" },
    { path: "/Maskani/maintenance", icon: <Build />, label: "Maintenance" },
    { path: "/Maskani/profile", icon: <Person />, label: "Profile" },
  ];

  return (
    
    <div className="home">
      <Header />
      <h2>Dashboard</h2>
      <div className="card-list">
        {cards.map((card, index) => (
          <Link to={card.path} key={index} className="summary-card">
            <div className="card-icon">{card.icon}</div>
            <span>{card.label}</span>
          </Link>
        ))}
      </div>
      {/* <FloatingButton />  floating button */}
      <BottomNavBar />
    </div>
  );
};

export default Home;
