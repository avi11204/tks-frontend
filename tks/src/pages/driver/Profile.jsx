import React from 'react';
import './Profile.css';

const DriverProfile = () => {
  return (
    <div className="driver-profile">
      <h2>Driver Profile</h2>
      <div className="profile-card">
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D" alt="Driver" />
        <div className="profile-details">
          <p><strong>Name:</strong>Rakesh</p>
          <p><strong>Employee ID:</strong> DRV-1021</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> rakesh@gmail.com</p>
          <p><strong>License Number:</strong> TN01-2023-00123</p>
        </div>
      </div>
    </div>
  );
};

export default DriverProfile;
