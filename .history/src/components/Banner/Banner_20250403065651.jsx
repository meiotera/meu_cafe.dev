import React from 'react';

import styles from './Banner.module.css';

const Banner = ({ titulo, texto, botao }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.containerText}>
        <h2>{titulo}</h2>

        <p>{texto}</p>
        {botao && <button className={styles.button}>{botao}</button>}
      </div>
    </div>
  );
};

export default Banner;
