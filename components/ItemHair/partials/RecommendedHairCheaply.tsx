// deno-lint-ignore-file no-explicit-any
import { useRef, useState } from "preact/hooks";

import { Add } from "../../Icon/Add.tsx";
import { NewWindowWhite } from "../../Icon/NewWindowWhite.tsx";
import { Subtract } from "../../Icon/Subtract.tsx";

type RecommendedHairCheaplyProp = {
  listItem: number[];
  status: string;
};

export const RecommendedHairCheaply = ({
  listItem,
  status,
}: RecommendedHairCheaplyProp) => {
  const [collapse, setCollapse] = useState(false);
  const ref = useRef<any>(null);

  const HandleCollapse = (id: string) => {
    setCollapse(!collapse);
    if (collapse) {
      document.getElementById(id)!.style.height = "0px";
    } else {
      document.getElementById(id)!.style.height = `${
        ref.current.offsetHeight * listItem.length + 16
      }px`;
    }
  };

  return (
    <div className="block col-span-12 mx-0.5 border border-gray-500 border-t-0 lg:hidden">
      <div className="bg-gray-500 flex justify-center items-center">
        <button
          onClick={() => HandleCollapse(`containerCollapse${status}`)}
          type="button"
          className="py-2.5 flex items-center gap-2"
        >
          <NewWindowWhite classNameSvg={"w-5 text-blue-700"} />
          <span className="text-blue-600 font-semibold text-xss">
            ポイント：脱毛を安く試したい人おすすめ
          </span>
          {collapse
            ? <Add strokeWidth={3} classNameSvg={"w-5 text-blue-700"} />
            : <Subtract strokeWidth={3} classNameSvg={"w-5 text-blue-700"} />}
        </button>
      </div>
      <div
        id={`containerCollapse${status}`}
        className={`${
          collapse ? "py-2" : ""
        } px-4 transition-all duration-700 ease-in-out`}
        style={{ height: "0px", overflow: "hidden" }}
      >
        {listItem.map((x) => {
          return (
            <div
              className="border-b border-dashed border-gray-600 pb-1 pt-4 flex items-center gap-2"
              ref={ref}
              key={x}
            >
              <div className="after:bg-[url('/assets/images/ico_check.svg')] after:absolute after:content-[''] after:w-6 after:h-6 after:top-1/2 after:left-0 after:-translate-y-1/2 after:translate-x-0.5 relative border border-gray-500 w-5 h-5">
              </div>
              <span className="text-xss text-brown">
                こちらにはテキストが入ります(20文字程度)
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
