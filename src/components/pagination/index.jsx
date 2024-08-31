export function Pagination({ listLength = 8 }) {
  const formataNumero = (number) => {
    return number < 10 ? `0${number}` : number;
  };
  const options = [10, 20, 30, 40, 50];
  return (
    <div className="flex items-center gap-4">
      <div className="px-2 border-r border-black h-5 flex items-center">
        <span className="text-sm">Itens por página:</span>
        <select name="pagination" id="pagination" className="w-10 text-sm">
          {options.map((option) => (
            <option key={option} value={option} className="text-sm">
              {option}
            </option>
          ))}
        </select>
      </div>
      <span className="text-sm">Total de {formataNumero(listLength)}</span>
    </div>
  );
}
