import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';

import HomePage from './landing_page/HomePage';
import Navbar from './landing_page/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);
