import { SortIcon } from "../../../../svg/sort";

export function TableTH({
  text,
  width,
  sortValue = "",
  setSortValue,
  resetConcurrentSort,
}) {
  if (!setSortValue) {
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
        <div
          className="flex justify-start items-baseline gap-2"
          onClick={() => {
            !sortValue && resetConcurrentSort();
            if (sortValue === "asc") {
              setSortValue("desc");
            } else {
              setSortValue("asc");
            }
          }}
        >
          <span>{text}</span>
          <div className="cursor-pointer">
            <SortIcon size={12} sortValue={sortValue} />
          </div>
        </div>
      </th>
    );
  }
}
