import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to={'/'} end>
              Home
            </NavLink>
            />
          </li>
          <li>Sobre</li>
          <li>Planos</li>
        </ul>
      </BrowserRouter>
    </nav>
  );
};
export default NavBar;
