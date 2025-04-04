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

        <div className="collectionContainer">
          <div className="cafe">
            <div className="img">
              <img src="../../img/serraalta.png" alt="" srcset="" />
            </div>
            <div className="texto">
              <h3>Café Serra Alta</h3>
              <p>
                Grãos cultivados em altas montanhas, com sabor rico e complexo.
              </p>
            </div>
          </div>

          <div className="cafe">
            <div className="img">
              <img src="../../img/encantos.png" alt="" srcset="" />
            </div>
            <h3>Encantos do Grão</h3>
            <p>
              Um café delicado e aromático, com doçura natural e corpo suave.
            </p>
          </div>

          <div className="cafe">
            <div className="img">
              <img src="../../img/sementeearoma.png" alt="" srcset="" />
            </div>
            <h3>Semete & Aroma</h3>
            <p>Notas intesas e acidez brilhante, de grão selecionados a mão.</p>
          </div>

          <div className="cafe">
            <div className="img">
              <img src="../../img/terraetorra.png" alt="" srcset="" />
            </div>
            <h3>Terra & Torra</h3>
            <p>
              Perfil encorpado e tostado, refletindo a origem terroir do grão.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
