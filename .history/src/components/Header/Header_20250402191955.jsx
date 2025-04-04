import React from 'react';

import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>Meu Café</h1>

      <NavBar />
    </header>
  );
};

export default Header;
