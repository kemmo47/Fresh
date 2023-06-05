import { IcoOpenWhite } from "../Icon/IcoOpenWhite.tsx";
import { formatMoney, rounding } from "../../utils/helper.ts";

type FilterList = {
  filter_item: string;
  active: boolean;
}[];

type FeeBodyPlanHairProp = {
  cost: number;
  numberOfTimes: number;
  toggle: () => void;
  filterList: FilterList;
};

export const FeeBodyPlanHair = ({
  toggle,
  cost,
  numberOfTimes,
  filterList,
}: FeeBodyPlanHairProp) => {
  return (
    <div className="col-span-full bg-white h-full lg:col-span-7 lg:col-start-6 text-center">
      <div className="pt-1 m-2 mb-0 pb-0 lg:m-0 lg:pt-0 inline-block">
        <div className="lg:text-start text-xss tracking-[2px] text-brown pl-2 lg:text-base lg:pl-0 mb-2 text-center">
          「
          <span
            dangerouslySetInnerHTML={{
              __html: filterList
                .reduce<string[]>((result, item) => {
                  if (item.active === true) {
                    result.push(`<b>${item.filter_item}</b>`);
                  }
                  return result;
                }, [])
                .join("＋")
                .toString(),
            }}
          >
          </span>
          」プラン1ヶ月あたりの料金
        </div>
        <div className="flex lg:gap-8 gap-2 lg:justify-start justify-center items-center">
          <div className="flex items-baseline justify-end flex-nowrap gap-1 col-start-3 pl-2 lg:pl-0">
            <span className="leading-none text-8xl text-blue-dark tracking-[5px] font-bold lg:text-11xl">
              {formatMoney(
                rounding(cost / (numberOfTimes ? numberOfTimes : 1)),
              )}
            </span>
            <span className="text-lg text-blue-dark font-semibold lg:text-2xl">
              円
            </span>
          </div>
          <div className="col-start-10 flex items-center justify-end lg:col-start-8">
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
  );
};
