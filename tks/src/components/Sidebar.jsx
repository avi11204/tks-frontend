import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
      };
    
      return (
        <div style={{
          width: '200px',
          background: '#2c3e50',
          color: '#ecf0f1',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '20px 10px'
        }}>
          <div>
            <h2 style={{ paddingBottom: '20px', borderBottom: '1px solid #7f8c8d' }}>Admin</h2>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
              <Link to="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>Dashboard</Link>
              <Link to="/admin/employees" style={{ color: 'inherit', textDecoration: 'none' }}>Employees</Link>
              <Link to="/admin/clients" style={{ color: 'inherit', textDecoration: 'none' }}>Clients</Link>
              <Link to="/admin/vehicles" style={{ color: 'inherit', textDecoration: 'none' }}>Vehicles</Link>
              <Link to="/admin/inventory"style={{ color: 'inherit', textDecoration: 'none' }}>Inventory</Link>
              <Link to="/admin/orders"style={{ color: 'inherit', textDecoration: 'none' }}>orders</Link>
              <Link to="/admin/settings" style={{ color: 'inherit', textDecoration: 'none' }}>Settings</Link>
            </nav>
          </div>
          <button
            onClick={handleLogout}
            style={{
              marginTop: 'auto',
              padding: '10px',
              background: '#e74c3c',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            Logout
          </button>
        </div>
      );
    };

export default Sidebar;
