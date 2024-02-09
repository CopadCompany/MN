import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Testimonios from './components/Testimonios';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {

  return (
    <>
    
    <Router>
      <Navbar/>
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/testimonios' element={<Testimonios/>} />
        <Route path='/banner' element={<Banner />} />
      </Routes>
      <Footer />
    </Router>
   
    </>
  )
}

export default App
