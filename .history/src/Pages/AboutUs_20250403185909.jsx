import React from 'react';
import Banner from '../components/Banner/Banner';

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

        <div className={styles.section}>
          <h2>Nosso Propósito</h2>
          <p>
            Acreditamos que o café pode transformar momentos e conectar pessoas.
            Por isso, queremos mais do que vender café — queremos fazer parte da
            sua rotina, do seu ritual, da sua pausa merecida. Cuidamos de cada
            detalhe, da fazenda até a sua xícara, para garantir que cada gole
            seja uma experiência memorável.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Como Funciona</h2>
          <p>
            Escolha seu café favorito, monte seu plano e receba em casa com a
            frequência que preferir. Sem complicações, com muito sabor e
            qualidade em cada entrega.
          </p>
        </div>

        <div className={styles.frase}>
          <p>
            <em>
              “Porque café bom é aquele que aquece o corpo, acalma a mente e
              alimenta a alma.”
            </em>
          </p>
        </div>
      </div>
    </section>
        </>
  );
};

export default AboutUs;
