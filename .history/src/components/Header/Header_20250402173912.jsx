import React from 'react';

import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="menu">
        <h1>Meu Café</h1>

        <NavBar />
      </div>
    </header>
  );
};

export default Header;
