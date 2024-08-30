export function TableTD({ children, text = "" }) {
  return (
    <td className="px-6 min-h-[40px] py-2 whitespace-break-spaces">
      {children || text}
    </td>
  );
  //  falta margin auto nos filhos
}
