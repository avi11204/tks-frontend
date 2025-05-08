// import React, { useEffect, useState } from 'react';
// import './Vehicles.css';
// import axios from 'axios';

// const Vehicles = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [formVisible, setFormVisible] = useState(false);
//   const [editingVehicle, setEditingVehicle] = useState(null);
//   const [formData, setFormData] = useState({
//     vehiclenumber: '',
//     vehicletype: '',
//     registrationnumber: '',
//     capacity: '',
//     fueltype: '',
//     mileage: '',
//     insurance: '',
//     insuranceexpiry: '',
//     Status: 'active',
//   });

//   useEffect(() => {
//     fetchVehicles();
//   }, []);

//   const fetchVehicles = async () => {
//     const res = await axios.get('http://localhost:5000/api/vehicles');
//     setVehicles(res.data);
//   };

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (editingVehicle) {
//       await axios.put(`http://localhost:5000/api/vehicles/${editingVehicle._id}`, formData);
//     } else {
//       await axios.post('http://localhost:5000/api/vehicles', formData);
//     }
//     fetchVehicles();
//     resetForm();
//   };

//   const resetForm = () => {
//     setFormData({
//       vehiclenumber: '',
//       vehicletype: '',
//       registrationnumber: '',
//       capacity: '',
//       fueltype: '',
//       mileage: '',
//       insurance: '',
//       insuranceexpiry: '',
//       Status: 'active',
//     });
//     setEditingVehicle(null);
//     setFormVisible(false);
//   };

//   const handleEdit = vehicle => {
//     setEditingVehicle(vehicle);
//     setFormData(vehicle);
//     setFormVisible(true);
//   };

//   const handleDelete = async id => {
//     await axios.delete(`http://localhost:5000/api/vehicles/${id}`);
//     fetchVehicles();
//   };

//   return (
//     <div className="vehicles-page">
//       <h2>Vehicles</h2>
//       <div className="actions">
//         <button onClick={() => setFormVisible(!formVisible)}>
//           {formVisible ? 'Cancel' : 'Add Vehicle'}
//         </button>
//         <button onClick={() => window.print()}>Export</button>
//       </div>

//       {formVisible && (
//         <form onSubmit={handleSubmit} className="vehicle-form">
//           <input name="vehiclenumber" value={formData.vehiclenumber} onChange={handleChange} placeholder="Vehicle Number" required />
//           <input name="vehicletype" value={formData.vehicletype} onChange={handleChange} placeholder="Vehicle Type" required />
//           <input name="registrationnumber" value={formData.registrationnumber} onChange={handleChange} placeholder="Registration Number" required />
//           <input name="capacity" type="number" value={formData.capacity} onChange={handleChange} placeholder="Capacity" required />
//           <input name="fueltype" value={formData.fueltype} onChange={handleChange} placeholder="Fuel Type" required />
//           <input name="mileage" type="number" value={formData.mileage} onChange={handleChange} placeholder="Mileage" required />
//           <input name="insurance" value={formData.insurance} onChange={handleChange} placeholder="Insurance" required />
//           <input name="insuranceexpiry" type="date" value={formData.insuranceexpiry?.split('T')[0]} onChange={handleChange} required />
//           <select name="Status" value={formData.Status} onChange={handleChange}>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//             <option value="suspended">Suspended</option>
//           </select>
//           <button type="submit">{editingVehicle ? 'Update' : 'Add'}</button>
//         </form>
//       )}

//       <table className="vehicles-table">
//         <thead>
//           <tr>
//             <th>Number</th>
//             <th>Type</th>
//             <th>Registration</th>
//             <th>Capacity</th>
//             <th>Fuel</th>
//             <th>Mileage</th>
//             <th>Insurance</th>
//             <th>Expiry</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map(vehicle => (
//             <tr key={vehicle._id}>
//               <td>{vehicle.vehiclenumber}</td>
//               <td>{vehicle.vehicletype}</td>
//               <td>{vehicle.registrationnumber}</td>
//               <td>{vehicle.capacity}</td>
//               <td>{vehicle.fueltype}</td>
//               <td>{vehicle.mileage}</td>
//               <td>{vehicle.insurance}</td>
//               <td>{vehicle.insuranceexpiry?.split('T')[0]}</td>
//               <td>{vehicle.Status}</td>
//               <td>
//                 <button onClick={() => handleEdit(vehicle)}>Edit</button>
//                 <button onClick={() => handleDelete(vehicle._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Vehicles;


import React, { useEffect, useState } from 'react';
import './Vehicles.css';
import axios from 'axios';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [formData, setFormData] = useState({
    vehiclenumber: '',
    vehicletype: '',
    registrationnumber: '',
    capacity: '',
    fueltype: '',
    mileage: '',
    insurance: '',
    insuranceexpiry: '',
    Status: 'active',
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    const res = await axios.get('https://tks-backend-2g8f.onrender.com');
    setVehicles(res.data);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (editingVehicle) {
      await axios.put(`https://tks-backend-2g8f.onrender.com/${editingVehicle._id}`, formData);
    } else {
      await axios.post('https://tks-backend-2g8f.onrender.com', formData);
    }
    fetchVehicles();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      vehiclenumber: '',
      vehicletype: '',
      registrationnumber: '',
      capacity: '',
      fueltype: '',
      mileage: '',
      insurance: '',
      insuranceexpiry: '',
      Status: 'active',
    });
    setEditingVehicle(null);
    setFormVisible(false);
  };

  const handleEdit = vehicle => {
    setEditingVehicle(vehicle);
    setFormData(vehicle);
    setFormVisible(true);
  };

  const handleDelete = async id => {
    await axios.delete(`https://tks-backend-2g8f.onrender.com/${id}`);
    fetchVehicles();
  };

  return (
    <div className="vehicles-page">
      <h2>Vehicles</h2>
      <div className="actions">
        <button onClick={() => setFormVisible(!formVisible)}>
          {formVisible ? 'Cancel' : 'Add Vehicle'}
        </button>
        <button onClick={() => window.print()}>Export</button>
      </div>

      {formVisible && (
        <form onSubmit={handleSubmit} className="vehicle-form">
          <input name="vehiclenumber" value={formData.vehiclenumber} onChange={handleChange} placeholder="Vehicle Number" required />
          <input name="vehicletype" value={formData.vehicletype} onChange={handleChange} placeholder="Vehicle Type" required />
          <input name="registrationnumber" value={formData.registrationnumber} onChange={handleChange} placeholder="Registration Number" required />
          <input name="capacity" type="number" value={formData.capacity} onChange={handleChange} placeholder="Capacity" required />
          <input name="fueltype" value={formData.fueltype} onChange={handleChange} placeholder="Fuel Type" required />
          <input name="mileage" type="number" value={formData.mileage} onChange={handleChange} placeholder="Mileage" required />
          <input name="insurance" value={formData.insurance} onChange={handleChange} placeholder="Insurance" required />
          <input name="insuranceexpiry" type="date" value={formData.insuranceexpiry?.split('T')[0]} onChange={handleChange} required />
          <select name="Status" value={formData.Status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>
          <button type="submit">{editingVehicle ? 'Update' : 'Add'}</button>
        </form>
      )}

      <table className="vehicles-table">
        <thead>
          <tr>
            <th>Number</th>
            <th>Type</th>
            <th>Registration</th>
            <th>Capacity</th>
            <th>Fuel</th>
            <th>Mileage</th>
            <th>Insurance</th>
            <th>Expiry</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle._id}>
              <td>{vehicle.vehiclenumber}</td>
              <td>{vehicle.vehicletype}</td>
              <td>{vehicle.registrationnumber}</td>
              <td>{vehicle.capacity}</td>
              <td>{vehicle.fueltype}</td>
              <td>{vehicle.mileage}</td>
              <td>{vehicle.insurance}</td>
              <td>{vehicle.insuranceexpiry?.split('T')[0]}</td>
              <td>{vehicle.Status}</td>
              <td>
                <button onClick={() => handleEdit(vehicle)}>Edit</button>
                <button onClick={() => handleDelete(vehicle._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vehicles;
