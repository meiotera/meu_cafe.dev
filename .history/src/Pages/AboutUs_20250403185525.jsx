import React from 'react';
import Banner from '../components/Banner/Banner';

const AboutUs = () => {
  return (
    <Banner
      titulo={'Quem Somos | Nossa História'}
      imagem={'artesanal'}
      texto={
        'Somos apaixonados por café e por tudo o que ele representa: pausa, aconchego, energia e conexão.'
      }
      botao={'Criar plano'}
    />
  );
};

export default AboutUs;
