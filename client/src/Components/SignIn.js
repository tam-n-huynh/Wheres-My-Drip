// src/components/SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Here, you can add your authentication logic.
    // For demonstration purposes, we're just printing the email and password to the console.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button className="signin-button" type="button" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default SignIn;
