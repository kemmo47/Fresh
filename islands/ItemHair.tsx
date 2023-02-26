// deno-lint-ignore-file prefer-const
import { Hair } from "../types/Hair.d.ts";
import { useEffect, useState } from "preact/hooks";
import { useGetFee } from "../hook/useGetFee.tsx";
import {
  EFFECTIVE_COMBO_DEFAULT,
  SEARCH_CONDITION_STORAGE_KEY,
} from "../utils/constant.ts";
import { getComboDefault } from "../utils/filterConditions.ts";
import { HeaderItemHair } from "../components/Itemhair/partials/HeaderItemHair.tsx";
import { FeeBodyPlanHair } from "../components/Itemhair/partials/FeeBodyPlanHair.tsx";
import { useModal } from "../hook/useModal.tsx";
import { TreatmentPlanHair } from "../components/Itemhair/partials/TreatmentPlanHair.tsx";
import { BusinessHoursHair } from "../components/Itemhair/partials/BusinessHoursHair.tsx";
import { Campaign } from "../components/Itemhair/partials/Campaign.tsx";
import { ArrBlue } from "../components/Icon/ArrBlue.tsx";
import { IconNext } from "../components/Icon/IconNext.tsx";
import { ItemHairModal } from "../components/Itemhair/partials/ItemHairModal.tsx";

type ItemHairProps = {
  item: Hair;
  isPRItem: boolean;
};

