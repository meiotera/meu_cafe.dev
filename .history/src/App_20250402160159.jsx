import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <Header />

      <Main>
        <BrowserRouter></BrowserRouter>
      </Main>
    </>
  );
}

export default App;
