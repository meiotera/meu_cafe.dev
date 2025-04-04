import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import YourPlane from './Pages/YourPlane';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<AboutUs />} />
            <Route path="planos" element={<YourPlane />} />
          </Routes>
        </Main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
