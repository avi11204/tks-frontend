import { Link, useNavigate } from 'react-router-dom';

const DriverSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div>
        <h2>Driver Panel</h2>
        <nav>
          <Link to="/driver">Dashboard</Link>
          <Link to="/driver/trips">Trip Assignments</Link>
          <Link to="/driver/tasks">Assigned Tasks</Link>
          <Link to="/driver/profile">Profile</Link>
          <Link to="/driver/vehicle">Vehicle Info</Link>
        </nav>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DriverSidebar;
