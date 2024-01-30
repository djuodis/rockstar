// SignUp.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loading from '../Loading';

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
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const [loadingSignUp, setLoadingSignUp] = useState(true); // Initialize loadingSignUp as true

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    try {
      setLoadingSignUp(true);

      const existingUsers = await fetch('http://localhost:4000/users', {
        method: 'GET',
      }).then((response) => response.json());

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

      setLoadingSignUp(false);
    } catch (error) {
      console.error('Error during input change:', error);
      setLoadingSignUp(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usernameExists || emailExists) {
      alert('Username or Email is already in use');
      return;
    }

    try {
      setLoading(true);

      const existingUsers = await fetch('http://localhost:4000/users', {
        method: 'GET',
      }).then((response) => response.json());

      if (existingUsers.some(user => user.firstName === formData.firstName || user.email === formData.email)) {
        alert('Username or Email is already in use');
        setLoading(false);
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
        setSuccessMessage('Signup successful!');
        console.log('Signup successful!');
        navigate('/login');
      } else {
        console.error('Error during signup:', response.statusText);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error during signup:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoadingSignUp(false);
      setLoading(false); // Set loading to false after the delay
    }, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (


    <div className="signUp">
        <motion.div
          className="form"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
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
            <button type="submit" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </motion.div>
        </div>

      )}
    </div>
  );
};

export default SignUp;
