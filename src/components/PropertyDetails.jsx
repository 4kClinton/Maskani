import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div className="property-details">
      <img src={property.image} alt={property.name} />
      <div>
        <h2>{property.name}</h2>
        <p>Location: {property.location}</p>
        <p>Rent: ${property.rent}/month</p>
        <p>Beds: {property.beds}, Baths: {property.baths}, Guests: {property.guests}</p>
        <p>Rating: {property.rating}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;