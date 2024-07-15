import React from 'react';


export default function Profile() {
    // Example user data (replace with actual user data)
    const user = {
        name: 'John Doe',
        phoneNumber: '+1234567890'
    };

    return (
        <div className="profile-page">
            {/* <h1>Profile Page</h1> */}
            <div className="profile-card">
                <div className="profile-details">
                    <h2>{user.name}</h2>
                    <p>Phone Number: {user.phoneNumber}</p>
                </div>
            </div>
            {/* Additional profile content */}
        </div>
    );
}
