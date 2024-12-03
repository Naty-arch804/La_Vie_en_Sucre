import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import product1Image from './assets/product1.jpg';
import product2Image from './assets/product2.jpg';
import product3Image from './assets/product9.jpg';
import product4Image from './assets/product4.jpg';
import product5Image from './assets/product5.jpg';
import product6Image from './assets/product6.jpg';
import product7Image from './assets/product7.jpg';
import product8Image from './assets/product8.jpg';
import product9Image from './assets/product9.jpg';
import product10Image from './assets/product10.jpg';
import product11Image from './assets/product11.jpg';
import product12Image from './assets/product12.jpg';
import Footer from './components/Footer';
const products = [
  { id: 1, name: "Galletas de Chocolate", price: "$25", description: "Deliciosas galletas de chocolate con trozos de cacao.", details: "Tamaño: 200g | Ingredientes: Harina, Chocolate, Azúcar...", img: product1Image },
  { id: 2, name: "Cupcakes de Vainilla", price: "$40", description: "Cupcakes esponjosos de vainilla con crema de mantequilla.", details: "Tamaño: 6 unidades | Ingredientes: Harina, Vainilla, Azúcar...", img: product2Image },
  { id: 3, name: "Pastel de Fresa y Crema", price: "$150", description: "Pastel suave de fresa con un toque de crema.", details: "Tamaño: 1.5kg | Ingredientes: Fresa, Harina, Crema...", img: product3Image },
  { id: 4, name: "Gelatina de Frutas Tropicales", price: "$40", description: "Gelatina fresca con frutas tropicales.", details: "Tamaño: 500g | Ingredientes: Frutas, Gelatina, Azúcar...", img: product4Image },
  { id: 5, name: "Galletas de Avena", price: "$55", description: "Galletas de avena, crujientes y deliciosas.", details: "Tamaño: 200g | Ingredientes: Avena, Harina, Azúcar...", img: product5Image },
  { id: 6, name: "Cupcakes de Chocolate", price: "$80", description: "Cupcakes de chocolate con crema de chocolate.", details: "Tamaño: 6 unidades | Ingredientes: Harina, Cacao, Azúcar...", img: product6Image },
  { id: 7, name: "Pastel de Naranja", price: "$120", description: "Pastel de naranja con glaseado de naranja.", details: "Tamaño: 1.5kg | Ingredientes: Naranja, Harina, Crema...", img: product7Image},
  { id: 8, name: "Gelatina de Limón", price: "$45", description: "Gelatina fresca de limón.", details: "Tamaño: 500g | Ingredientes: Limón, Gelatina, Azúcar...", img: product8Image },
  { id: 9, name: "Pastel de Chocolate", price: "$160", description: "Pastel de chocolate con relleno de chocolate.", details: "Tamaño: 2kg | Ingredientes: Cacao, Harina, Azúcar...", img: product9Image },
  { id: 10, name: "Cupcakes de Fresa", price: "$70", description: "Cupcakes de fresa con crema de fresa.", details: "Tamaño: 6 unidades | Ingredientes: Fresa, Harina, Azúcar...", img: product10Image},
  { id: 11, name: "Galletas con Glaseado", price: "$60", description: "Galletas con glaseado de colores.", details: "Tamaño: 200g | Ingredientes: Harina, Azúcar, Glaseado...", img: product11Image },
  { id: 12, name: "Gelatina de Mango", price: "$50", description: "Gelatina de mango fresca.", details: "Tamaño: 500g | Ingredientes: Mango, Gelatina, Azúcar...", img: product12Image},
];

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <>
            <div className="product-detail-container">
                <div className="product-detail">
                    <div className="product-image-container">
                        <img src={product.img} alt={product.name} className="product-image" />
                    </div>
                    <div className="product-info">
                        <h1 className="product-name">{product.name}</h1>
                        <p className="product-price">{product.price}</p>
                        <p className="product-description">{product.description}</p>
                        <h4 className="product-details-title">Detalles del Producto</h4>
                        <p className="product-details">{product.details}</p>
                        <div className="add-to-cart-section">
                            <button className="add-to-cart-btn">Añadir al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> 
        </>
    );
}

export default ProductDetail;