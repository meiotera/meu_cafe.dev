import React from 'react';
import styles from './Card.module.css';
import clsx from 'clsx';

const Card = ({ titulo, paragrafo, imagem, className }) => {
  return (
    <div className={clsx(styles.cafeCard || className)}>
      <div className={styles.imgContainer}>
        <img src={`../../img/${imagem}.png`} alt={`${imagem}`} />
      </div>
      <div className={styles.texto}>
        <h3>{titulo}</h3>
        <p>{paragrafo}</p>
      </div>
    </div>
  );
};

export default Card;
