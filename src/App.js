import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home.js';
import './App.css';
import Plans from './components/pages/plans/Plans.js';
import Mapping from './components/pages/map/Mapping.js'
import Signup from './components/pages/signup/Signup.js';
import Login from './components/pages/login/Login.js';
import Profile from './components/pages/profile/Profile.js';
import Packages from './components/pages/packages/Packages.js';
import Weather from './components/pages/Weather/Weather.js';
import ShowSearchResults from './components/pages/plans/showSearchResults.js';
function App() {

  return (
    <>

        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/plans' element={<Plans />} />
            <Route exact path='/map' element={<Mapping />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/packages' element={<Packages />} />
            <Route exact path='/weather' element={<Weather />} />
            <Route exact path='/seachresult' element={<ShowSearchResults /> } />
          </Routes>
        </Router>

    </>
  );
}

export default App;
