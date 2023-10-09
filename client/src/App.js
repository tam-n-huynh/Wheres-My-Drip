import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from './images/logo.png'
//import { ReactComponent as drop } from './images/map-pin.svg';

//Pages
import HomePage from './Components/HomePage';
import MapsPage from './Components/MapsPage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AddWaterPage from './Components/AddWaterPage';
import ProfilePage from './Components/UserProfile';
import NewMap from './Components/NewMap';



function App() {
  const defaultCenter = { lat: 32, lng: -82 }; // Replace with your desired coordinates
  const defaultZoom = 10;

  return (
      <div className="App">
          <Router>
            <div className="nav">
                <img src={logo} className="logo" />
                <Link className="link" to="/home">
                    <button className="menu-button" >Home</button>
                </Link>
                <Link className="link" to="/newmap">
                    <button className="menu-button">Map</button>
                </Link>
                <Link className="link" to="/add">
                    <button className="menu-button">Add Drip</button>
                </Link>
                <Link className="link" to="/profile">
                    <button className="menu-button">Profile</button>
                </Link>
            </div>
        
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/add" element={<AddWaterPage />} />
                <Route path="/maps" element={<MapsPage/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/newmap" element={<NewMap/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
