import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from './images/logo.png'
import user from './images/user.svg';

//Pages
import HomePage from './Components/HomePage';
import MapsPage from './Components/MapsPage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AddWaterPage from './Components/AddWaterPage';
import ProfilePage from './Components/UserProfile';



function App() {
  const defaultCenter = { lat: 32, lng: -82 }; // Replace with your desired coordinates
  const defaultZoom = 10;

  return (
      <div className="App">
          <Router>
            <div className="nav reactive-nav">
                <img src={logo} className="logo" />
                <Link className="link" to="/home">
                    <button className="menu-button" >Home</button>
                </Link>
                <Link className="link" to="/maps">
                    <button className="menu-button">Drip Map</button>
                </Link>
                <Link className="link" to="/profile">
                      <button className="menu-button profile-button">
                          <span className="profile"><img src={user}/></span>
                      </button>
                </Link>
            </div>
        
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/add" element={<AddWaterPage />} />
                <Route path="/map" element={<MapsPage/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
