// src/components/Topbar.jsx
const Topbar = () => {
    return (
      <div style={{
        height: '60px',
        background: '#f5f5f5',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0 20px',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
       
          <span>Admin</span>
        </div>
      </div>
    );
  };
  
  export default Topbar;
  