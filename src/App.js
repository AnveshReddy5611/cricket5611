import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';

import Cricket from './cricket';
import Match from './indvspak';
import Bet from './bet';


function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="cricket" element={<Cricket />}></Route>
          <Route path="indvspak" element={<Match/>}></Route>
          <Route path="bet" element={<Bet/>}></Route>
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
