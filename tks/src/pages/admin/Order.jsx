import { useEffect, useState } from 'react';
import axios from 'axios';
import './Order.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error('Failed to fetch orders:', err));
  }, []);

  const handleEdit = (order) => {
    // Implement your edit logic here
    console.log('Edit order:', order);
  };

  const handleDelete = (id) => {
    // Implement your delete logic here
    console.log('Delete order ID:', id);
  };

  return (
    <div className="orders-page">
      <h2>Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Client</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.clientName}</td>
              <td>{order.item}</td>
              <td>{order.quantity}</td>
              <td>{order.address}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleEdit(order)}>Edit</button>
                <button onClick={() => handleDelete(order._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// export default Orders;
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Order.css';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios.get('https://tks-backend-2g8f.onrender.com')
//       .then(res => setOrders(res.data))
//       .catch(err => console.error('Failed to fetch orders:', err));
//   }, []);

//   const handleEdit = (order) => {
//     // Implement your edit logic here
//     console.log('Edit order:', order);
//   };

//   const handleDelete = (id) => {
//     // Implement your delete logic here
//     console.log('Delete order ID:', id);
//   };

//   return (
//     <div className="orders-page">
//       <h2>Orders</h2>
//       <table className="orders-table">
//         <thead>
//           <tr>
//             <th>Client</th>
//             <th>Item</th>
//             <th>Qty</th>
//             <th>Address</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order._id}>
//               <td>{order.clientName}</td>
//               <td>{order.item}</td>
//               <td>{order.quantity}</td>
//               <td>{order.address}</td>
//               <td>{order.status}</td>
//               <td>
//                 <button onClick={() => handleEdit(order)}>Edit</button>
//                 <button onClick={() => handleDelete(order._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Orders;
