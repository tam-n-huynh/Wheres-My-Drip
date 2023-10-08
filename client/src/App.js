import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

//Pages
import HomePage from './Components/HomePage';
import MapsPage from './Components/MapsPage';


function App() {
  const defaultCenter = { lat: 32, lng: -82 }; // Replace with your desired coordinates
  const defaultZoom = 10;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/maps" element={<MapsPage center={defaultCenter} zoom={defaultZoom}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
