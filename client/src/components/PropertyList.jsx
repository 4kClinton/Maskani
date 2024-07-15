import React from 'react';
import PropertyCard from '../components/PropertyCard';

const properties = [
  {
    id: 1,
    image: 'https://i.pinimg.com/564x/a9/ba/31/a9ba31f41fc26ec072e17898c9bcfc6b.jpg',
    name: 'Rose Cottage',
    rent: 790,
    beds: 4,
    baths: 2,
    guests: 4,
    rating: 4.8
  },
  {
    id: 2,
    image: 'path/to/image2.jpg',
    name: 'The Villa',
    rent: 1290,
    beds: 4,
    baths: 4,
    guests: 4,
    rating: 3.8
  },
  // Add more properties as needed
];

const PropertyList = () => {
  return (
    <div className="property-list">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
