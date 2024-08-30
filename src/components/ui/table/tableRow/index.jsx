export function TableRow({ children, isGray = false }) {
  return (
    <tr
      className={`border border-collapse ${
        isGray ? "bg-gray-100" : "bg-white"
      }`}
    >
      {children}
    </tr>
  ); // falta estilizar a cor de fundo
}
