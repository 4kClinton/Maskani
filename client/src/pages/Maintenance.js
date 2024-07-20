import React, { useState } from 'react';

// Toast Component
import { ToastContainer, toast ,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BottomNavBar from '../components/BottomNavbar';
import Header from '../components/Header';

const Maintenance = () => {
  const [formData, setFormData] = useState({
    issueType: '',
    description: '',
    contactInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(formData);
  };

  const notifySuccess = () => {
    toast('Issue Reported Successfuly!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }

  return (
    <>
    
     <Header />
    <div className="maintenance-page">
     
      <h2>Report an Issue</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="issueType">Issue Type:</label>
          <select
            id="issueType"
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            required
          >
            <option value="">Select an issue</option>
            <option value="electricity">Electricity</option>
            <option value="water">Water</option>
            <option value="wifi">WiFi</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="contactInfo">Contact Information:</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='submit-button' onClick={notifySuccess}>Submit</button>
      </form>
      <ToastContainer />
      <BottomNavBar />
    </div>
    
    </>
    
  );
};

export default Maintenance;
