import React from 'react';
import styles from './Card.module.css';

const Card = ({ titulo, paragrafo, imagem }) => {
  return (
    <div className={styles.cafeCard}>
      <div className={styles.imgContainer}>
        <img src={`../../img/${imagem}.png`} alt={`${imagem}`} srcset="" />
      </div>
      <div className={styles.texto}>
        <h3>{titulo}</h3>
        <p>{paragrafo}</p>
      </div>
    </div>
  );
};

export default Card;
