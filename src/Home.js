import React from 'react';
import Card from './components/Card';
import pastelImage from './assets/pastel.jpg';
import galletaImage from './assets/galletas.jpg';
import cupcakeImage from './assets/cupcake.jpg';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Bienvenidos a la Tienda de Postres</h1>
      <p>Descubre nuestros deliciosos postres artesanales, hechos con amor.</p>
      <div style={styles.cardsContainer}>
        <Card 
          title="Pasteles" 
          description="Pasteles frescos y personalizados para cada ocasión." 
          image={pastelImage}
        />
        <Card 
          title="Galletas" 
          description="Galletas crocantes y suaves, perfectas para acompañar el café." 
          image={galletaImage}
        />
        <Card 
          title="Cupcakes" 
          description="Cupcakes decorados al detalle, ideales para compartir." 
          image={cupcakeImage}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#ffe5b4',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
};

export default Home;