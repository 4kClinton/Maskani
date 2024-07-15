import React from 'react';
import { Link } from 'react-router-dom';
import { Home as ListAlt, AddCircle, Build, Person } from '@mui/icons-material';


const Home = () => {
  const cards = [
    { path: "/property", icon: <ListAlt />, label: "Our Properties" },
    { path: "/payments", icon: <AddCircle />, label: "Payments" },
    { path: "/maintenance", icon: <Build />, label: "Maintenance" },
    { path: "/profile", icon: <Person />, label: "Profile" },
  ];

  return (
    <div className="home">
      <h2>Summary</h2>
      <div className="card-list">
        {cards.map((card, index) => (
          <Link to={card.path} key={index} className="summary-card">
            <div className="card-icon">{card.icon}</div>
            <span>{card.label}</span>
          </Link>
        ))}
      </div>
      {/* <FloatingButton />  floating button */}
    </div>
  );
};

export default Home;
