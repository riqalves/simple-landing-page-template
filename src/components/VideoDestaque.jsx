export function VideoDestaque({ titulo, descricao, url, tipo = 'video' }) {
  return (
    <section id="video" className="secao-video">
      <h2 className="secao-titulo">{titulo}</h2>
      {descricao && <p className="video-descricao">{descricao}</p>}

      <div className="video-moldura">
        {/* Opção 1: GIF animado */}
        {tipo === 'gif' && (
          <img src={url} alt={titulo} className="midia-conteudo" />
        )}

        {/* Opção 2: Arquivo de vídeo (.mp4, .webm) */}
        {tipo === 'video' && (
          <video
            src={url}
            className="midia-conteudo"
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        )}

        {/* Opção 3: Vídeo do YouTube */}
        {tipo === 'youtube' && (
          <iframe
            className="midia-youtube"
            src={url}
            title={titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
}