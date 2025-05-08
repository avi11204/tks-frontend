// src/pages/AdminPage.jsx
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import Employees from '../pages/admin/Employees';
import Clients from '../pages/admin/Clients';
import Vehicles from '../pages/admin/Vehicle';
import Inventory from '../pages/admin/Inventory';
import Orders from '../pages/admin/Order';
//import SettingsPage from '../pages/admin/Settings';
const AdminPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Topbar />
        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            {/* <Route path="/admin/settings" element={<SettingsPage />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
