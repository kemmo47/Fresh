import {
  useEffect,
  useState,
} from "https://esm.sh/v106/@types/react@18.0.33/index~.d.ts";
import { useGetFee } from "../hook/useGetFee.tsx";
import { useModal } from "../hook/useModal.tsx";
import { Company } from "../types/Company.d.ts";
import {
  EFFECTIVE_COMBO_DEFAULT,
  SEARCH_CONDITION_STORAGE_KEY,
} from "../utils/constant.ts";
import { getComboDefault } from "../utils/filterConditions.ts";

type ItemHairProps = {
  item: Company;
  isPRItem: boolean;
};

export const ItemHair = ({ item, isPRItem }: ItemHairProps) => {
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
    const searchConditions = JSON.parse(
      localStorage.getItem(SEARCH_CONDITION_STORAGE_KEY) ?? "{}",
    );
    if (!searchConditions.plan || searchConditions.plan.length === 0) {
      searchConditions.plan = getComboDefault(EFFECTIVE_COMBO_DEFAULT);
    }
    setFilterLocalStore(searchConditions.plan);
  }, [localStorage.getItem(SEARCH_CONDITION_STORAGE_KEY)]);

  return (
    <>
      <div className="relative rounded-[5px] mx-2 shadow-[0_0_1px_1px_brown] lg:rounded-lg lg:bg-white-transparent-light bg-white
          lg:shadow-[0px_2px_4px_1px] lg:shadow-violet-transparent p-1">
        <div
          className={`lg:border-2 rounded-md overflow-hidden ${
            isPRItem ? "border-pink-dark" : "border-brown"
          }`}
        >
          <div className="bg-white rounded lg:p-1 lg:rounded-b-none lg:rounded-md">
            <HeaderItemHair status={isPRItem} company={item} />
          </div>
          <div className="grid items-center grid-cols-12">
            <div className="col-span-full text-center">
              <a
                href={item.company_url}
                className="block"
                data-cepc={item.data_cepc}
              >
                <img
                  src={item.company_banner_url}
                  alt={`${item.company_name}会社のバナー画像`}
                  className="mx-auto"
                />
              </a>
            </div>
            <div className="grid grid-cols-12 col-span-full gap-4 bg-white items-center justify-center lg:py-3 lg:gap-2">
              <div className="col-span-full lg:col-span-7">
                <div className="py-1 pb-0.5 lg:rounded-none lg:px-3 ">
                  {cost && numberOfTimes
                    ? (
                      <FeeBodyPlanHair
                        toggle={toggle}
                        cost={cost}
                        numberOfTimes={numberOfTimes}
                        filterList={filterTreatmentList}
                      />
                    )
                    : (
                      <div className="col-span-full bg-white pt-2 lg:h-full lg:col-span-7">
                        <div
                          className="text-center text-brown text-base mx-2 py-3 border-t-2 border-brown lg:border-b-2 lg:border-t-0 lg:h-full lg:flex lg:items-center lg:justify-center lg:text-lg"
                          style={{ fontSize: "min(max(7px, 3.5vw), 20px)" }}
                        >
                          ※ご希望の条件に適したプランはありませんでした。
                        </div>
                      </div>
                    )}
                </div>
              </div>
              <div className="col-span-full lg:col-span-5 h-full bg-white lg:rounded-lg lg:rounded-t-none ">
                <BusinessHoursHair businessHours={item.business_hours} />
              </div>
            </div>
            {item.campaign
              ? (
                <div className="col-span-full bg-white py-1.5 lg:py-2">
                  <Campaign campaign={item.campaign} type={"itemCompany"} />
                </div>
              )
              : (
                ""
              )}
          </div>
        </div>
        <div className="grid grid-cols-12 col-span-full gap-2 m-2 items-stretch h-[70px] lg:h-[90px]">
          <div className="col-span-12">
            <a
              href={item.company_url}
              data-cepc={item.data_cepc}
            >
              <div className="group border-pink-dark hover:shadow-[0_0_0_0] h-full rounded-[5px] duration-300
                  ease-in-out lg:border-[3px] border-2 lg:hover:translate-y-0.5 lg:shadow-sm lg:rounded-lg">
                <div className="flex items-center justify-center pl-5  lg:px-5 h-full rounded-[2px]
                  lg:rounded-[5px] group-hover:rounded-[4px] bg-pink-dark group-hover:border-none border-2 border-white duration-100 ease-in-out">
                  <span className="text-xss text-center font-semibold group-hover:text-cream-600 text-white duration-300 ease-in-out lg:text-xl lg:mr-5">
                    詳細をみる
                  </span>
                  <div className="relative ml-8 lg:ml-6">
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
      <ItemHairModal
        isShown={isShown}
        handleToggleModal={toggle}
        companyType={item.company_type}
        companyName={item.company_name}
        itemHairCost={cost}
        itemHairNumberOfTimes={numberOfTimes}
      />
    </>
  );
};
