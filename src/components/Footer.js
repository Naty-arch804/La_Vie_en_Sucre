import React from 'react';
import './Footer.css';
import logo from '../assets/Logo_Repostreria_1.png'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
      <img src={logo} alt="Logo" className="footer-logo" />
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h4>Enlaces útiles</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: contacto@La Vie en Sucre.com</p>
          <p>Teléfono: +123456789</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 La Vie en Sucre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;