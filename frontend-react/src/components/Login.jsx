import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import confetti from 'canvas-confetti';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await axios.post('http://localhost:8000/api/v1/token/', {
      username: form.username,
      password: form.password,
    });
    // console.log(response.data);
    localStorage.setItem('Access Token', response.data.access)
    localStorage.setItem('Refresh Token', response.data.refresh)
    console.log('Login Successful');
    
    

    setErrors({});
    confetti(); // 🎉 Launch confetti on login
    setForm({ username: '', password: '' }); // ✅ FIXED HERE
  } catch (error) {
    if (error.response) {
      setErrors(error.response.data);
      console.error("Login Error:", error.response.data);
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.loginTitle}>Login to our portal</h2>

        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
        </div>


        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
        </div>

        <button type="submit" className={styles.loginBtn} disabled={loading}>
          {loading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin /> Please wait...
            </>
          ) : (
            'Login'
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
