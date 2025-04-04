import React from 'react';
import styles from './YourPlane.module.css';
import Banner from '../components/Banner/Banner';

const planos = [
  {
    nome: 'Essencial',
    preco: 'R$ 29/mês',
    descricao: 'Perfeito para quem aprecia um bom café ocasionalmente.',
    detalhes: ['250g por mês', 'Entrega gratuita', 'Café 100% arábica'],
  },
  {
    nome: 'Equilibrado',
    preco: 'R$ 55/mês',
    descricao: 'Ideal para quem começa o dia com uma boa xícara.',
    detalhes: ['500g por mês', '2 variedades por entrega', 'Entrega gratuita'],
  },
  {
    nome: 'Intenso',
    preco: 'R$ 99/mês',
    descricao: 'Para quem vive e respira café todos os dias.',
    detalhes: ['1kg por mês', '3 variedades por entrega', 'Brinde exclusivo'],
  },
];

const YourPlane = () => {
  return (
    <>
      <Banner
        titulo={'Escolha um de nossos planos'}
        imagem={'artesanal'}
        texto={
          'Inicie seus dias com os melhores cafés. Cafés selecionados entregues diretamente na sua casa e no seu horário'
        }
        botao={'Criar plano'}
      />
      <section className={styles.planos}>
        <h2>Nossos Planos</h2>
        <div className={styles.container}>
          {planos.map((plano, index) => (
            <div key={index} className={styles.card}>
              <h3>{plano.nome}</h3>
              <p className={styles.preco}>{plano.preco}</p>
              <p className={styles.descricao}>{plano.descricao}</p>
              <ul>
                {plano.detalhes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button>Assinar</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.planos}>
        <h2>Plano Personalizado</h2>
        <div className={styles.personalizadoCard}>
          <form className={styles.form}>
            <label>
              Quantidade:
              <select>
                <option>250g</option>
                <option>500g</option>
                <option>1kg</option>
              </select>
            </label>

            <label>
              Frequência:
              <select>
                <option>1x por mês</option>
                <option>2x por mês</option>
                <option>1x por semana</option>
              </select>
            </label>

            <label>
              Tipo de café:
              <select>
                <option>Arábica</option>
                <option>Blend</option>
                <option>Surpresa do mês</option>
              </select>
            </label>

            <button>Criar plano</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default YourPlane;
