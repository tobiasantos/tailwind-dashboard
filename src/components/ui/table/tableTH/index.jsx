import { SortIcon } from "../../../../svg/sort";

export function TableTH({ text, width, duracaoSort = "", setDuracaoSort }) {
  if (!setDuracaoSort) {
    return (
      <th
        className={`w-[${
          width ? width + "%" : "auto"
        }] font-medium text-left px-6`}
      >
        {text}
      </th>
    );
  } else {
    return (
      <th className={`w-[${width ? width + "%" : "auto"}] font-medium px-6`}>
        <div className="flex justify-start items-baseline gap-2">
          <span>{text}</span>
          <div
            className="cursor-pointer"
            onClick={() => {
              if (duracaoSort === "asc") {
                setDuracaoSort("desc");
              } else if (duracaoSort === "desc") {
                setDuracaoSort("");
              } else {
                setDuracaoSort("asc");
              }
            }}
          >
            <SortIcon size={12} duracaoSort={duracaoSort} />
          </div>
        </div>
      </th>
    );
  }
}
