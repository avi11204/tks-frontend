import { Routes, Route } from 'react-router-dom';
import DriverSidebar from '../components/DriverSidebar';
import DriverHeader from '../components/DriverHeader';

import DashboardDriver from '../pages/driver/Dashboarddriver';
import AssignedTrips from '../pages/driver/AssignedTrips';
import AssignedTasks from '../pages/driver/TripDetails';
import DriverProfile from '../pages/driver/Profile';
import VehicleInfo from '../pages/driver/Vehicleinfo';

import '../pages/driver/Driver.css'; // Add the styles

const Driver = () => {
  return (
    <div className="driver-container">
      <DriverSidebar />
      <div className="driver-main">
        <DriverHeader />
        <Routes>
          <Route index element={<DashboardDriver />} />
          <Route path="trips" element={<AssignedTrips />} />
          <Route path="tasks" element={<AssignedTasks />} />
          <Route path="profile" element={<DriverProfile />} />
          <Route path="vehicle" element={<VehicleInfo />} />
        </Routes>
      </div>
    </div>
  );
};

export default Driver;
