// import React, { useEffect, useState } from 'react';
// import './Inventory.css';
// import axios from 'axios';

// const Inventory = () => {
//   const [inventory, setInventory] = useState([]);
//   const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

//   const [formVisible, setFormVisible] = useState(false);
//   const [editingItem, setEditingItem] = useState(null);
//   const [formData, setFormData] = useState({
//     itemname: '',
//     quantity: '',
//     unit: '',
//     location: ''
//   });

//   useEffect(() => {
//     fetchInventory();
//   }, []);

//   const fetchInventory = async () => {
//     const res = await axios.get('http://localhost:5000/api/inventory');
//     setInventory(res.data);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (editingItem) {
//       await axios.put(`http://localhost:5000/api/inventory/${editingItem._id}`, formData);
//     } else {
//       await axios.post('http://localhost:5000/api/inventory', formData);
//     }
//     fetchInventory();
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       itemname: '',
//       quantity: '',
//       unit: '',
//       location: ''
//     });
//     setEditingItem(null);
//     setFormVisible(false);
//   };

//   const handleEdit = (item) => {
//     setEditingItem(item);
//     setFormData(item);
//     setFormVisible(true);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this item?")) {
//       await axios.delete(`http://localhost:5000/api/inventory/${id}`);
//       fetchInventory();
//     }
//   };
  
//   // const handleDelete = async (id) => {
//   //   await axios.delete(`http://localhost:5000/api/inventory/${id}`);
//   //   fetchInventory();
//   // };

//   return (
//     <div className="inventory-page">
//       <h2>Inventory</h2>
//       <div className="actions">
//         <button onClick={() => setFormVisible(!formVisible)}>
//           {formVisible ? 'Cancel' : 'Add Inventory'}
//         </button>
//         <button onClick={() => window.print()}>Export</button>
//       </div>

//       {formVisible && (
//         <form onSubmit={handleSubmit} className="inventory-form">
//           <input name="itemname" value={formData.itemname} onChange={handleChange} placeholder="Item Name" required />
//           <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
//           <input name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit (e.g., kg, pcs)" required />
//           <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
//           <button type="submit">{editingItem ? 'Update' : 'Add'}</button>
//         </form>
//       )}

//       <table className="inventory-table">
//         <thead>
//           <tr>
//             <th>Item Name</th>
//             <th>Quantity</th>
//             <th>Unit</th>
//             <th>Location</th>
//             <th>Last Updated</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         {/* <tbody>
//           {inventory.map((item) => (
//             <tr key={item._id}>
//               <td>{item.itemname}</td>
//               <td>{item.quantity}</td>
//               <td>{item.unit}</td>
//               <td>{item.location}</td>
//               <td>{new Date(item.lastupdated).toLocaleString()}</td>
//               <td>
//                 <button onClick={() => handleEdit(item)}>Edit</button>
//                 <button onClick={() => handleDelete(item._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody> */}
//         <tbody>
//   {inventory.length === 0 ? (
//     <tr>
//       <td colSpan="6">No inventory items found.</td>
//     </tr>
//   ) : (
//     inventory.map((item) => (
//       <tr key={item._id}>
//         <td>{item.itemname}</td>
//         <td>{item.quantity}</td>
//         <td>{item.unit}</td>
//         <td>{item.location}</td>
//         <td>{new Date(item.lastupdated).toLocaleString()}</td>
//         <td>
//           <button onClick={() => handleEdit(item)}>Edit</button>
//           <button onClick={() => handleDelete(item._id)}>Delete</button>
//         </td>
//       </tr>
//     ))
//   )}
// </tbody>

//       </table>
//     </div>
//   );
// };

// export default Inventory;
// // import React, { useEffect, useState } from 'react';
// // import './Inventory.css';
// // import axios from 'axios';

// // const Inventory = () => {
// //   const [inventory, setInventory] = useState([]);
// //   const [loading, setLoading] = useState(false);
// // const [error, setError] = useState(null);

// //   const [formVisible, setFormVisible] = useState(false);
// //   const [editingItem, setEditingItem] = useState(null);
// //   const [formData, setFormData] = useState({
// //     itemname: '',
// //     quantity: '',
// //     unit: '',
// //     location: ''
// //   });

// //   useEffect(() => {
// //     fetchInventory();
// //   }, []);

// //   const fetchInventory = async () => {
// //     const res = await axios.get('https://tks-backend-2g8f.onrender.com');
// //     setInventory(res.data);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({ ...prevData, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (editingItem) {
// //       await axios.put(`https://tks-backend-2g8f.onrender.com/${editingItem._id}`, formData);
// //     } else {
// //       await axios.post('https://tks-backend-2g8f.onrender.com', formData);
// //     }
// //     fetchInventory();
// //     resetForm();
// //   };

