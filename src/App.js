import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Placetostay from './pages/Placetostay';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/place-to-stay" element={<Placetostay />} exact />
      <Route />
    </Routes>
  </>
);

export default App;
