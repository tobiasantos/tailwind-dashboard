/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { SearchLogo } from "../../../svg/search";
import { DownArrowLogo } from "../../../svg/downArrow";
export function MultiSelect({
  items = [],
  placeholder = "Selecione opções abaixo",
  selectedItems = [],
  setSelectedItems = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [allItems, setAllItems] = useState(
    [...items].map((item) => {
      return {
        name: item,
        isSelected: false,
      };
    })
  );
  const [searchValue, setSearchValue] = useState("");

  const formatSelectedItems = () => {
    if (selectedItems.length === 0) {
      return placeholder;
    }
    return selectedItems.join(", ");
  };

  const selectedClassName =
    "w-full flex items-center justify-between border p-2 cursor-pointer rounded-md transition-all border-black";
  const notSelectedClassName =
    "w-full flex items-center justify-between border p-2 cursor-pointer rounded-md transition-all";

  useEffect(() => {
    if (!searchValue) {
      return setAllItems(
        [...items].map((item) => {
          return {
            name: item,
            isSelected: selectedItems.includes(item),
          };
        })
      );
    } else {
      const auxItems = [...items].map((item) => {
        return {
          name: item,
          isSelected: selectedItems.includes(item),
        };
      });
      const newItems = auxItems.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setAllItems(newItems);
      console.log(newItems);
    }
  }, [searchValue]);

  useEffect(() => {
    if (!selectedItems.length) {
      setAllItems(
        [...items].map((item) => {
          return {
            name: item,
            isSelected: false,
          };
        })
      );
    }
  }, [selectedItems.length]);

  return (
    <div className="relative w-full">
      <div
        className={isOpen ? selectedClassName : notSelectedClassName}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={`${selectedItems.length ? "text-black" : "text-gray-400"}`}
        >
          {formatSelectedItems()}
        </span>
        <div>
          <DownArrowLogo size={14} />
        </div>
      </div>
      {isOpen && (
        <div className="w-full mt-1 absolute z-30 px-1 bg-white border rounded-md">
          <div className="flex flex-col gap-1 p-2">
            <div className="w-full flex gap-2 items-center">
              <input
                className="w-4 h-4 accent-[#6cbab1]"
                type="checkbox"
                name="select-all"
                id="select-all"
                checked={allItems.every((item) => item.isSelected)}
                onChange={(e) => {
                  const newItems = [...allItems];
                  newItems.forEach(
                    (item) => (item.isSelected = e.target.checked)
                  );
                  setAllItems(newItems);

                  if (e.target.checked) {
                    setSelectedItems([...items]);
                  } else {
                    setSelectedItems([]);
                  }
                }}
              />
              <div className="relative w-[90%]">
                <input
                  className="border rounded-md p-1 w-[90%]"
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <div className="absolute bottom-[25%] right-[15%] cursor-pointer">
                  <SearchLogo size={18} color="#6cbab1" />
                </div>
              </div>
            </div>
            {allItems.map((item, index) => (
              <div className="w-full" key={index}>
                <label className="flex gap-2 items-center" htmlFor={item.name}>
                  <input
                    className="w-4 h-4 accent-[#6cbab1]"
                    type="checkbox"
                    name={item.name}
                    id={item.name}
                    checked={item.isSelected}
                    onChange={(e) => {
                      const newItems = [...allItems];
                      newItems[index].isSelected = !newItems[index].isSelected;
                      setAllItems(newItems);

                      if (newItems[index].isSelected) {
                        setSelectedItems((prev) => [...prev, item.name]);
                      } else {
                        setSelectedItems((prev) =>
                          prev.filter(
                            (selectedItem) => selectedItem !== item.name
                          )
                        );
                      }
                    }}
                  />
                  <span>{item.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      {isOpen && (
        <div
          className="w-screen h-screen fixed top-0 left-0 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
