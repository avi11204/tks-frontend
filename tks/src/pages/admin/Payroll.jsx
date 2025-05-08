import { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Client Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o._id}>
              <td>{o.clientName}</td>
              <td>{o.item}</td>
              <td>{o.quantity}</td>
              <td>{o.address}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
