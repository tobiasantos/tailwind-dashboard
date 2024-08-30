import "../../../../styles/tableContent.css";

export function TableContent({ children }) {
  return (
    <div className="flex custom-scrollbar overflow-y-scroll overflow-x-auto grow max-h-[55vh]">
      <table className="w-full whitespace-nowrap border-collapse h-fit">
        {children}
      </table>
    </div>
  );
}
