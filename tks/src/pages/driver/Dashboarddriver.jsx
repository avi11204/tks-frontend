import React from 'react';
import './Dashboarddriver.css';

const Dashboarddriver = () => {
  return (
    <div className="driver-dashboard">
      <h2 className="dashboard-title">Driver Dashboard</h2>

      <div className="stats-cards">
        <div className="card">
          <h3>Total Trips</h3>
          <p>54</p>
        </div>
        <div className="card">
          <h3>Completed</h3>
          <p>42</p>
        </div>
        <div className="card">
          <h3>Pending</h3>
          <p>8</p>
        </div>
        <div className="card">
          <h3>Ongoing</h3>
          <p>4</p>
        </div>
      </div>

      <div className="notifications">
        <h3>Recent Notifications</h3>
        <ul>
          <li>New trip assigned: TRIP-1053</li>
          <li>Vehicle insurance expiring soon</li>
          <li>Trip TRIP-1045 marked as completed</li>
          <li>New message from dispatcher</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboarddriver;
