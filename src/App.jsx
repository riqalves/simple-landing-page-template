import { Hero } from './components/Hero';
import { Card } from './components/Card';
import { Carrossel } from './components/Carrossel';
import { VideoDestaque } from './components/VideoDestaque';

export function App() {
  const slidesDestaque = [
    {
      imagem: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&auto=format&fit=crop',
      titulo: 'Slide 1: Destaque Principal',
      descricao: 'Troque esta imagem e escreva uma descrição chamativa sobre o seu projeto.'
    },
    {
      imagem: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop',
      titulo: 'Slide 2: Tecnologia e Inovação',
      descricao: 'Você pode adicionar quantos slides quiser copiando este bloco na lista.'
    },
    {
      imagem: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop',
      titulo: 'Slide 3: Pronto para Publicar',
      descricao: 'Funciona tanto com links da internet quanto com imagens da pasta public.'
    }
  ];

  return (
    <div className="container">
      {/* 1. BARRA DE NAVEGAÇÃO */}
      <header className="navbar">
        <span className="logo">🚀 MeuProjeto</span>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#galeria" style={{ color: 'inherit', textDecoration: 'none' }}>
            Galeria
          </a>
          <a href="#destaques" style={{ color: 'inherit', textDecoration: 'none' }}>
            Destaques
          </a>
          <a href="#video" style={{ color: 'inherit', textDecoration: 'none' }}>
            Vídeo
          </a>
        </nav>
      </header>

      <main>
        {/* 2. SEÇÃO PRINCIPAL (HERO) */}
        <Hero
          titulo="Transforme suas ideias em realidade"
          subtitulo="Este é um template em React. Altere este texto, troque a imagem ao lado e personalize as cores no arquivo index.css."
          textoBotao="Saiba Mais"
          linkBotao="#destaques"
          imagemUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop"
        />

        {/* 3. CARROSSEL */}
        <div id="galeria">
          <h2 className="secao-titulo">Galeria em Destaque</h2>
          <Carrossel slides={slidesDestaque} />
        </div>

        {/* 4. SEÇÃO DE CARDS REUTILIZÁVEIS */}
        <section id="destaques" className="secao-cards">
          <h2 className="secao-titulo">Principais Recursos</h2>
          <div className="grid-cards">
            <Card
              titulo="Componente 1"
              descricao="Você pode duplicar este Card quantas vezes quiser passando novas propriedades."
              imagem="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop"
            />
            <Card
              titulo="Componente 2"
              descricao="Troque o link da imagem por uma foto da internet ou da pasta public."
              imagem="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop"
            />
            <Card
              titulo="Componente 3"
              descricao="Crie seus próprios componentes na pasta components e adicione nesta página."
              imagem="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop"
            />
          </div>
        </section>

        {/* 5. SEÇÃO FINAL DE VÍDEO OU GIF */}
        {/* 👉 Altere o "tipo" para 'gif', 'video' ou 'youtube' e troque a "url" */}
        <VideoDestaque
          titulo="Veja em Ação"
          descricao="Substitua esta mídia por um GIF divertido, um vídeo da pasta public ou um trailer do YouTube."
          tipo="gif"
          url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW51Z3R6c3B4Z3V5ZzR5ZzR5ZzR5ZzR5ZzR5ZzR5ZzR5ZzR5/qgQUggAC3Pfv687qPC/giphy.gif"
        />

        {/* EXEMPLOS DE COMO OS ALUNOS PODEM TROCAR:
        
        Para vídeo MP4 na pasta public/videos/meu-video.mp4:
        <VideoDestaque titulo="Meu Vídeo" tipo="video" url="/videos/meu-video.mp4" />

        Para vídeo do YouTube (use o link de incorporar /embed/):
        <VideoDestaque titulo="Trailer Oficial" tipo="youtube" url="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        */}
      </main>

      {/* 6. RODAPÉ */}
      <footer className="footer">
        <p>Feito com React por [Seu Nome] • 2026</p>
      </footer>
    </div>
  );
}

export default App;