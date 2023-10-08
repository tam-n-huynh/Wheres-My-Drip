import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

//Pages
import HomePage from './Components/HomePage';
import MapsPage from './Components/MapsPage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/maps" element={<MapsPage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
