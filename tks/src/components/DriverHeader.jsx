import React from 'react';
import './DriverHeader.css';

const DriverHeader = () => {
  return (
    <header className="driver-header">
      <h1 className="header-title">Welcome, Driver</h1>
      <div className="header-right">
        <span className="driver-role">Role: Driver</span>
      </div>
    </header>
  );
};

export default DriverHeader;
