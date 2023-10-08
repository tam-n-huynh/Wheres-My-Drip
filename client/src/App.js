import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

//Pages
import HomePage from './Components/HomePage';
import MapsPage from './Components/MapsPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/maps" element={<MapsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
