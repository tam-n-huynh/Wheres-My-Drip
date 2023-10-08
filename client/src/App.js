import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import logo from './images/logo.png'
//import { ReactComponent as drop } from './images/map-pin.svg';

//Pages
import HomePage from './Components/HomePage';
import MapPage from './Components/MapPage';
import AddWaterPage from './Components/AddWaterPage';
import ProfilePage from './Components/ProfilePage';



function App() {
  return (
      <div className="App">
          <Router>
            <div className="nav">
                <img src={logo} className="logo" />
                <Link className="link" to="/">
                    <button className="menu-button" >Home</button>
                </Link>
                <Link className="link" to="/map">
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
