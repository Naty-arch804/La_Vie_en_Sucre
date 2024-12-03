import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/Logo_Repostreria.png';
import SearchIcon from './assets/search-icon.png';
import ProfileIcon from './assets/profile-icon.png';
import CartIcon from './assets/cart-icon.png';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src={Logo} alt="Logo" style={styles.logo} />
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/Catalogo" style={styles.link}>Catalogo</Link>
        <Link to="/sobre-nosotros" style={styles.link}>Sobre Nosotros</Link>
      </nav>
      <div style={styles.icons}>
        <Link to="/buscar" style={styles.icon}>
          <img src={SearchIcon} alt="Buscar" style={styles.iconImage} />
        </Link>
        <Link to="/perfil" style={styles.icon}>
          <img src={ProfileIcon} alt="Perfil" style={styles.iconImage} />
        </Link>
        <Link to="/carrito" style={styles.icon}>
          <img src={CartIcon} alt="Carrito" style={styles.iconImage} />
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    height: '60px',
  },
  nav: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: 'color 0.3s',
  },
  icons: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
  },
  iconImage: {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  },
};

export default Header;