import React, { useEffect, useState } from 'react';
import './Clients.css';
import axios from 'axios';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [formData, setFormData] = useState({
    companyname: '',
    contactperson: '',
    email: '',
    address: '',
    phone: ''
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const res = await axios.get("https://tks-backend-2g8f.onrender.com");
    setClients(res.data);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editingClient) {
      await axios.put("https://tks-backend-2g8f.onrender.com/${editingClient._id}", formData);
    } else {
      await axios.post("https://tks-backend-2g8f.onrender.com", formData);
    }
    fetchClients();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      companyname: '',
      contactperson: '',
      email: '',
      address: '',
      phone: ''
    });
    setEditingClient(null);
    setFormVisible(false);
  };

  const handleEdit = client => {
    setEditingClient(client);
    setFormData(client);
    setFormVisible(true);
  };

  const handleDelete = async id => {
    await axios.delete("https://tks-backend-2g8f.onrender.com/${id}");
    fetchClients();
  };

  return (
    <div className="clients-page">
      <h2>Clients</h2>
      <div className="actions">
        <button onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? 'Cancel' : 'Add Client'}
        </button>
        <button onClick={() => window.print()}>Export</button>
      </div>

      {formVisible && (
        <form onSubmit={handleSubmit} className="client-form">
          <input name="companyname" value={formData.companyname} onChange={handleChange} placeholder="Company Name" required />
          <input name="contactperson" value={formData.contactperson} onChange={handleChange} placeholder="Contact Person" required />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
          <button type="submit">{editingClient ? 'Update' : 'Add'}</button>
        </form>
      )}

      <table className="clients-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client._id}>
              <td>{client.companyname}</td>
              <td>{client.contactperson}</td>
              <td>{client.email}</td>
              <td>{client.address}</td>
              <td>{client.phone}</td>
              <td>
                <button onClick={() => handleEdit(client)}>Edit</button>
                <button onClick={() => handleDelete(client._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// export default Clients;
// import React, { useEffect, useState } from 'react';
// import './Clients.css';
// import axios from 'axios';

// const Clients = () => {
//   const [clients, setClients] = useState([]);
//   const [formVisible, setFormVisible] = useState(false);
//   const [editingClient, setEditingClient] = useState(null);
//   const [formData, setFormData] = useState({
//     companyname: '',
//     contactperson: '',
//     email: '',
//     address: '',
//     phone: ''
//   });

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     const res = await axios.get('https://tks-backend-2g8f.onrender.com');
//     setClients(res.data);
//   };

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (editingClient) {
//       await axios.put(`https://tks-backend-2g8f.onrender.com/${editingClient._id}`, formData);
//     } else {
//       await axios.post('https://tks-backend-2g8f.onrender.com', formData);
//     }
//     fetchClients();
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       companyname: '',
//       contactperson: '',
//       email: '',
//       address: '',
//       phone: ''
//     });
//     setEditingClient(null);
//     setFormVisible(false);
//   };

//   const handleEdit = client => {
//     setEditingClient(client);
//     setFormData(client);
//     setFormVisible(true);
//   };

//   const handleDelete = async id => {
//     await axios.delete(`https://tks-backend-2g8f.onrender.com/${id}`);
//     fetchClients();
//   };

//   return (
//     <div className="clients-page">
//       <h2>Clients</h2>
//       <div className="actions">
//         <button onClick={() => setFormVisible(!formVisible)}>
//           {formVisible ? 'Cancel' : 'Add Client'}
//         </button>
//         <button onClick={() => window.print()}>Export</button>
//       </div>

//       {formVisible && (
//         <form onSubmit={handleSubmit} className="client-form">
//           <input name="companyname" value={formData.companyname} onChange={handleChange} placeholder="Company Name" required />
//           <input name="contactperson" value={formData.contactperson} onChange={handleChange} placeholder="Contact Person" required />
//           <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//           <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
//           <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
//           <button type="submit">{editingClient ? 'Update' : 'Add'}</button>
//         </form>
//       )}

//       <table className="clients-table">
//         <thead>
//           <tr>
//             <th>Company</th>
//             <th>Contact</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Phone</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {clients.map(client => (
//             <tr key={client._id}>
//               <td>{client.companyname}</td>
//               <td>{client.contactperson}</td>
//               <td>{client.email}</td>
//               <td>{client.address}</td>
//               <td>{client.phone}</td>
//               <td>
//                 <button onClick={() => handleEdit(client)}>Edit</button>
//                 <button onClick={() => handleDelete(client._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Clients;
