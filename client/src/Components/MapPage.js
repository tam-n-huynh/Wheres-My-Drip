import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, MarkerF, Marker, useLoadScript } from '@react-google-maps/api';
import customMapStyle from './customMapStyle.json'; // Custom Map Style
import {firebase, db} from '../firebase';
import "./MapsPage.css";


// Replace with your own Google Maps API key
const apiKey = "process.env.GOOGLE_CLOUD_API_KEY";

const markersTest = [
    { latitude: 37.7749, longitude: -122.4194, title: 'San Francisco' },
    { latitude: 34.0522, longitude: -118.2437, title: 'Los Angeles' },
    // Add more markers as needed
];

const MapsPage = ({ center, zoom }) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [username, SetUsername] = useState("noUser");

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("effect for getting all data ran")
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

    useEffect(() => {
        console.log(data); // This will log the updated data
      }, [data]);

    const handleSubmit = () => {
        db.collection("Markers").add({
            username: username,
            latitude: -50,
            longitude: 60
        })
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

    function setCoordinates(lng, lat) {
        setLatitude(lat);
        setLongitude(lng);
    }

    function logData() {
        console.log(data);
    }

    return (
        <div className="MapsPage">
            <div className="Add-Drip-Buttons">
                <button className="Drip-Button">Add Drip</button>
                <button className="Drip-Button">Home</button>
            </div>
            <LoadScript googleMapsApiKey={apiKey} version="beta" libraries={["marker"]}>
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100vh' }}
                    center={{
                        lat: +latitude,
                        lng: +longitude
                    }}
                    zoom={zoom}

                    options={{ styles: customMapStyle }}
                >
                    {/* Add markers or other components here */}
                    {data.map((item, index) => (
                        <Marker
                            key={index}
                            position={{
                            lat: item.latitude, 
                            lng: item.longitude // Use "longitude" instead of "latitude"
                            }}
                            title={"tempTitle"}
                        />
                    ))}
                </GoogleMap>
            </LoadScript>
            {/*<button onClick={handleSubmit}>Send to DB</button>*/}
        </div>
    );
};

export default MapsPage;