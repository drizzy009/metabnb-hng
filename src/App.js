import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Placetostay from './pages/Placetostay';
import Navbar from './components/Navbar';
import { navLinks } from './constants/index';


function App() {
  
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/place-to-stay' element={< Placetostay />} exact />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
