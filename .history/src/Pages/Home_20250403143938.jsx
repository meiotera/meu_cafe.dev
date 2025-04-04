import React from 'react';
import Banner from '../components/Banner/Banner';

import styles from './Home.module.css';
import Card from '../components/Card/Card';

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

        <div className={styles.collectionCards}>
          <Card
            titulo={'Café Serra Alta'}
            paragrafo={
              'Grãos cultivados em altas montanhas, com sabor rico e complexo.'
            }
            imagem={'serraalta'}
          />

          <Card
            titulo={'Encantos do Grão'}
            paragrafo={
              'Um café delicado e aromático, com doçura natural e corpo suave.'
            }
            imagem={'encantos'}
          />

          <Card
            titulo={'Semente & Aroma'}
            paragrafo={
              'Notas intesas e acidez brilhante, de grão selecionados a mão.'
            }
            imagem={'sementeearoma'}
          />

          <Card
            titulo={'Terra & Torra'}
            paragrafo={
              ' Perfil encorpado e tostado, refletindo a origem terroir do grão.'
            }
            imagem={'terraetorra'}
          />
        </div>
      </section>

      <section className={styles.porque}>
        <div className={styles.descricao}>
          <h2>Por que nos escolher?</h2>

          <p>
            Na nossa jornada pelo café perfeito, cada grão é escolhido a dedo,
            torrado com precisão e entregue com carinho. Somos apaixonados por
            oferecer experiências únicas — do aroma envolvente ao sabor que
            aquece o coração.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
