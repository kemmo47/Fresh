import type { Icon } from "./types.ts";

export const Add = ({ strokeWidth, classNameSvg, classNameI }: Icon) => {
  return (
    <i className={classNameI}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        className={classNameSvg}
      >
        <g>
          <g>
            <path d="M256,0C114.625,0,0,114.625,0,256c0,141.391,114.625,256,256,256c141.391,0,256-114.609,256-256    C512,114.625,397.391,0,256,0z M256,448c-106.031,0-192-85.969-192-192S149.969,64,256,64c106.047,0,192,85.969,192,192    S362.047,448,256,448z M128,288h256v-64H128V288z" />
          </g>
        </g>
      </svg>
    </i>
  );
};
