// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AdminPage from './pages/Admin';
import ClientPage from './pages/Client';
import DriverPage from './pages/Driver';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/client/*" element={<ClientPage />} />
        <Route path="/driver/*" element={<DriverPage />} />
      </Routes>
    </Router>
  );
}

export default App;
