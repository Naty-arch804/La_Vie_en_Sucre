import React from 'react';
import { useNavigate } from 'react-router-dom';
import promo1 from './assets/Promo1.png';
import promo2 from './assets/Promo2.png';
import promo3 from './assets/Promo3.png';
import CategoryCard from './components/CategoryCard';
import GalletasImage from './assets/galletas.jpg';
import CupcakesImage from './assets/cupcakes.jpg';
import PastelesImage from './assets/pasteles.jpg';
import GelatinasImage from './assets/gelatinas.jpg';
import Product1 from './assets/product1.jpg';
import Product2 from './assets/product2.jpg';
import Product3 from './assets/product3.jpg';
import Footer from './components/Footer';
import aboutUsImage from './assets/aboutUs.jpg';
const theme = {
  primaryColor: '#1a237e', 
  secondaryColor: '#e3f2fd', 
  accentColor: '#ff7043', 
  backgroundColor: '#f5f5f5', 
  textColor: '#212121', 
  subtleTextColor: '#757575', 
};

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container mt-5">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={promo1} className="d-block w-100" alt="Promoción 1" />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img src={promo2} className="d-block w-100" alt="Promoción 2" />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img src={promo3} className="d-block w-100" alt="Promoción 3" />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div style={styles.categoriesContainer}>
        <h1 style={styles.heading}>Explora nuestras categorías</h1>
        <div style={styles.grid}>
          <CategoryCard image={GalletasImage} title="Galletas" link="/galletas" />
          <CategoryCard image={CupcakesImage} title="Cupcakes" link="/cupcakes" />
          <CategoryCard image={PastelesImage} title="Pasteles" link="/pasteles" />
          <CategoryCard image={GelatinasImage} title="Gelatinas" link="/gelatinas" />
        </div>
      </div>


      <div style={styles.bestSellersContainer}>
        <h1 style={styles.heading}>Productos Más Vendidos</h1>
        <div style={styles.grid}>
          <div style={styles.productCard}>
            <img src={Product1} alt="Producto 1" style={styles.productImage} />
            <h3 style={styles.productTitle}>Galletas de Chocolate</h3>
            <p style={styles.productPrice}>$25</p>
            <button style={styles.button} onClick={() => navigate('/producto/1')}>Agregar al Carrito</button>
          </div>
          <div style={styles.productCard}>
            <img src={Product2} alt="Producto 2" style={styles.productImage} />
            <h3 style={styles.productTitle}>Cupcakes de Vainilla</h3>
            <p style={styles.productPrice}>$40</p>
            <button style={styles.button} onClick={() => navigate('/producto/2')}>Agregar al Carrito</button>
          </div>
          <div style={styles.productCard}>
            <img src={Product3} alt="Producto 3" style={styles.productImage} />
            <h3 style={styles.productTitle}>Pastel de Chocolate</h3>
            <p style={styles.productPrice}>$300</p>
            <button style={styles.button} onClick={() => navigate('/producto/3')}>Agregar al Carrito</button>
          </div>
        </div>
      </div>
       <div className="about-us-section my-5">
        <h2 className="text-center">Sobre Nosotros</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={aboutUsImage} alt="Sobre Nosotros" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <p className="lead">
              Somos una repostería dedicada a endulzar tu vida con productos frescos y deliciosos. Nuestra pasión por la repostería nos ha llevado a crear una variedad de productos que incluyen galletas, pasteles, cupcakes, y más. 
              Desde nuestros primeros días, hemos trabajado con ingredientes de calidad para asegurar que cada bocado sea una experiencia única.
            </p>
            <p>
              En <strong>Repostería Deliciosa</strong>, creemos que un postre no solo debe ser sabroso, sino también una obra de arte. Cada uno de nuestros productos está diseñado para satisfacer no solo tu gusto, sino también para deleitar tus ojos.
            </p>
            <p>
              Ven y descubre todo lo que tenemos para ti. ¡Te esperamos con los brazos abiertos y una gran sonrisa!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {

  height: '350px',  
    minHeight: '350px', 

    margin: '15px', 
    backgroundColor: '#fff', 
    borderRadius: '8px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 

  categoriesContainer: {
    padding: '40px',
    textAlign: 'center',
  },
  categoryCard: {
    backgroundColor: 'white', 
    borderRadius: '8px', 
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    margin: '0', 
    padding: '20px',
  },
  categoryTitle: {
    fontFamily: "'Lora', serif", 
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: theme.primaryColor,
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    bestSellersContainer: {
      padding: '40px',
      backgroundColor: theme.backgroundColor,
      textAlign: 'center',
    },
    productCard: {
      border: `1px solid ${theme.subtleTextColor}`,
      borderRadius: '8px',
      padding: '20px',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    productImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    productTitle: {
      fontSize: '18px',
      color: theme.textColor,
    },
    productPrice: {
      fontSize: '16px',
      color: theme.subtleTextColor,
      marginBottom: '10px',
    },

    button: {
      padding: '10px 20px',
      backgroundColor: theme.primaryColor,
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0d1b5e', 
    },
  };
export default LandingPage;