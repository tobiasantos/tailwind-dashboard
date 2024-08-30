export function TableHead({ children }) {
  return (
    <thead className="bg-white sticky top-0 h-10 z-10">
      <tr>{children}</tr>
    </thead>
  );
}
