import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import About from './pages/about';
import Skills from './pages/skills';
import Home from './pages';
import Footer from './pages/footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}  />
        <Route path='/resume' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
