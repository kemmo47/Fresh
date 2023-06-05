import type { Icon } from "./types.ts";

export const IconNext = ({ classNameSvg, classNameI }: Icon) => {
  return (
    <i className={classNameI}>
      <svg
        className={classNameSvg}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-1 -1 20 20"
      >
        <path d="M9,0C4,0,0,4,0,9c0,5,4,9,9,9s9-4,9-9C18,4,14,0,9,0z M6.3,13.4V4.6L13.9,9L6.3,13.4z" />
      </svg>
    </i>
  );
};
