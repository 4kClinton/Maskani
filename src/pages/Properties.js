import React from 'react';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';

const Properties = () => {
  const properties = [
    { id: 1, image: 'path/to/image1.jpg', name: 'Rose Cottage', rent: 790, beds: 4, baths: 2, guests: 4, rating: 4.8 },
    { id: 2, image: 'path/to/image2.jpg', name: 'The Villa', rent: 1290, beds: 4, baths: 4, guests: 4, rating: 3.8 },
    // additional properties...
  ];

  return (
    <div className="properties">
      {/* <Header /> */}
      <h2>Available Properties</h2>
      <div className="property-list">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;