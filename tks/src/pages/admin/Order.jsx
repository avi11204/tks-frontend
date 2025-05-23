// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Order.css';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/orders')
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
// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './Order.css';

// // const Orders = () => {
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     axios.get('https://tks-backend-2g8f.onrender.com')
// //       .then(res => setOrders(res.data))
// //       .catch(err => console.error('Failed to fetch orders:', err));
// //   }, []);

// //   const handleEdit = (order) => {
// //     // Implement your edit logic here
// //     console.log('Edit order:', order);
// //   };

// //   const handleDelete = (id) => {
// //     // Implement your delete logic here
// //     console.log('Delete order ID:', id);
// //   };

// //   return (
// //     <div className="orders-page">
// //       <h2>Orders</h2>
// //       <table className="orders-table">
// //         <thead>
// //           <tr>
// //             <th>Client</th>
// //             <th>Item</th>
// //             <th>Qty</th>
// //             <th>Address</th>
// //             <th>Status</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {orders.map(order => (
// //             <tr key={order._id}>
// //               <td>{order.clientName}</td>
// //               <td>{order.item}</td>
// //               <td>{order.quantity}</td>
// //               <td>{order.address}</td>
// //               <td>{order.status}</td>
// //               <td>
// //                 <button onClick={() => handleEdit(order)}>Edit</button>
// //                 <button onClick={() => handleDelete(order._id)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Orders;
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Order.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [formData, setFormData] = useState({
    clientName: '',
    item: '',
    quantity: '',
    address: '',
    status: '',
  });

  const BACKEND_URL = 'https://tks-backend-2g8f.onrender.com/api/orders';

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(BACKEND_URL);
      setOrders(res.data);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    }
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
    setFormData(order);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      try {
        await axios.delete(`${BACKEND_URL}/${id}`);
        fetchOrders();
      } catch (err) {
        console.error('Delete failed:', err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingOrder) {
        await axios.put(`${BACKEND_URL}/${editingOrder._id}`, formData);
        setEditingOrder(null);
      } else {
        await axios.post(BACKEND_URL, formData);
      }
      fetchOrders();
      setFormData({ clientName: '', item: '', quantity: '', address: '', status: '' });
    } catch (err) {
      console.error('Submit failed:', err);
    }
  };

  return (
    <div className="orders-page">
      <h2>Orders</h2>

      <form onSubmit={handleSubmit} className="order-form">
        <input
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          placeholder="Client Name"
          required
        />
        <input
          name="item"
          value={formData.item}
          onChange={handleChange}
          placeholder="Item"
          required
        />
        <input
          name="quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <select name="status" value={formData.status} onChange={handleChange} required>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Shipped">Shipped</option>
        </select>
        <button type="submit">{editingOrder ? 'Update Order' : 'Add Order'}</button>
      </form>

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
          {orders.length === 0 ? (
            <tr><td colSpan="6">No orders found.</td></tr>
          ) : (
            orders.map((order) => (
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
