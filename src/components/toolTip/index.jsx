export function ToolTipMessage({ message, isMobile = false }) {
  const wrapperClassName = isMobile
    ? "absolute bottom-[100%] left-[0px] w-[200px] flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg z-50"
    : "absolute left-[-100px] w-[350px] flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg z-50";
  return (
    <div className={wrapperClassName}>
      {message}
      <a
        className="p-2 border rounded-lg bg-green-500 text-white text-center hover:bg-green-600 transition-all"
        target="_blank"
        href="https://www.linkedin.com/in/tobiasantos/"
        rel="noreferrer"
      >
        Documentação
      </a>
    </div>
  );
}
