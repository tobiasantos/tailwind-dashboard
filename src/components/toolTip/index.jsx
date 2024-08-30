export function ToolTipMessage({ message }) {
  return (
    <div className="absolute left-[-100px] w-[350px] flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
      {message}
      <button className="p-2 border rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all">
        Documentação
      </button>
    </div>
  );
}
