export function Hero({ titulo, subtitulo, textoBotao, linkBotao, imagemUrl }) {
  return (
    <section className="hero">
      <div className="hero-texto">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
        <a href={linkBotao} className="btn-principal">
          {textoBotao}
        </a>
      </div>
      <div className="hero-imagem">
        <img src={imagemUrl} alt={titulo} />
      </div>
    </section>
  );
}