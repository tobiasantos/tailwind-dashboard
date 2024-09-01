export function TableSummary({ children, title }) {
  return (
    <div className="flex justify-between py-3 px-6 bg-white">
      <div className="flex grow justify-between">
        <h2 className="font-bold text-3xl text-[#6CBAB1]">{title}</h2>
        <div className="flex items-center gap-8">{children}</div>
      </div>
    </div>
  );
}
