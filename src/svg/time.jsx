export function TimeLogo({ color = "#000", size = 24 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 8V12L15 15"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
        ></path>
        <circle cx="12" cy="12" r="9" stroke={color} stroke-width="2"></circle>
      </g>
    </svg>
  );
}
