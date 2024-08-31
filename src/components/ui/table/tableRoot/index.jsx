export function TableRoot({ children }) {
  return (
    <div
      // className={`flex flex-col grow overflow-hidden max-w-[100dvw] max-h-[${maxHeight}px] bg-white border rounded-lg shadow-md`}
      className={`flex flex-col grow overflow-hidden max-w-[100dvw] h-full bg-white border rounded-lg shadow-md`}
    >
      {children}
    </div>
  );
}
