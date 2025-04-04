import React from 'react';
import styles from './YourPlane.module.css';

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
  );
};

export default YourPlane;
