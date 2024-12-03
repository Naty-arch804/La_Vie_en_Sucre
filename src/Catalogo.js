import React from 'react';
import './Catalogo.css';
import { Link } from 'react-router-dom';
import categoryGalletas from './assets/Galletas_1.jpg';
import categoryCupcakes from './assets/Cupcakes_1.jpg';
import categoryPasteles from './assets/Pasteles_1.jpg';
import categoryGelatinas from './assets/Galletas_1.jpg';
import product1Image from './assets/product1.jpg';
import product2Image from './assets/product2.jpg';
import product3Image from './assets/product9.jpg';
import product4Image from './assets/product4.jpg';
import product5Image from './assets/product5.jpg';
import product6Image from './assets/product6.jpg';
import product7Image from './assets/product7.jpg';
import product8Image from './assets/product8.jpg';
import product9Image from './assets/product3.jpg';
import product10Image from './assets/product10.jpg';
import product11Image from './assets/product11.jpg';
import product12Image from './assets/product12.jpg';

import Footer from './components/Footer';

function Catalogo() {
  return (
    <div className="container mt-5">
      <div id="categoryCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={categoryGalletas} className="d-block w-100" alt="Galletas" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Galletas</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={categoryCupcakes} className="d-block w-100" alt="Cupcakes" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cupcakes</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={categoryPasteles} className="d-block w-100" alt="Pasteles" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Pasteles</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={categoryGelatinas} className="d-block w-100" alt="Gelatinas" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Gelatinas</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#categoryCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#categoryCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <h1 className="text-center my-4">Catálogo de Productos</h1>
      
      <div className="row">
        {[ 
          { id: 1, name: "Galletas de Chocolate", price: "$25", img: product1Image },
          { id: 2, name: "Cupcakes de Vainilla", price: "$40", img: product2Image },
          { id: 3, name: "Pastel de Fresa y Crema", price: "$150", img: product3Image },
          { id: 4, name: "Gelatina de Frutas Tropicales", price: "$40", img: product4Image },
          { id: 5, name: "Galletas de Avena", price: "$55", img: product5Image },
          { id: 6, name: "Cupcakes de Chocolate", price: "$80", img: product6Image },
          { id: 7, name: "Pastel de Naranja", price: "$120", img: product7Image },
          { id: 8, name: "Gelatina de Limón", price: "$45", img: product8Image },
          { id: 9, name: "Pastel de Chocolate", price: "$160", img: product9Image },
          { id: 10, name: "Cupcakes de Fresa", price: "$70", img: product10Image },
          { id: 11, name: "Galletas con Glaseado", price: "$60", img: product11Image },
          { id: 12, name: "Gelatina de Mango", price: "$50", img: product12Image },
        ].map(product => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card">
                <img src={product.img} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <div className="d-flex justify-content-center">
                    <Link 
                      to={`/producto/${product.id}`} 
                      className="btn"
                      style={{
                        backgroundColor: '#1a237e', 
                        color: 'white', 
                        width: '100%', 
                        padding: '10px', 
                        textAlign: 'center'
                      }}
                    >
                      Agregar al Carrito
                      </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}


export default Catalogo;