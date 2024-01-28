// Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/users');
        if (response.ok) {
          const userData = await response.json();
          setUsers(userData);
        } else {
          console.error('Error fetching users:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = () => {
    const user = users.find((user) => user.firstName === username);

    if (user) {
      if (user.password === password) {
        setLoggedInUser(user);
        console.log(`Logged in as ${user.firstName}`);
        navigate(location.state?.from ? location.state.from : '/');
      } else {
        setIncorrectPassword(true);
      }
    } else {
      setIncorrectPassword(true);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>

        {incorrectPassword && <p style={{ color: 'red' }}>Incorrect username or password</p>}
      </form>

      {loggedInUser && <p>Welcome, {loggedInUser.firstName}!</p>}
    </div>
  );
};

export default Login;
