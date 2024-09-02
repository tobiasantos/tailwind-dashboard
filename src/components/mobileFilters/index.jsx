import { useState } from "react";
import { DownArrowLogo } from "../../svg/downArrow";
import { FilterLogo } from "../../svg/filter";
import { MultiSelect } from "./../filters/MultiSelect";

export function MobileFilters({
  titleFilter,
  setTitleFilter,
  categoryFilter,
  setCategoryFilter,
  responsibleFilter,
  setResponsibleFilter,
}) {
  const [open, setOpen] = useState(false);
  const contentClassName = open
    ? "mt-4 max-h-[500px] transition-all ease-in-out duration-500"
    : "max-h-0 transition-all ease-in-out duration-500 overflow-hidden";
  return (
    <div className="border rounded-lg shadow-md py-3 px-6">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-between items-center cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <FilterLogo size={24} color={"#6cbab1"} />
          <h3 className="text-2xl font-bold text-[#6cbab1]">Filtros</h3>
        </div>
        <div
          className={`text-[#6cbab1] transition-all ease-in-out duration-500 ${
            open ? "transform rotate-180" : ""
          }`}
        >
          <DownArrowLogo size={24} />
        </div>
      </div>
      <div className={contentClassName}>
        <div className="max-w-full flex flex-col lg:flex-row gap-2 items-start">
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
        <div
          className="cursor-pointer mt-4"
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
    </div>
  );
}
