import React, { useState, useEffect } from 'react';
import { firebase } from '../firebase'; // Import Firebase
import SignUp from './SignUp';

function AddWaterPage() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [username, setUsername] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {

    const storedIsSignedIn = localStorage.getItem('isSignedIn');
        if (storedIsSignedIn === 'true') {
            setIsSignedIn(true);
    }

    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail) {
      setUsername(storedUserEmail);
    }

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert the data into Firestore
      const locationsRef = firebase.firestore().collection('Markers');
      await locationsRef.add({
        latitude,
        longitude,
        username
      });

      // Clear the form fields after successful submission
      setLatitude('');
      setLongitude('');

      console.log('Location data inserted successfully.');
    } catch (error) {
      console.error('Error inserting location data:', error);
    }
  };

  return (
    <div>
        {isSignedIn ? (
            <div>
                <h2>Add a Location</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label>Name:</label>
                    <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                    </div>
                    <div>
                    <label>Description:</label>
                    <textarea value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        ) : (
            <div>
                <SignUp />
            </div>
        )}
    </div>
    
);
}

export default AddWaterPage;
