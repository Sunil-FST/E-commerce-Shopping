import React from 'react';
import styles from './Card.module.css';

const Card = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image_url} alt={product.title} className={styles.image} />
      <div className={styles.details}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>Price: {product.price}</p>
        <p className={styles.model}>Model Number: {product.model_number}</p>
        <p className={styles.rating}>{product.rating}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default Card;
