export function ToolTipLogo({ color, size }) {
  return (
    <svg
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill={color || "black"}
      width={size || "18px"}
      height={size || "18px"}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="icomoon-ignore"> </g>
        <path
          d="M16 2.672c-7.361 0-13.328 5.967-13.328 13.328s5.967 13.328 13.328 13.328 13.328-5.967 13.328-13.328c0-7.361-5.967-13.328-13.328-13.328zM16 28.262c-6.761 0-12.262-5.5-12.262-12.262s5.5-12.262 12.262-12.262 12.262 5.5 12.262 12.262c0 6.761-5.5 12.262-12.262 12.262z"
          fill={color || "black"}
        ></path>
        <path
          d="M15.955 9.013c-2.706 0-4.217 1.672-4.236 4.322h1.176c-0.037-1.922 0.97-3.332 3.005-3.332 1.455 0 2.668 1.026 2.668 2.519 0 0.97-0.523 1.754-1.213 2.407-1.418 1.316-1.815 1.935-1.887 3.738h1.191c0.070-1.635 0.034-1.602 1.461-3.029 0.952-0.896 1.623-1.792 1.623-3.173 0-2.164-1.717-3.452-3.787-3.452z"
          fill={color || "black"}
        ></path>
        <path
          d="M16 20.799c-0.588 0-1.066 0.477-1.066 1.066 0 0.589 0.478 1.066 1.066 1.066s1.066-0.477 1.066-1.066c0-0.588-0.477-1.066-1.066-1.066z"
          fill={color || "black"}
        ></path>
      </g>
    </svg>
  );
}
