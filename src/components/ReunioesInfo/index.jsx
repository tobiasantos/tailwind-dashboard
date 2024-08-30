export function ReunioesInfo() {
  return (
    <div className="flex flex-wrap lg:max-w-full sm:flex-row flex-col">
      <div className="xl:w-fit sm:w-[50%] flex flex-col grow px-8 py-4 border">
        <h5>Total de reuniões</h5>
        <span className="text-4xl font-bold text-[#6FBFB6]">405</span>
      </div>
      <div className="xl:w-fit sm:w-[50%] flex flex-col grow px-8 py-4 border">
        <h5>Categoria mais frequente</h5>
        <span className="text-4xl font-bold text-[#6FBFB6]">Vendas</span>
      </div>
      <div className="xl:w-fit sm:w-[50%] flex flex-col grow px-8 py-4 border">
        <h5>Média de duração</h5>
        <span className="text-4xl font-bold text-[#6FBFB6]">54m</span>
      </div>
      <div className="xl:w-fit sm:w-[50%] flex flex-col grow px-8 py-4 border">
        <h5>Duração total das reuniões</h5>
        <span className="text-4xl font-bold text-[#6FBFB6]">102h 51m</span>
      </div>
    </div>
  );
}
