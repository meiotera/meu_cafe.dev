import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <BrowserRouter>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Planos</li>
        </ul>
      </BrowserRouter>
    </nav>
  );
};
export default NavBar;
