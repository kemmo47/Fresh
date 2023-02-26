import { IcoOpenWhite } from "../../Icon/IcoOpenWhite.tsx";
import { formatMoney, rounding } from "../../../utils/helper.ts";

type FeeBodyPlanHairProp = {
  cost: number;
  numberOfTimes: number;
  toggle: () => void;
};

export const FeeBodyPlanHair = ({
  toggle,
  cost,
  numberOfTimes,
}: FeeBodyPlanHairProp) => {
  return (
    <div className="col-span-full bg-white h-full lg:col-span-7 lg:col-start-6 xl:pl-8">
      <div className="pt-1 m-2 mb-0 pb-0 lg:m-0 lg:pt-0">
        <div className="border-t-2 border-brown lg:pb-2 lg:pl-8 lg:mr-3 lg:border-b-2 lg:border-t-0">
          <div className="text-start text-xss tracking-[2px] text-brown pl-2 lg:text-base lg:pl-0">
            プラン1回あたりの料金
          </div>
          <div className="grid grid-cols-12 lg:flex lg:gap-8">
            <div className="flex items-baseline justify-end flex-nowrap gap-1 col-span-6 col-start-3 pl-2 lg:pl-0">
              <span className="leading-none text-8xl text-blue-dark tracking-[5px] font-bold lg:text-11xl">
                {formatMoney(
                  rounding(cost / (numberOfTimes ? numberOfTimes : 1)),
                )}
              </span>
              <span className="text-lg text-blue-dark font-semibold lg:text-2xl">
                円
              </span>
            </div>
            <div className="col-span-3 col-start-10 flex items-center justify-end lg:col-start-8">
              <div
                onClick={() => toggle()}
                className="relative pl-8 cursor-pointer group hover:translate-y-0 hover:shadow-[0_0_0_0] hover:bg-pink-dark hover:border-pink-dark px-1.5 py-[3px] shadow-[0_1px_0_0] shadow-brown-dark border border-brown rounded -translate-y-1 duration-300 ease-in-out lg:rounded-md lg:py-[7px] lg:pl-7 lg:pr-2 xl:pl-6 xl:pr-3"
              >
                <div className="lg:pl-1 xl:pl-5 xl:pr-2">
                  <span className="text-xss group-hover:text-white text-brown duration-300 ease-in-out lg:text-base">
                    内訳
                  </span>
                  <IcoOpenWhite
                    classNameI={"absolute w-4 h-4 top-1/2 left-0 -translate-y-1/2 translate-x-3/4"}
                    classNameSvg={"text-brown group-hover:text-white duration-300 ease-in-out"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden pt-2 pl-8 tracking-[3px] text-base text-brown lg:text-ellipsis lg:whitespace-nowrap lg:pl-0 lg:block xl:pl-8">
        （ 内訳： {cost ? formatMoney(cost) : 0}円 /{" "}
        {numberOfTimes ? numberOfTimes : cost ? 1 : 0}回 ＝{" "}
        {formatMoney(rounding(cost / (numberOfTimes ? numberOfTimes : 1)))}円 ）
      </div>
    </div>
  );
};
