// Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { motion } from 'framer-motion';

import '../../scss/Login.scss'

const Login = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch('http://localhost:4000/users');
        if (response.ok) {
          const userData = await response.json();
          setUsers(userData);
        } else {
          console.error('Error fetching users:', response.statusText);
        }
        setLoading(false); 
      } catch (error) {
        console.error('Error:', error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = async () => {
    setLoading(true);

    const user = users.find((user) => user.firstName === enteredUsername);

    if (user) {
      if (user.password === enteredPassword) {
        setLoggedInUser(user);
        console.log(`Logged in as ${user.firstName}`);

        try {
          await fetch('http://localhost:4000/loggedIn', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: user.id, username: enteredUsername, password: enteredPassword }),
          });
        } catch (error) {
          console.error('Error sending login information to API:', error.message);
        }

       
        const { from } = location.state || { from: { pathname: '/mainpage' } };
        navigate(from);
      } else {
        setIncorrectPassword(true);
      }
    } else {
      setIncorrectPassword(true);
    }

    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="login">
          <motion.div
            className="form"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={enteredUsername}
                onChange={(e) => setEnteredUsername(e.target.value)}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
              />

              <button type="button" onClick={handleLogin}>
                Login
              </button>

              {incorrectPassword && <p style={{ color: 'red' }}>Incorrect username or password</p>}
            </form>

            {loggedInUser && <p>Welcome, {loggedInUser.firstName}!</p>}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Login;
