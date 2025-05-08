import React from 'react';
import './Vehicleinfo.css';

const VehicleInfo = () => {
  return (
    <div className="vehicle-info">
      <h2>Vehicle Information</h2>
      <div className="vehicle-card">
        <p><strong>Vehicle Number:</strong> TN 12 AB 3456</p>
        <p><strong>Model:</strong> Tata Ace Gold</p>
        <p><strong>Type:</strong> Mini Truck</p>
        <p><strong>Insurance Expiry:</strong> 2025-09-30</p>
        <p><strong>Status:</strong> Active</p>
      </div>
    </div>
  );
};

export default VehicleInfo;
