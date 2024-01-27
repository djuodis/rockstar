import React, { useState } from 'react';

const SignUp = () => {
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
        // Handle the error, show a message to the user, or perform other actions
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle any unexpected errors
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
      // Proceed with signup
      const response = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Signup successful!');
        // You can redirect the user or perform other actions after successful signup
      } else {
        console.error('Signup failed:', response.statusText);
        // Handle the error, show a message to the user, or perform other actions
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle any unexpected errors
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
