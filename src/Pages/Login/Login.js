import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const adminCredentials = {
      fullName: 'admin',
      password: 'password',
    };

    const userCredentials = JSON.parse(localStorage.getItem('signupDetails'));

    if (adminCredentials.fullName === fullName && adminCredentials.password === password) {
      localStorage.setItem('isLoggedIn', 'admin');
      setFullName('');
      setPassword('');
      navigate('/admin');
    } 
    else if (userCredentials && userCredentials.fullName === fullName && userCredentials.password === password) {
      localStorage.setItem('isLoggedIn', 'user');
      setFullName('');
      setPassword('');
      navigate('/');
    } 
    else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="form-box bg-white rounded-lg shadow-lg p-8">
        <form className="form" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <p className="text-gray-600 mb-8">Welcome to Cleaning Advisory</p>
          <div className="form-container">
            <input
              type="text"
              className="input mb-4"
              placeholder="Full Name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            <input
              type="password"
              className="input mb-4"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Log In
          </button>
        </form>
        <div className="form-section mt-4">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