// //   const resetForm = () => {
// //     setFormData({
// //       itemname: '',
// //       quantity: '',
// //       unit: '',
// //       location: ''
// //     });
// //     setEditingItem(null);
// //     setFormVisible(false);
// //   };

// //   const handleEdit = (item) => {
// //     setEditingItem(item);
// //     setFormData(item);
// //     setFormVisible(true);
// //   };

// //   const handleDelete = async (id) => {
// //     if (window.confirm("Are you sure you want to delete this item?")) {
// //       await axios.delete(`https://tks-backend-2g8f.onrender.com/${id}`);
// //       fetchInventory();
// //     }
// //   };
  
// //   // const handleDelete = async (id) => {
// //   //   await axios.delete(`http://localhost:5000/api/inventory/${id}`);
// //   //   fetchInventory();
// //   // };

// //   return (
// //     <div className="inventory-page">
// //       <h2>Inventory</h2>
// //       <div className="actions">
// //         <button onClick={() => setFormVisible(!formVisible)}>
// //           {formVisible ? 'Cancel' : 'Add Inventory'}
// //         </button>
// //         <button onClick={() => window.print()}>Export</button>
// //       </div>

// //       {formVisible && (
// //         <form onSubmit={handleSubmit} className="inventory-form">
// //           <input name="itemname" value={formData.itemname} onChange={handleChange} placeholder="Item Name" required />
// //           <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
// //           <input name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit (e.g., kg, pcs)" required />
// //           <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
// //           <button type="submit">{editingItem ? 'Update' : 'Add'}</button>
// //         </form>
// //       )}

// //       <table className="inventory-table">
// //         <thead>
// //           <tr>
// //             <th>Item Name</th>
// //             <th>Quantity</th>
// //             <th>Unit</th>
// //             <th>Location</th>
// //             <th>Last Updated</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         {/* <tbody>
// //           {inventory.map((item) => (
// //             <tr key={item._id}>
// //               <td>{item.itemname}</td>
// //               <td>{item.quantity}</td>
// //               <td>{item.unit}</td>
// //               <td>{item.location}</td>
// //               <td>{new Date(item.lastupdated).toLocaleString()}</td>
// //               <td>
// //                 <button onClick={() => handleEdit(item)}>Edit</button>
// //                 <button onClick={() => handleDelete(item._id)}>Delete</button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody> */}
// //         <tbody>
// //   {inventory.length === 0 ? (
// //     <tr>
// //       <td colSpan="6">No inventory items found.</td>
// //     </tr>
// //   ) : (
// //     inventory.map((item) => (
// //       <tr key={item._id}>
// //         <td>{item.itemname}</td>
// //         <td>{item.quantity}</td>
// //         <td>{item.unit}</td>
// //         <td>{item.location}</td>
// //         <td>{new Date(item.lastupdated).toLocaleString()}</td>
// //         <td>
// //           <button onClick={() => handleEdit(item)}>Edit</button>
// //           <button onClick={() => handleDelete(item._id)}>Delete</button>
// //         </td>
// //       </tr>
// //     ))
// //   )}
// // </tbody>

// //       </table>
// //     </div>
// //   );
// // };

// // export default Inventory;
import React, { useEffect, useState } from 'react';
import './Inventory.css';
import axios from 'axios';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    itemname: '',
    quantity: '',
    unit: '',
    location: ''
  });

  const BACKEND_URL = 'https://tks-backend-2g8f.onrender.com/api/inventory';

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const res = await axios.get(BACKEND_URL);
      setInventory(res.data);
    } catch (error) {
      console.error('Failed to fetch inventory:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await axios.put(`${BACKEND_URL}/${editingItem._id}`, formData);
      } else {
        await axios.post(BACKEND_URL, formData);
      }
      fetchInventory();
      resetForm();
    } catch (error) {
      console.error('Submit failed:', error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setFormVisible(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`${BACKEND_URL}/${id}`);
        fetchInventory();
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ itemname: '', quantity: '', unit: '', location: '' });
    setEditingItem(null);
    setFormVisible(false);
  };

  return (
    <div className="inventory-page">
      <h2>Inventory</h2>
      <div className="actions">
        <button onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? 'Cancel' : 'Add Inventory'}
        </button>
        <button onClick={() => window.print()}>Export</button>
      </div>

      {formVisible && (
        <form onSubmit={handleSubmit} className="inventory-form">
          <input
            name="itemname"
            value={formData.itemname}
            onChange={handleChange}
            placeholder="Item Name"
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
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            placeholder="Unit (e.g., kg, pcs)"
            required
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
          />
          <button type="submit">{editingItem ? 'Update' : 'Add'}</button>
        </form>
      )}

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Location</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.length === 0 ? (
            <tr>
              <td colSpan="6">No inventory items found.</td>
            </tr>
          ) : (
            inventory.map((item) => (
              <tr key={item._id}>
                <td>{item.itemname}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.location}</td>
                <td>{new Date(item.lastupdated).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
