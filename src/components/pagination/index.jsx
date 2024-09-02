export function Pagination({ perPage, setPerPage, setPage, listLength }) {
  const formataNumero = (number) => {
    return number < 10 ? `0${number}` : number;
  };
  const options = [10, 20, 30, 40, 50];
  return (
    <div className="flex items-center gap-4">
      <div className="px-2 border-r border-black h-5 flex items-center">
        <h5 className="text-xs sm:text-sm whitespace-nowrap">
          Itens por página:
        </h5>
        <select
          name="pagination"
          id="pagination"
          className="w-10 text-sm"
          value={perPage}
          onChange={(e) => {
            setPage(1);
            setPerPage(e.target.value);
          }}
        >
          {options.map((option) => (
            <option key={option} value={option} className="text-sm">
              {option}
            </option>
          ))}
        </select>
      </div>
      <h5 className="text-xs sm:text-sm whitespace-nowrap">
        Total de {formataNumero(listLength)}
      </h5>
    </div>
  );
}
