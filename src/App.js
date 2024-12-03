import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Carrito from './Carrito';
import './App.css';
import Catalogo from './Catalogo';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
    
  );
}

export default App;