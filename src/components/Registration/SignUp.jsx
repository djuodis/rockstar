// SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const [usernameExists, setUsernameExists] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if the entered username or email already exists
    try {
      const checkResponse = await fetch('http://localhost:4000/users/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name === 'firstName' ? value : formData.firstName,
          email: name === 'email' ? value : formData.email,
        }),
      });

      if (checkResponse.ok) {
        const checkData = await checkResponse.json();

        if (name === 'firstName') {
          setUsernameExists(checkData.exists);
        } else if (name === 'email') {
          setEmailExists(checkData.exists);
        }
      } else {
        console.error('Error checking username or email existence:', checkResponse.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if username or email is already in use
    if (usernameExists || emailExists) {
      alert('Username or Email is already in use');
      return;
    }

    try {
      // Check if the username or email already exists in the API
      const existingUser = await fetch('http://localhost:4000/users', {
        method: 'GET',
      }).then((response) => response.json());

      if (
        existingUser.some(
          (user) => user.firstName === formData.firstName || user.email === formData.email
        )
      ) {
        alert('Username or Email is already in use');
        return;
      }

      // Proceed with signup if everything is okay
      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Signup successful!');
        // Redirect to the login page after successful signup
        navigate('/login');
      } else {
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <>
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
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {emailExists && <span style={{ color: 'red' }}>Email already in use</span>}
        </label>
        <br />
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
    </>
  );
};

export default SignUp;
