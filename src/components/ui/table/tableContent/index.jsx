export function TableContent({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full whitespace-nowrap border-collapse">
        {children}
      </table>
    </div>
  );
}
