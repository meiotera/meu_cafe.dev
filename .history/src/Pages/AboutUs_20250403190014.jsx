import React from 'react';
import Banner from '../components/Banner/Banner';

import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <>
      <Banner
        titulo={'Quem Somos | Nossa História'}
        imagem={'artesanal'}
        texto={
          'Somos apaixonados por café e por tudo o que ele representa: pausa, aconchego, energia e conexão. Nossa missão é levar cafés artesanais de alta qualidade até você, valorizando pequenos produtores e práticas sustentáveis. Cada grão é cuidadosamente selecionado, torrado com dedicação e enviado com carinho, para que cada xícara conte uma história.'
        }
      />

      <section>
        <div className={styles.section}>
          <h2>Nossa Origem</h2>
          <p>
            Nosso projeto nasceu do amor por cafés especiais e do desejo de
            oferecer uma experiência única a quem valoriza sabor e qualidade.
            Tudo começou em uma pequena cozinha, testando torra por torra, até
            encontrarmos o equilíbrio perfeito entre aroma, corpo e doçura.
            Hoje, trabalhamos com produtores que compartilham dos mesmos valores
            e entregamos cafés frescos direto na sua casa.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
