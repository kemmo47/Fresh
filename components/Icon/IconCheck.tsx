import type { Icon } from "./types.ts";

export const IconCheck = ({ strokeWidth, classNameSvg, classNameI }: Icon) => {
  return (
    <i className={classNameI}>
      <svg
        version="1.1"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        className={classNameSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <g>
          <path
            className="st0"
            d="M29.3,0c-8.5,4.7-17,18.1-17,18.1L4.6,9.3L0,13.7l11.2,13.9l4.1-0.2C20.5,11.7,32,1.3,32,1.3L29.3,0z"
          />
        </g>
      </svg>
    </i>
  );
};
