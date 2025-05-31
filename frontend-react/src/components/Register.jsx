import React, { useState } from 'react';
import './Register.css';
import axios from 'axios'

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(form); // log the data being submitted

  try {
    const response = await axios.post('http://localhost:8000/api/v1/register/', form);
    console.log("Response data:", response.data);
    alert("Registration successful!");
    // Optionally redirect or clear form
    setForm({ username: '', email: '', password: '' });
  } catch (error) {
    if (error.response) {
      console.error("Registration Error:", error.response.data);
      alert(`Error: ${JSON.stringify(error.response.data)}`);
    } else {
      console.error("Error:", error.message);
    }
  }
};


  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create an account</h2>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
