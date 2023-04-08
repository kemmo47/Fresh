import { asset } from "$fresh/runtime.ts";

export const FirstView = () => {
  return (
    <div className="flex">
      <img
        src={asset("/images/fv-hair-removal-pc.jpg")}
        className="w-full"
        alt="First View"
      />
    </div>
  );
};
