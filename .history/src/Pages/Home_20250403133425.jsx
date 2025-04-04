import React from 'react';
import Main from '../components/Main/Main';
import Banner from '../components/Banner/Banner';

import styles from './Home.module.css';

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

      <section className={styles.collection}>
        <div className={styles.titulo}>
          <h2>Nossos cafés</h2>
        </div>

        <div className="conllectionContainer">
          <div className="cafe">
            <h3>Café Serra Alta</h3>
            <p>
              Inspirado em regiões montanhosas, perfeito pra remeter a grãos
              especiais cultivados em altitudes elevadas.
            </p>
          </div>

          <div className="cafe">
            <h3>Encantos do Grão</h3>
            <p>
              Nome poético que destaca o carinho no preparo e a qualidade do
              café.
            </p>
          </div>

          <div className="cafe">
            <h3>Semete & Aroma</h3>
            <p>
              Elegante e moderno, une a origem (semente) ao resultado (aroma.)
            </p>
          </div>

          <div className="cafe">
            <h3>Terra & Torra</h3>
            <p>
              Rústico e direto, transmite a conexão com o solo e o processo
              artesanal de torra.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
