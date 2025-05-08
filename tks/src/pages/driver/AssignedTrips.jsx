// // pages/driver/TripAssignments.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Driver.css'; // Assuming you have a CSS file for styling
// const TripAssignments = () => {
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     axios.get('/api/trip-assignments/my') // Endpoint for driver-specific trips
//       .then(res => setTrips(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="trip-assignments">
//       <h2>My Trip Assignments</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Route</th>
//             <th>Status</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {trips.map((trip) => (
//             <tr key={trip._id}>
//               <td>{trip.route}</td>
//               <td>{trip.status}</td>
//               <td>{trip.startDate?.slice(0, 10)}</td>
//               <td>{trip.endDate?.slice(0, 10)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TripAssignments;
import React from 'react';
import './AssignedTrips.css';

const mockTrips = Array.from({ length: 20 }).map((_, i) => ({
  id: `TRIP-${1000 + i}`,
  task: `Deliver goods to warehouse ${i + 1}`,
  location: `Perundurai`,
  status: i % 3 === 0 ? 'Pending' : i % 3 === 1 ? 'In Progress' : 'Completed',
  startDate: `2024-0${(i % 9) + 1}-10`,
  endDate: `2024-0${(i % 9) + 1}-12`,
}));

const AssignedTrips = () => {
  return (
    <div className="assigned-trips">
      <h2 className="page-title">Assigned Trips</h2>
      <table className="trip-table">
        <thead>
          <tr>
            <th>Trip ID</th>
            <th>Task</th>
            <th>Location</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {mockTrips.map((trip, index) => (
            <tr key={index}>
              <td>{trip.id}</td>
              <td>{trip.task}</td>
              <td>{trip.location}</td>
              <td className={`status ${trip.status.toLowerCase()}`}>{trip.status}</td>
              <td>{trip.startDate}</td>
              <td>{trip.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignedTrips;
