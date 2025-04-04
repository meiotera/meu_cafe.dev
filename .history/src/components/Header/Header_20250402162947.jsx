import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Meu Café</h1>

      <div className={styles.containerImg}>
        <h2>Café da manhã</h2>
      </div>
    </header>
  );
};

export default Header;
