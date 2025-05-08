import { NavLink, Outlet } from 'react-router-dom';

const DriverLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <NavLink to="/driver" style={styles.link} activeStyle={styles.active}>
          Dashboard
        </NavLink>
        <NavLink to="/driver/trips" style={styles.link} activeStyle={styles.active}>
          Trips
        </NavLink>
        <NavLink to="/driver/tasks" style={styles.link} activeStyle={styles.active}>
          Tasks
        </NavLink>
        <NavLink to="/driver/profile" style={styles.link} activeStyle={styles.active}>
          Profile
        </NavLink>
        <NavLink to="/driver/vehicle" style={styles.link} activeStyle={styles.active}>
          Vehicle
        </NavLink>
      </nav>

      {/* Content area */}
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};
