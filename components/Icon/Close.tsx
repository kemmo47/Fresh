import type { Icon } from "./types.ts";

export const Close = ({ classNameSvg, classNameI }: Icon) => {
  return (
    <i className={classNameI}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        className={classNameSvg}
        fill="currentColor"
      >
        <path d="M14,12l9.6-9.6c0.5-0.5,0.5-1.2,0-1.7l-0.3-0.3c-0.5-0.5-1.2-0.5-1.7,0L12,10L2.4,0.3c-0.5-0.5-1.2-0.5-1.7,0
	L0.3,0.7c-0.5,0.5-0.5,1.2,0,1.7L10,12l-9.6,9.6c-0.5,0.5-0.5,1.2,0,1.7l0.3,0.3c0.5,0.5,1.2,0.5,1.7,0L12,14l9.6,9.6
	c0.5,0.5,1.2,0.5,1.7,0l0.3-0.3c0.5-0.5,0.5-1.2,0-1.7L14,12z" />
      </svg>
    </i>
  );
};
