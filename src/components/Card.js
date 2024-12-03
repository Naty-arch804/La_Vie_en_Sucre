import React from 'react';
import pastelImage from '../assets/pastel.jpg'; 

function Card({ title, description, image }) {
  return (
    <div style={styles.card}>
      <img src={image || pastelImage} alt={title} style={styles.image} /> 
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ffc107',
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    width: '200px',
    textAlign: 'center',
    backgroundColor: '#fff8e1',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
};

export default Card;