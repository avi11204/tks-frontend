import React from 'react';
import './TripDetails.css';

const TripAssignments = () => {
  const trips = Array.from({ length: 10 }, (_, i) => ({
    id: `TRIP-10${i}`,
    origin: 'Perundurai',
    destination: 'Erode',
    date: '2025-05-08',
    status: i-1 % 2 === 0 ? 'Ongoing' : 'Completed',
  }));

  return (
    <div className="trip-details">
      <h2>Trip Assignments</h2>
      <table className="trip-table">
        <thead>
          <tr>
            <th>Trip ID</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip.id}>
              <td>{trip.id}</td>
              <td>{trip.origin}</td>
              <td>{trip.destination}</td>
              <td>{trip.date}</td>
              <td className={trip.status.toLowerCase()}>{trip.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TripAssignments;
