import React from 'react';
import Main from '../components/Main/Main';
import Banner from '../components/Banner/Banner';

const Home = () => {
  return (
    <>
      <Banner
        titulo={'Um ótimo café de forma simples'}
        imagem={'artesanal'}
        texto={
          'Inicie seus dias com os melhores cafés. Cafés selecionados entregues diretamente na sua casa e no seu horário'
        }
        botao={'Criar plano'}
      />

      <section className="collection">
        <div className="titulo">
          <h2>Nossos cafés</h2>
        </div>

        <div className="conllectionContainer"></div>
      </section>
    </>
  );
};

export default Home;
