import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="property-card">
      <img src={property.image} alt={property.name} />
      <div className="property-details">
        <h3>{property.name}</h3>
        <p>Rent: ${property.rent}/month</p>
        <p>Beds: {property.beds}, Baths: {property.baths}, Guests: {property.guests}</p>
        <p>Rating: {property.rating}</p>
      </div>
    </Link>
  );
};

export default PropertyCard;