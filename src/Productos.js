import React from 'react';
import Card from './components/Card';
import pastelImage from './assets/pastel.jpg';
import galletaImage from './assets/galletas.jpg';
import cupcakeImage from './assets/cupcake.jpg';

const productos = [
  { id: 1, title: 'Pasteles', description: 'Deliciosos pasteles.', image: pastelImage },
  { id: 2, title: 'Galletas', description: 'Galletas crujientes.', image: galletaImage },
  { id: 3, title: 'Cupcakes', description: 'Cupcakes personalizados.', image: cupcakeImage },
];

function Productos({ agregarAlCarrito }) {
  return (
    <div style={styles.container}>
      <h1>Productos</h1>
      <div style={styles.cardsContainer}>
        {productos.map((producto) => (
          <Card
            key={producto.id}
            title={producto.title}
            description={producto.description}
            image={producto.image}
            onClick={() => agregarAlCarrito(producto)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default Productos;