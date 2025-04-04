import React, { useState } from 'react';
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
  const [modalOpen, setModalOpen] = useState(false);
  const [planoPersonalizado, setPlanoPersonalizado] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();

    const quantidade = event.target.quantidade.value;
    const frequencia = event.target.frequencia.value;
    const tipoCafe = event.target.tipoCafe.value;

    const precoEstimado = calcularPreco(quantidade, frequencia);

    setPlanoPersonalizado({
      quantidade,
      frequencia,
      tipoCafe,
      preco: precoEstimado,
    });
    setModalOpen(true);
  }

  function calcularPreco(quantidade, frequencia) {
    const base = { '250g': 25, '500g': 40, '1kg': 70 };
    const vezes = {
      '1x por mês': 1,
      '2x por mês': 2,
      '1x por semana': 4,
    };

    return `R$ ${(base[quantidade] * vezes[frequencia]).toFixed(2)}/mês`;
  }

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
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <label>
              Quantidade:
              <select name="quantidade">
                <option>250g</option>
                <option>500g</option>
                <option>1kg</option>
              </select>
            </label>

            <label>
              Frequência:
              <select name="frequencia">
                <option>1x por mês</option>
                <option>2x por mês</option>
                <option>1x por semana</option>
              </select>
            </label>

            <label>
              Tipo de café:
              <select name="tipoCafe">
                <option>Arábica</option>
                <option>Blend</option>
                <option>Surpresa do mês</option>
              </select>
            </label>

            <button type="submit">Criar plano</button>
          </form>
        </div>
      </section>

      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Confirme sua assinatura</h3>
            <p>
              <strong>Quantidade:</strong> {planoPersonalizado.quantidade}
            </p>
            <p>
              <strong>Frequência:</strong> {planoPersonalizado.frequencia}
            </p>
            <p>
              <strong>Tipo:</strong> {planoPersonalizado.tipoCafe}
            </p>
            <p>
              <strong>Valor estimado:</strong> {planoPersonalizado.preco}
            </p>
            <button onClick={() => setModalOpen(false)}>Confirmar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default YourPlane;
