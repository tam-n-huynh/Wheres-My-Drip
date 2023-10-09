// src/components/SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import water from '../images/signin_image.png';
import { db } from '../firebase';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useHistory

  const handleSignUp = () => {
    // Here, you can add your sign-up logic.
    // For demonstration purposes, we're just printing the name, email, and password to the console.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    db.collection('Users').add(
        {
            Email: email, 
            Name: name, 
            Password: password,
            FountainsFound: 0
        }
    );
    localStorage.setItem("isSignedIn", true);
    localStorage.setItem("userEmail", email);
    
    navigate('/home');
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-image">
          <img src={water} alt="Signup" className="rounded-image" />
        </div>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
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
            <button className="signup-button" type="button" onClick={handleSignUp}>
              Sign Up
            </button>
          </form>
          <p>Already have an account? <Link to="/signin">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
