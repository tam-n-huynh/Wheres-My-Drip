// src/components/SignIn.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { firebase, db } from '../firebase';

import './SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useHistory
  const [temp, setTemp] = useState(false);
  
  const checkUserCredentials = async (email, password) => {
    try {
      // Query Firestore to find a user with the given email and password
      const userRef = firebase.firestore().collection('Users');
      const docRef = await userRef.where('Email', '==', email).where('Password', '==', password).get();
    
      console.log(docRef);
      console.log('Email:', email);
      console.log('Password:', password);
  
      // Check if a user with the provided credentials exists
      if (!docRef.empty) {
        // User with matching email and password found
        const userData = docRef.docs[0].data();
        return userData;
      } else {
        // No user found with the provided credentials
          console.log("empty")
          alert("Incorrect Username or Password!");
      }
    } catch (error) {
      // Handle any errors here
        console.error('Error checking user credentials:', error);
        alert("Incorrect Username or Password!");
      throw error; // You can handle the error as needed
    }
  };

  const handleSignIn = async() => {
    // Here, you can add your authentication logic.
    // For demonstration purposes, we're just printing the email and password to the console.

    // Check if the user exists in Firestore
    const userData = await checkUserCredentials(email, password);
    console.log(userData)
    if (userData) {
        // User found
        localStorage.setItem("isSignedIn", true);
        localStorage.setItem("userEmail", email);
        navigate('/');
        // console.log(email);
        // console.log(userData.Name);
    }   else {
        // No user found
        console.log("ERROR");
        // localStorage.setItem("userEmail", email);
    }  

    

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
