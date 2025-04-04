import React from 'react';
import Main from '../components/Main/Main';
import Banner from '../components/Banner/Banner';

const Home = () => {
  return (
    <Banner
      titulo={'Um ótimo café de forma simples'}
      imagem={'artesanal'}
      texto={
        'Inicie seus dias com os melhores cafés. Cafés selecionados entregues diretamente na sua casa e no seu horário'
      }
      botao={'Criar plano'}
    />
  );
};

export default Home;
