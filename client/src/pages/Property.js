import React from 'react';
import PropertyList from '../components/PropertyList';
import BottomNavBar from '../components/BottomNavbar';
import Header from '../components/Header';


const Properties = () => {
  return (
    <div>
      <Header />
      <h2>Properties</h2>
      <PropertyList />
      <BottomNavBar />
    </div>
  );
};

export default Properties;
