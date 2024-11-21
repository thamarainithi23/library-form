// App.jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState({
    name: '',
    regNumber: '',
    dob: '',
    biography: '',
  });

  const [editMode, setEditMode] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Save data
  const handleSave = () => {
    setEditMode(false);
  };

  // Enable editing
  const handleEdit = () => {
    setEditMode(true);
  };

  // Handle delete action
  const handleDelete = () => {
    setUser({
      name: '',
      regNumber: '',
      dob: '',
      biography: '',
    });
    setEditMode(false);
  };

  return (
    <div className="form-container">
      <h1>BARATHITHASAN LIBRARY  - Devakottai</h1>
      <h2>Library Member Registration</h2>

      <div className="form">
        <div className="form-group">
          <label>Name:</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div className="form-group">
          <label>Register Number:</label>
          {editMode ? (
            <input
              type="text"
              name="regNumber"
              value={user.regNumber}
              onChange={handleChange}
            />
          ) : (
            <p>{user.regNumber}</p>
          )}
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          {editMode ? (
            <input
              type="date"
              name="dob"
              value={user.dob}
              onChange={handleChange}
            />
          ) : (
            <p>{user.dob}</p>
          )}
        </div>

        <div className="form-group">
          <label>Biography:</label>
          {editMode ? (
            <textarea
              name="biography"
              value={user.biography}
              onChange={handleChange}
            />
          ) : (
            <p>{user.biography}</p>
          )}
        </div>

        <div className="button-container">
          {editMode ? (
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          )}
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
