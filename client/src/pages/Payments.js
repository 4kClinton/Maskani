
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import PropertyDetails from '../components/PropertyDetails';

const PropertyPage = ({ match }) => {
  const propertyId = match.params.id;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Fetch property data from an API or a database
    // Replace the following code with your own API call
    fetch(`https://api.example.com/properties/${propertyId}`)
      .then(response => response.json())
      .then(data => setProperty(data))
      .catch(error => console.error(error));
  }, [propertyId]);

  if (!property) {
    return <div>Just a Sec...</div>;
  }

  return (
    <div className="property-page">
      <Header />
      <PropertyDetails property={property} />
      <div className="tenant-info">
        <h3>Current Tenant</h3>
        <p>Last Rent Payment: {property.lastRentPayment}</p>
        <h3>Expenses</h3>
        <p>{property.expenses.description}: ${property.expenses.amount} on {property.expenses.date}</p>
      </div>
    </div>
  );
};

export default PropertyPage;