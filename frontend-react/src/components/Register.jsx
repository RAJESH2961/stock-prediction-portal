import React, { use, useState } from 'react';
import './Register.css';
import axios from 'axios'

// confetti effet
import confetti from 'canvas-confetti';


const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

    // Handling Errors
    // Error can be user name aldready exist
    // password is short
    const [errors, setErrors] = useState({});
    // const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(form); // log the data being submitted

  try {
    const response = await axios.post('http://localhost:8000/api/v1/register/', form);
    console.log("Response data:", response.data);
    // alert("Registration successful!");
    // set the error to blank once success
    setErrors({});
    // set success
    // setSuccess(true);

    // Launching confetti effect
    confetti(); // 🎉 Launch confetti on success
    // Optionally redirect or clear form
    setForm({ username: '', email: '', password: '' });
  } catch (error) {
    setErrors(error.response.data)
    if (error.response) {
      console.error("Registration Error:", error.response.data);
    //   alert(`Error: ${JSON.stringify(error.response.data)}`);
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
          <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
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
          <small>{errors.email && <div className='text-danger'>{errors.email}</div>}</small>
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
          <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
        </div>
        {/* {success && <div className='alert alert-success'>Registration Successful</div>} */}

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
