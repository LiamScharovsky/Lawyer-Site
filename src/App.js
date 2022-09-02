import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Lawyers from './components/pages/Lawyers';

function App() {
  return (
    
    <Router>
      <Navbar/>
        <Routes>
          <Route path = "/" element = { <Home/> } />
          <Route path = '/contactenos' element = { <Contact/> }/>
          <Route path ='/servicios' element = { <Services/> } />
          <Route path ='/abogados' element = { <Lawyers/> } />
        </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
