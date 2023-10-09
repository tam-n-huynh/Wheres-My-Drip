import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from './images/logo.png'
import user from './images/user.svg';

//Pages
import HomePage from './Components/HomePage';
import MapPage from './Components/MapPage';
import AddWaterPage from './Components/AddWaterPage';
import ProfilePage from './Components/ProfilePage';


function App() {
  const defaultCenter = { lat: 32, lng: -82 }; // Replace with your desired coordinates
  const defaultZoom = 10;

  return (
      <div className="App">
          <Router>
            <div className="nav reactive-nav">
                <img src={logo} className="logo" />
                <Link className="link" to="/">
                    <button className="menu-button" >Home</button>
                </Link>
                <Link className="link" to="/map">
                    <button className="menu-button">Map</button>
                </Link>
                <Link className="link" to="/add">
                      <button className="menu-button">+ Drip</button>
                </Link>
                <Link className="link" to="/profile">
                      <button className="menu-button profile-button">
                          <span className="profile"><img src={user}/></span>
                      </button>
                </Link>
            </div>
        
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/add" element={<AddWaterPage />} />
                <Route path="/map" element={<MapPage/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
