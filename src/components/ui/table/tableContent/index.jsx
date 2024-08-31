import "../../../../styles/tableContent.css";

export function TableContent({ children }) {
  return (
    <div className="flex custom-scrollbar max-h-full overflow-y-scroll overflow-x-auto">
      <table className="w-full whitespace-nowrap border-collapse">
        {children}
      </table>
    </div>
  );
}
