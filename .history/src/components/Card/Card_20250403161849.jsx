import React from 'react';
import styles from './Card.module.css';
import clsx from 'clsx';

const Card = ({ titulo, paragrafo, imagem, className, circular }) => {
  return (
    <div className={clsx(className || styles.cafeCard)}>
      <div className={styles.imgContainer(circular && styles.circular)}>
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
