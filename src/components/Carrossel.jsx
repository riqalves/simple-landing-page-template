import { useState } from 'react';

export function Carrossel({ slides }) {
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Evita erro na tela se o aluno deixar a lista vazia
  if (!slides || slides.length === 0) return null;

  function proximoSlide() {
    setIndiceAtual((anterior) => (anterior + 1) % slides.length);
  }

  function slideAnterior() {
    setIndiceAtual((anterior) => (anterior - 1 + slides.length) % slides.length);
  }

  const slideAtivo = slides[indiceAtual];

  return (
    <section className="secao-carrossel">
      <div className="carrossel-container">
        <button
          className="carrossel-btn esquerda"
          onClick={slideAnterior}
          aria-label="Slide anterior"
        >
          &#10094;
        </button>

        <div className="carrossel-slide">
          <img src={slideAtivo.imagem} alt={slideAtivo.titulo} />
          <div className="carrossel-legenda">
            <h3>{slideAtivo.titulo}</h3>
            <p>{slideAtivo.descricao}</p>
          </div>
        </div>

        <button
          className="carrossel-btn direita"
          onClick={proximoSlide}
          aria-label="Próximo slide"
        >
          &#10095;
        </button>
      </div>

      {/* Bolinhas indicadoras */}
      <div className="carrossel-indicadores">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`bolinha ${index === indiceAtual ? 'ativa' : ''}`}
            onClick={() => setIndiceAtual(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}