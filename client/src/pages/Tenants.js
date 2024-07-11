
import React from 'react';
// import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';
import BottomNavBar from '../components/BottomNavbar';
import FloatingButton from '../components/FloatingButton';

const Tenants = () => {
  const properties = [
    { id: 1, image: 'https://i.pinimg.com/564x/a9/ba/31/a9ba31f41fc26ec072e17898c9bcfc6b.jpg', name: 'Rose Cottage', rent: 790, beds: 4, baths: 2, guests: 4, rating: 4.8 },
    { id: 2, image: 'path/to/image2.jpg', name: 'The Villa', rent: 1290, beds: 4, baths: 4, guests: 4, rating: 3.8 },
    // additional properties...
  ];

  return (
    <div className="home">
      
      <h2>My Properties</h2>
      <div className="property-list">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <Link to="/properties" className="add-property-button">
        Add New Properties
      </Link>
      <FloatingButton />  {/* floating button */}
      <BottomNavBar/>
    </div>
  );
};

export default Tenants;