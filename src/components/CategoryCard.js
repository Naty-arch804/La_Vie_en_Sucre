import React from 'react';

function CategoryCard({ image, title, link }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
    </div>
  );
}

const styles = {
  card: {
    width: '200px',
    textAlign: 'center',
    margin: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  title: {
    margin: '10px 0',
    fontSize: '18px',
    color: '#333',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: '14px',
    marginTop: '10px',
    display: 'inline-block',
  },
};

export default CategoryCard;