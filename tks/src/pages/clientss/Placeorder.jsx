
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Client.css';

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    item: '',
    quantity: '',
    address: '',
    email: '',
    phone: '',
    preferredDeliveryDate: '',
    notes: '',
  });

  const username = localStorage.getItem('username') || 'Client';

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const orderData = {
      clientName: formData.clientName,
      item: formData.item,
      quantity: formData.quantity,
      address: formData.address
      // Not sending email, phone, preferredDeliveryDate, notes to backend
    };

    try {
      await axios.post('https://tks-backend-2g8f.onrender.com/api/orders', orderData);
      alert('Order placed successfully!');
      setFormData({
        clientName: '',
        item: '',
        quantity: '',
        address: '',
        email: '',
        phone: '',
        preferredDeliveryDate: '',
        notes: '',
      });
      window.location.href = '/client/orders';
    } catch (err) {
      alert('Error placing order.');
      console.error(err);
    }
  };

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

      <h2 className="client-heading">Place an Order</h2>
      <form onSubmit={handleSubmit} className="client-form">
        <input name="clientName" value={formData.clientName} onChange={handleChange} placeholder="Your Name" required />
        <input name="item" value={formData.item} onChange={handleChange} placeholder="Item" required />
        <input name="quantity" value={formData.quantity} onChange={handleChange} type="number" placeholder="Quantity" required />
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />

        {/* Extra frontend-only fields */}
        <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" />
        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone Number" />
        <input name="preferredDeliveryDate" value={formData.preferredDeliveryDate} onChange={handleChange} type="date" placeholder="Preferred Delivery Date" />
        <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Additional Notes" rows="3"></textarea>

        <button type="submit" className="client-btn">Submit</button>
      </form>
    </div>
  );
};

export default PlaceOrder;



