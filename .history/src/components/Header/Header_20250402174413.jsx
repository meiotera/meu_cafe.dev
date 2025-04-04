import React from 'react';

import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import Banner from '../Banner/Banner';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="menu">
        <h1>Meu Café</h1>

        <NavBar />

        <Banner
          titulo={'Um ótimo café de forma simples'}
          texto={
            'Inicie seus dias com os melhores cafés. Cafés selecionados entregues diretamente na sua casa e no seu horário'
          }
        />
      </div>
    </header>
  );
};

export default Header;
