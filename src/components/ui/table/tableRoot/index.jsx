export function TableRoot({ children }) {
  return (
    <div
      className={`flex flex-col grow overflow-hidden max-w-[100dvw] bg-white border rounded-lg shadow-md`}
    >
      {children}
    </div>
  );
}
