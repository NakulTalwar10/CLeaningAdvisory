import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    const signupDetails = {
      fullName,
      password,
    };

    localStorage.setItem('signupDetails', JSON.stringify(signupDetails));
    
    setFullName('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="form-box bg-white rounded-lg shadow-lg p-8">
        <form className="form" onSubmit={handleSignup}>
          <h2 className="text-2xl font-bold mb-4">Sign up</h2>
          <p className="text-gray-600 mb-8">Create a free account with your email.</p>
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
            Sign up
          </button>
        </form>
        <div className="form-section mt-4">
          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
