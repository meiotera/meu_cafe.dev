import React from 'react';

import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.containerImg}>
      <div className={styles.containerText}>
        <h2>Um ótimo café de forma simples</h2>

        <p>
          Inicie seus dias com os melhores cafés. Cafés selecionados entregues
          diretamente na sua casa e no seu horário
        </p>
        <button className={styles.button}>Criar meu plano</button>
      </div>

      <div className={styles.img}>
        <img src="../../img/artesanal.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
