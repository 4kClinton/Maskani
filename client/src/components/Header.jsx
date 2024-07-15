import React, { useRef } from 'react';
import { Phone } from '@mui/icons-material';
import { toast, ToastContainer, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import debounce from 'lodash.debounce';

const Header = () => {
  const toastId = useRef(null);

  const notifyContact = debounce(() => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast('Contact Us: +254796 205 375', {
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
  }, 300);

  return (
    <header id='header'>
      <div className="header-content">
        <div className="header-left">
          <img src="https://i.pinimg.com/564x/2f/d4/ef/2fd4ef702209af8f1d928a1e9c2358a9.jpg" alt="Profile" id="profile-img" />
        </div>
        <div className="header-center">
          <h3>Maskani Homes</h3>
          {/* <span>Welcome Home</span> */}
        </div>
        <div className="header-right">
          <button className="notification-button" onClick={notifyContact}>
            <Phone className="phone-icon" />
            {/* <span>Contact Us</span> */}
          </button>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