export default function ItemHair({ item, isPRItem }: ItemHairProps) {
  const { isShown, toggle } = useModal();
  const [filterLocalStore, setFilterLocalStore] = useState([]);
  const [cost, setCost] = useState<number>(1);
  const [numberOfTimes, setNumberOfTimes] = useState<number>(1);
  const {
    filterTreatmentList,
    getFeeBodyPlanHairByFilter,
    filterTreatmentPlanHair,
  } = useGetFee();

  useEffect(() => {
    setCost(getFeeBodyPlanHairByFilter(item, filterLocalStore).costs);
    setNumberOfTimes(
      getFeeBodyPlanHairByFilter(item, filterLocalStore).ofTimes,
    );
    filterTreatmentPlanHair(filterLocalStore);
  }, [filterLocalStore]);

  useEffect(() => {
    let searchConditions = JSON.parse(
      localStorage.getItem(SEARCH_CONDITION_STORAGE_KEY) ?? "{}",
    );
    if (!searchConditions.plan || searchConditions.plan.length === 0) {
      searchConditions.plan = getComboDefault(EFFECTIVE_COMBO_DEFAULT);
    }
    setFilterLocalStore(searchConditions.plan);
  }, [localStorage.getItem(SEARCH_CONDITION_STORAGE_KEY)]);

  return (
    <>
      <div className="relative rounded-[5px] mx-3 shadow-[0_0_1px_1px_brown] mt-3 lg:mt-8 lg:rounded-lg lg:p-[3px] lg:bg-white-transparent-light lg:shadow-[0px_2px_4px_1px] lg:shadow-violet-transparent">
        <div className="bg-white border-b-0 rounded lg:p-1 lg:border-2 lg:border-b-0 lg:border-brown lg:rounded-b-none lg:rounded-md">
          <HeaderItemHair status={isPRItem} company={item} />
        </div>

        <div className="grid items-center grid-cols-12 lg:grid-cols-15">
          <div className="col-span-full h-full bg-white lg:col-span-5 lg:border-l-2 lg:border-brown">
            <div className="flex justify-center items-center h-full px-10 pt-2 lg:pl-20">
              <a
                href={`${item.company_path ? item.company_path : item.id}`}
              >
                <img
                  src={item.company_img}
                  className="w-full h-full"
                  alt={item.company_name}
                />
              </a>
            </div>
          </div>

          <FeeBodyPlanHair
            toggle={toggle}
            cost={cost}
            numberOfTimes={numberOfTimes}
          />
          <div className="col-span-full py-1 pb-0.5 bg-white lg:border-x-2 lg:border-brown lg:pt-3.5 lg:rounded-none lg:bg-white lg:px-3 lg:pb-4">
            <TreatmentPlanHair filterList={filterTreatmentList} />
          </div>
          <div className="col-span-full h-full border-t-0 bg-white lg:rounded-lg lg:rounded-t-none lg:border-brown lg:border-2 lg:border-t-0">
            <BusinessHoursHair businessHours={item.business_hours} />
          </div>

          <Campaign type={"itemCompany"} campaign={item.campaign} />

          <div className="col-span-5 flex items-center bg-white lg:bg-transparent rounded-bl-md lg:justify-center p-2 lg:col-span-full">
            <div className="group border-blue-600 border-2 bg-blue rounded-[5px] w-full
                p-px duration-300 ease-in-out lg:w-[calc(100%-55px)] lg:rounded-[7px] lg:hover:bg-pink-dark
                lg:hover:shadow-[0_0_0_0] lg:hover:shadow-transparent lg:py-0 lg:px-1 lg:hover:translate-y-1
                lg:shadow-[0_2px_0_0] lg:shadow-brown-dark lg:border-none">
              <a
                href={`${item.company_path ? item.company_path : item.id}`}
              >
                <div className="relative py-[15px] rounded-[2px] border flex
                    items-baseline duration-300 ease-in-out lg:border-white lg:group-hover:bg-pink-dark
                  lg:group-hover:border-white lg:my-[3px] lg:py-1.5 lg:px-10 lg:border-[2px] lg:rounded-[7px] lg:justify-between">
                  <span className="text-xss text-white mx-2 lg:group-hover:text-white
                    lg:font-semibold lg:tracking-[3px] lg:mr-5 lg:duration-300 lg:ease-in-out lg:text-xl">
                    詳細を見る
                  </span>
                  <ArrBlue
                    classNameI={"absolute w-3.5 h-3.5 top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 lg:w-6 lg:h-6 lg:-translate-x-1/2"}
                    classNameSvg={"text-white group-hover:text-white duration-200 ease-in-out"}
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="col-span-7 bg-white h-full rounded-br-md lg:py-1 lg:col-span-4 lg:row-start-1 lg:col-start-13 lg:border-r-2 lg:border-pink-dark lg:pb-0 lg:pr-2 lg:rounded-none">
            <div className="pl-0 p-2 h-full flex items-center justify-center lg:pl-2 lg:pb-0">
              <a
                href={item.company_url}
                target="_blank"
                rel="noopener noreferrer"
                data-cepc={item.data_cepc}
                className="w-full h-full lg:h-auto xl:h-full"
              >
                <div className="group p-px lg:hover:p-[2px] hover:border-pink-dark hover:shadow-[0_0_0_0] h-full rounded-[5px] duration-300 ease-in-out lg:hover:translate-y-1 lg:-translate-y-1 lg:border-[3px] border-pink-dark border-2 lg:border-white lg:shadow-sm lg:rounded-lg">
                  <div className="border-none bg-pink-dark rounded-[2px] lg:rounded-[5px] group-hover:rounded-[4px] group-hover:bg-pink-dark h-full duration-300 ease-in-out lg:border-2 lg:border-pink-dark">
                    <div className="flex items-center h-full pl-5 py-[15px] relative  duration-100 ease-in-out lg:h-auto lg:px-5 xl:h-full">
                      <span className="text-xss text-center font-semibold group-hover:text-cream-600 text-white duration-300 ease-in-out lg:text-xl lg:mr-5">
                        公式ページはこちら
                      </span>
                      <IconNext
                        classNameI={"absolute w-[18px] h-[18px] top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 lg:w-6 lg:h-6"}
                        classNameSvg={"group-hover:text-cream-600 text-white duration-300 ease-in-out"}
                      />
                      <IconNext
                        classNameI={"absolute w-[18px] h-[18px] top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 lg:w-6 lg:h-6"}
                        classNameSvg={"animate-ping group-hover:text-cream-600 text-white duration-300 ease-in-out"}
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ItemHairModal
        isShown={isShown}
        handleToggleModal={toggle}
        companyName={item.company_name}
        companyType={item.company_type}
        itemHairCost={cost}
        itemHairNumberOfTimes={numberOfTimes}
      />
    </>
  );
}
