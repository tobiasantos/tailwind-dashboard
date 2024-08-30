export function SortIcon({ size, duracaoSort }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M8 0L2 6V7H14V6L8 0Z"
          fill={duracaoSort === "asc" ? "#6FBFB6" : "#000"}
        ></path>
        <path
          d="M8 16L2 10V9H14V10L8 16Z"
          fill={duracaoSort === "desc" ? "#6FBFB6" : "#000"}
        ></path>
      </g>
    </svg>
  );
}
