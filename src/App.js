import React from 'react';
import Header from './Header';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Carrito from './Carrito';
import './App.css';
import Catalogo from './Catalogo';
import ProductDetail from './ProductDetail';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    
  );
}

export default App;