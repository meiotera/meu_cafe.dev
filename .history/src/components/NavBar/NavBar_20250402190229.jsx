import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/sobre'}>Sobre</NavLink>
        </li>
        <li>
          <NavLink> Planos</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
