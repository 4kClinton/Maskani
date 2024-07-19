// // src/components/Auth/Register.js


import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
// import './Login.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('tenant');  // default role
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5600/auth/register', { full_name: fullName, email:email, phone_number: phoneNumber, password, role });
      alert('Registration successful!');
      console.log('Registration successful!', Response.data);
      navigate('/login');
    } catch (error) {
      console.error("There was an error registering!", error);
    }
  };

  return (
    <>
    <Header />
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="tenant">Tenant</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button className='btn' type="submit">Register</button>
      </form>
    </div>
    
    
    </>
    
  );
};

export default Register;





























// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';

// const Register = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('tenant');  // default role
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://127.0.0.1:5000/signup', {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           full_name: fullName,
//           email,
//           phone_number: phoneNumber,
//           password,
//           // role
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Server response was not ok');
//       }

//       alert('Registration successful!');
//       navigate('/login');  // Navigate to login page after successful registration
//     } catch (error) {
//       console.error("There was an error registering!", error);
//     }
//   };

//   return (
//     <>
    
//     <Header />
//     <div className="container">
      
//       <div className="header">
//         <h2>Sign Up</h2>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="fullName">Full Name:</label>
//           <input
//             type="text"
//             id="fullName"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="phoneNumber">Phone Number:</label>
//           <input
//             type="text"
//             id="phoneNumber"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="role">Role:</label>
//           <select
//             id="role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option value="tenant">Tenant</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//         <button type="submit" className="submit-button">Register</button>
//       </form>
//     </div>
    
//     </>
    
//   );
// };

// export default Register;
