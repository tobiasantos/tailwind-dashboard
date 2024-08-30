export function TableRoot({ children }) {
  // faltou estilizar a borda
  return (
    <div className="flex flex-col grow overflow-hidden max-w-[100dvw] bg-white border rounded-md shadow-md">
      {children}
    </div>
  );
}
