import React from 'react';

import styles from './Banner.module.css';

const Banner = ({ titulo, texto, imagem, botao }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.containerText}>
        <h2>{titulo}</h2>

        <p>{texto}</p>
        {botao && <button className={styles.button}>{botao}</button>}
      </div>

      <div className={styles.img}>
        <img src={`../../img/${imagem}.png`} alt="" />
      </div>
    </div>
  );
};

export default Banner;
