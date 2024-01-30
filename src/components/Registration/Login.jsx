// Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const navigate = useNavigate();

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

  const handleLogin = async () => {
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

        navigate('/mainpage');
      } else {
        setIncorrectPassword(true);
      }
    } else {
      setIncorrectPassword(true);
    }
  };

  return (
    <div>
      <div className="login">
        <div className="form">
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
        </div>
     
    </div>
      </div>
    
  );
};

export default Login;