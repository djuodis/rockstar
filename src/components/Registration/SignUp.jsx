// SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setLoggedInUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const [usernameExists, setUsernameExists] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    try {
      const existingUsers = await fetch('http://localhost:4000/users', {
        method: 'GET',
      }).then((response) => response.json());

      // Check if the username or email already exists in the existingUsers array
      if (existingUsers.some(user => user.firstName === value)) {
        setUsernameExists(true);
      } else {
        setUsernameExists(false);
      }

      if (existingUsers.some(user => user.email === value)) {
        setEmailExists(true);
      } else {
        setEmailExists(false);
      }
    } catch (error) {
      // Handle error if needed
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (usernameExists || emailExists) {
      alert('Username or Email is already in use');
      return;
    }
  
    try {
      const existingUsers = await fetch('http://localhost:4000/users', {
        method: 'GET',
      }).then((response) => response.json());
  
      // Check if the username or email already exists in the existingUsers array
      if (existingUsers.some(user => user.firstName === formData.firstName || user.email === formData.email)) {
        alert('Username or Email is already in use');
        return;
      }
  
      const newUserId = existingUsers.length + 1;
  
      const formDataWithId = {
        ...formData,
        id: newUserId.toString(),
      };
  
      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithId),
      });
  
      if (response.ok) {
        console.log('Signup successful!');
        
        // Redirect to the login page after successful signup
        navigate('/login'); // You can change '/login' to the desired route
      } else {
        console.error('Error during signup:', response.statusText);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  
  

  return (
    <div className="signUp">
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>
            UserName:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {usernameExists && <span style={{ color: 'red' }}>Username already in use</span>}
          </label>
          <label>
            Email address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {emailExists && <span style={{ color: 'red' }}>Email already in use</span>}
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default SignUp;
