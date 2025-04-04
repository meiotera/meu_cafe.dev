import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/sobre'}>Sobre</NavLink>
          </li>
          <li>Planos</li>
        </ul>
      </BrowserRouter>
    </nav>
  );
};
export default NavBar;
