export function TableSummary({ children, title }) {
  return (
    <div className="flex items-center justify-between py-3 px-6 bg-white">
      <div className="flex grow items-center justify-between">
        <h2 className="font-bold text-2xl">{title}</h2>
        <div className="flex items-center gap-8">{children}</div>
      </div>
    </div>
  );
}
