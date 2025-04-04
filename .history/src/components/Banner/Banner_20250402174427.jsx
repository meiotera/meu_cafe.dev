import React from 'react';

import styles from './Banner.module.css';

const Banner = ({ titulo, texto, imagem, botao }) => {
  return (
    <div className={styles.containerImg}>
      <div className={styles.containerText}>
        <h2>{titulo}</h2>

        <p>{texto}</p>
        <button className={styles.button}>Criar meu plano</button>
      </div>

      <div className={styles.img}>
        <img src="../../img/artesanal.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
