import type { Icon } from "./types.ts";

export const ArrBlue = ({ classNameSvg, classNameI }: Icon) => {
  return (
    <i className={classNameI}>
      <svg
        stroke="currentColor"
        className={classNameSvg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 15 15"
        fill="currentColor"
      >
        <path
          className="st0"
          d="M4.4,12.9c0-0.1,0-0.3,0.1-0.4l5.3-5.3L4.6,1.9c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0L11,6.9
	c0.2,0.2,0.2,0.5,0,0.7l-5.7,5.7c-0.2,0.2-0.5,0.2-0.7,0C4.5,13.1,4.4,13,4.4,12.9z"
        />
      </svg>
    </i>
  );
};
