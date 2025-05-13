// src/pages/admin/Employees.jsx
import React, { useState, useEffect } from 'react';
import './Employees.css';
import axios from 'axios';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get('https://tks-backend-2g8f.onrender.com/api/employees');
    setEmployees(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`https://tks-backend-2g8f.onrender.com/api/employees/${editingId}`, formData);
    } else {
      await axios.post('https://tks-backend-2g8f.onrender.com/api/employees', formData);
    }
    fetchEmployees();
    setFormData({ name: '', email: '', role: '' });
    setShowForm(false);
    setEditingId(null);
  };

  const handleEdit = (emp) => {
    setFormData(emp);
    setEditingId(emp._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://tks-backend-2g8f.onrender.com/api/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div className="employees-container">
      <div className="employees-header">
        <h2>Employees</h2>
        <div className="employees-buttons">
          <button onClick={() => setShowForm(!showForm)}>Add Employee</button>
          <button onClick={() => window.print()}>Export</button>
        </div>
      </div>

      {showForm && (
        <form className="employee-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          />
          <button type="submit">{editingId ? 'Update' : 'Add'}</button>
        </form>
      )}

      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(emp)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(emp._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
