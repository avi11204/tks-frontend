import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Client.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const username = localStorage.getItem('username') || 'Client';

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://tks-backend-2g8f.onrender.com');
        setOrders(response.data);
      } catch (err) {
        alert('Failed to fetch orders');
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="client-container">
      <header className="client-navbar">
        <div className="logo">TKS Client</div>
        <nav className="client-nav">
          <Link to="/client/placeorder" className="nav-link">Place Order</Link>
          <Link to="/client/orders" className="nav-link">My Orders</Link>
        </nav>
        <div className="nav-user">
          <span>{username}</span>
          <button onClick={() => window.location.href = '/'} className="logout-btn">Log Out</button>
        </div>
      </header>
      <section className="order-tracker">
  <h3>Track My Order</h3>
  <ul className="progressbar">
    <li className="active">Ordered</li>
    <li className="active">Dispatched</li>
    <li>Out for Delivery</li>
    <li>Delivered</li>
  </ul>
</section>

<section className="order-summary">
  <h3>Recent Order Summary</h3>
  <div className="order-card">
    <p><strong>Material:</strong> 10 Tons of Sand</p>
    <p><strong>Status:</strong> Dispatched</p>
    <p><strong>Expected Delivery:</strong> May 10, 2025</p>
  </div>
</section>

      <h2 className="client-heading">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="client-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td>{order.clientName}</td>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>{order.address}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyOrders;


// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './Client.css';

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const username = localStorage.getItem('username') || 'Client';

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get('https://tks-backend-2g8f.onrender.com');
//         setOrders(response.data);
//       } catch (err) {
//         alert('Failed to fetch orders');
//         console.error(err);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="client-container">
//       <header className="client-navbar">
//         <div className="logo">TKS Client</div>
//         <nav className="client-nav">
//           <Link to="/client/placeorder" className="nav-link">Place Order</Link>
//           <Link to="/client/orders" className="nav-link">My Orders</Link>
//         </nav>
//         <div className="nav-user">
//           <span>{username}</span>
//           <button onClick={() => window.location.href = '/'} className="logout-btn">Log Out</button>
//         </div>
//       </header>
//       <section className="order-tracker">
//   <h3>Track My Order</h3>
//   <ul className="progressbar">
//     <li className="active">Ordered</li>
//     <li className="active">Dispatched</li>
//     <li>Out for Delivery</li>
//     <li>Delivered</li>
//   </ul>
// </section>

// <section className="order-summary">
//   <h3>Recent Order Summary</h3>
//   <div className="order-card">
//     <p><strong>Material:</strong> 10 Tons of Sand</p>
//     <p><strong>Status:</strong> Dispatched</p>
//     <p><strong>Expected Delivery:</strong> May 10, 2025</p>
//   </div>
// </section>

//       <h2 className="client-heading">My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table className="client-table">
//           <thead>
//             <tr>
//               <th>Client Name</th>
//               <th>Item</th>
//               <th>Quantity</th>
//               <th>Address</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, idx) => (
//               <tr key={idx}>
//                 <td>{order.clientName}</td>
//                 <td>{order.item}</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.address}</td>
//                 <td>{new Date(order.createdAt).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default MyOrders;
