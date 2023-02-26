import type { Icon } from "./types.ts";

export const Curves = ({
  strokeWidth,
  classNameSvg,
  classNameI,
  fillColor,
}: Icon) => {
  return (
    <i className={classNameI}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 175"
        strokeWidth={strokeWidth}
        className={classNameSvg}
      >
        <path
          fill={fillColor}
          d="M 0 64 L -3 38 C 203 143 480 171 720 170.7 C 960 171 1216 144 1439 38 L 1439 40 L 1440 320 L 1320 320 C 1200 320 960 320 720 320 C 480 320 240 320 120 320 L 0 320 Z"
        />
      </svg>
    </i>
  );
};
