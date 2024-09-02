import { FilterLogo } from "../../svg/filter";
import { MultiSelect } from "./MultiSelect";

export function Filters({
  titleFilter,
  setTitleFilter,
  categoryFilter,
  setCategoryFilter,
  responsibleFilter,
  setResponsibleFilter,
}) {
  return (
    <div className="border rounded-lg shadow-md py-3 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 mb-4">
          <FilterLogo size={24} color={"#6cbab1"} />
          <h3 className="text-2xl font-bold text-[#6cbab1]">Filtros</h3>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setTitleFilter("");
            setCategoryFilter([]);
            setResponsibleFilter([]);
          }}
        >
          <span className="text-gray-500 underline text-sm">
            Limpar filtros
          </span>
        </div>
      </div>
      <div className="max-w-full flex gap-12 items-start">
        <div className="flex flex-col gap-1 w-full">
          <span className="text-sm">Título</span>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="Insira o título"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <span className="text-sm">Categorias</span>
          <MultiSelect
            items={[
              "Planejamento Estratégico",
              "Marketing",
              "Vendas",
              "Desenvolvimento de Produto",
              "Recursos Humanos",
            ]}
            placeholder="Selecione categorias"
            selectedItems={categoryFilter}
            setSelectedItems={setCategoryFilter}
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <span className="text-sm">Responsáveis</span>
          <MultiSelect
            items={[
              "Ana",
              "Carlos",
              "Fernanda",
              "José",
              "Paulo",
              "Juliana",
              "Ricardo",
              "Lucia",
              "Roberto",
            ]}
            placeholder="Selecione responsáveis"
            selectedItems={responsibleFilter}
            setSelectedItems={setResponsibleFilter}
          />
        </div>
      </div>
    </div>
  );
}
