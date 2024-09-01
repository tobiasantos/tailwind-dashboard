import { fakeMeetings } from "../../constants/reunioesData";
import { LeftArrowLogo } from "../../svg/leftArrow";
import { RightArrowLogo } from "../../svg/rightArrow";

export function PaginationSelect({ currentPage, setCurrentPage, maxPage }) {
  return (
    <div className="w-full py-4 flex items-center justify-center gap-4">
      <button
        className="cursor-pointer p-2 rounded-md hover:bg-[#6cbab1] hover:text-white"
        onClick={() => currentPage > 1 && setCurrentPage((prev) => prev - 1)}
      >
        <LeftArrowLogo size={14} />
      </button>
      <div>
        <span>
          {currentPage} / {maxPage}
        </span>
      </div>
      <button
        className="cursor-pointer p-2 rounded-md hover:bg-[#6cbab1] hover:text-white rotate-180"
        onClick={() =>
          currentPage < maxPage && setCurrentPage((prev) => prev + 1)
        }
      >
        <RightArrowLogo size={14} />
      </button>
    </div>
  );
}
