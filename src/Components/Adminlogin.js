import React, { useState } from 'react';
import Checks from './check.js';
import AdminDashboard from './adminDashboard.js';


const AdminLogin = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    auth: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Hardcoded admin credentials
      const adminUsername = Checks.username;
      const adminPassword = Checks.password;

      // Check if entered credentials match the hardcoded admin credentials
      if (inputs.username === adminUsername && inputs.password === adminPassword) {
        setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
        localStorage.setItem('adminAuth', inputs.auth); // Store the admin auth token in local storage
      } else {
        alert('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // Render AdminDashboard if isLoggedIn is true
  if (isLoggedIn) {
    return <AdminDashboard />;
  }

  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect3">
        <h1 className="sign-in-text">Admin Login</h1>
        <form>
          <label htmlFor="username" className="l2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="input2"
            placeholder="Admin username"
            onChange={handleChange}
            value={inputs.username}
          />
          <label htmlFor="password" className="l2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input2"
            placeholder="Admin password"
            onChange={handleChange}
            value={inputs.password}
          />
          <label htmlFor="password" className="l2">
            Password:
          </label>
          <input
            type="text"
            id="auth"
            name="auth"
            className="input2"
            placeholder="auth"
            onChange={handleChange}
            value={inputs.auth}
          />
          <button className="button11" type="button" onClick={handleSubmit}>
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;