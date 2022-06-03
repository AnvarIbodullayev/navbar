import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      
      
    </>
  );
}

export default App;