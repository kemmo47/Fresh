import type { Icon } from "./types.ts";

export const IcoOpenWhite = ({ classNameSvg, classNameI }: Icon) => {
  return (
    <i className={classNameI}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 16 16"
        xmlSpace="preserve"
        className={classNameSvg}
        fill="currentColor"
      >
        <g>
          <polygon
            className="st0"
            points="12,12.3 12,14 2,14 2,7 2.9,7 2.9,5 0,5 0,16 14,16 14,12.3 	"
          />
          <path className="st0" d="M14,3v6H6V3H14 M16,1H4v10h12V1L16,1z" />
        </g>
      </svg>
    </i>
  );
};
