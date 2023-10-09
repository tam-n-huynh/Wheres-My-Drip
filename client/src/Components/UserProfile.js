import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import test from '../img/userlogo.jpeg';
import { firebase, db } from '../firebase';
import SignUp from './SignUp';

const UserProfile = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [email, setEmail] = useState('');
  const [fountainsFound, setFountainsFound] = useState(0);
  const [name, setName] = useState('');
  const [numberData, setNumberData] = useState([]);

  const handleSignOut = () => {
    // Clear the sign-in state in localStorage
    localStorage.removeItem('isSignedIn');
    localStorage.removeItem('userEmail');
    // Set isSignedIn state to false
    setIsSignedIn(false);
  };


  useEffect(() => {
    // Check if the user is signed in by reading from localStorage
    const storedIsSignedIn = localStorage.getItem('isSignedIn');
    if (storedIsSignedIn === 'true') {
      setIsSignedIn(true);
    }
    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }

    // Define an async function to fetch user data from Firestore
    const fetchUserData = async () => {
      try {
        const userRef = firebase.firestore().collection('Users');
        const querySnapshot = await userRef.where('Email', '==', storedUserEmail).get();

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setEmail(storedUserEmail);
          setName(userData.Name);
          setFountainsFound(userData.FountainsFound);
        } else {
          // Handle case where user data is not found
          console.log('User data not found.');
        }
      } catch (error) {
        // Handle any errors here
        console.error('Error fetching user data:', error);
      }

      try {
        const userRef = firebase.firestore().collection('Markers');
        const querySnapshot = await userRef.where('username', '==', storedUserEmail).get();

        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          const { username, latitude, longitude } = doc.data();
          fetchedData.push({ username, latitude, longitude });
        });

        setNumberData(fetchedData);

        console.log(numberData);

        
      } catch (error) {
        // Handle any errors here
        console.error('Error fetching user data:', error);
      }
    };

    // Call the async function to fetch user data
    fetchUserData();
  }, []);

  return (
    <div>
        {isSignedIn ? (
            <div className="user-profile">
              <div className="user-header">
                <img src={test} alt="User" className="user-image" />
                <h2 className="user-name">{name}</h2>
              </div>
              <div className="user-details">
                <p className="user-email">Email: {userEmail}</p>
                <p className="user-fountains">Fountains Found: {numberData.length}</p>
                {/* Add other user details here */}
              </div>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
        ) : (
          <div>
              <SignUp />
          </div>
        )}
    </div>
    
);
};

export default UserProfile;
