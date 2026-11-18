export function Card({ titulo, descricao, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}