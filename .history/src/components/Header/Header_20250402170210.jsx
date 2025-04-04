import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Meu Café</h1>

      <div className={styles.containerImg}>
        <div className={styles.containerText}>
          <h2>Um ótimo café de forma simples</h2>

          <p>
            Inicie seus dias com os melhores cafés. Cafés selecionados entregues
            diretamente na sua casa e no seu horário
          </p>
        </div>

        <button className={styles.button}>Criar meu plano</button>
      </div>
    </header>
  );
};

export default Header;
