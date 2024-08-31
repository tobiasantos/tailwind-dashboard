import "../../styles/cardItem.css";

export function ReunioesInfo() {
  return (
    <div className="grid grid-cols-2 grid-flow-row gap-4">
      <div className="card-item">
        <h5>Total de reuniões</h5>
        <span>405</span>
      </div>
      <div className="card-item">
        <h5>Categoria mais frequente</h5>
        <span>Vendas</span>
      </div>
      <div className="card-item">
        <h5>Média de duração</h5>
        <span>54m</span>
      </div>
      <div className="card-item">
        <h5>Duração total das reuniões</h5>
        <span>102h 51m</span>
      </div>
    </div>
  );
}
