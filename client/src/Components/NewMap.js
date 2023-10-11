// src/components/SignUp.js
import React, { useState, useEffect } from 'react';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import {firebase, db} from '../firebase';
import customMapStyle from './customMapStyle.json'; // Custom Map Style
import "./MapsPage.css";
import Drop from "../img/drop.png";


const NewMap = ({ center, zoom }) => {

    const {isLoaded} = useLoadScript({ 
        googleMapsApiKey: process.env.REACT_APP_GMAP_KEY,
    });

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [username, setUsername] = useState("noUser");
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [curlat, setCurLat] = useState(0);
    const [curlon, setCurLon] = useState(0);
    

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("effect for getting all data ran")
        const storedIsSignedIn = localStorage.getItem('isSignedIn');
        if (storedIsSignedIn === 'true') {
            setIsSignedIn(true);
    }

    const storedUserEmail = localStorage.getItem('userEmail');
    if (storedUserEmail) {
      setUsername(storedUserEmail);
    }

        const fetchData = async () => {
            try {
                const db = firebase.firestore();
                const collectionRef = db.collection('Markers'); // Replace with your collection name

                const querySnapshot = await collectionRef.get();

                const fetchedData = [];
                querySnapshot.forEach((doc) => {
                const { username, latitude, longitude } = doc.data();
                fetchedData.push({ username, latitude, longitude });
                });
        
                // Correct: Use the callback form of setState
                setData(fetchedData);

            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
        console.log(data);
    }, []);

    function setCoordinates(lng, lat) {
        setLatitude(lat);
        setLongitude(lng);
        setCurLat(lat);
        setCurLon(lng);
    }

    useEffect(() => {
        console.log("effect ran")
        if (navigator.geolocation) {
            console.log("Success")
            navigator.geolocation.getCurrentPosition((position) => {

            setCoordinates(position.coords.longitude, position.coords.latitude);

            }, (error) => {
            console.error('Error getting geolocation:', error);
            });
        } else {
            console.log("error")
            console.error('Geolocation is not supported by this browser.');
        }
    }, [latitude, longitude]);

    const handleSubmit = async () => {
        await db.collection("Markers").add({
            username: username,
            latitude: curlat,
            longitude: curlon
        })
        window.location.reload(false);
    }

  return (
    //conditonally render the map
    isLoaded ? (
        <div className="MapsPage">
            <div className="Add-Drip-Buttons">
                  {isSignedIn ? (
                      <button className="Drip-Button" onClick={handleSubmit} >Add Drip</button>
                  ) : null}
            </div>
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100vh' }}
                zoom={14}
                center={{
                    lat: +latitude,
                    lng: +longitude
                }}

                options={{ styles: customMapStyle }}
                onClick={ev => {
                    console.log("latitide = ", ev.latLng.lat());
                    console.log("longitude = ", ev.latLng.lng());
                  }}
                >
                {data.map((item) => (
                    <Marker
                    key={item.id} // Use a unique identifier as the key
                    position={{
                        lat: item.latitude,
                        lng: item.longitude
                    }}
                    title={item.username}
                    icon={{
                        url: Drop, 
                        scaledSize: new window.google.maps.Size(32, 32), // Adjust the size as needed
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(16, 32) // Adjust the anchor point as needed
                      }}
                    />
                ))}
            </GoogleMap>
        </div>
    ) : <>
        <div>Loading...</div>
    </>
  );
}

export default NewMap;
