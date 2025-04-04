import React from 'react';
import Banner from '../components/Banner/Banner';

const AboutUs = () => {
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

export default AboutUs;
