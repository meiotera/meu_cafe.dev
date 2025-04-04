import React from 'react';
import styles from './Card.module.css';

const Card = ({}) => {
  return (
    <div className={styles.cafeCard}>
      <div className={styles.imgContainer}>
        <img src="../../img/serraalta.png" alt="" srcset="" />
      </div>
      <div className={styles.texto}>
        <h3>Café Serra Alta</h3>
        <p>Grãos cultivados em altas montanhas, com sabor rico e complexo.</p>
      </div>
    </div>
  );
};

export default Card;
