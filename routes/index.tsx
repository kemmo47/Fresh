// deno-lint-ignore-file prefer-const no-explicit-any
import { asset, Head } from "$fresh/runtime.ts";
import { HeaderHairRemoval } from "../components/HeaderHairRemoval.tsx";
import { FilterContext } from "../hook/FilterContext.ts";
import { useEffect, useReducer, useState } from "preact/hooks";
import {
  ActionType,
  FilterValType,
  StateReducerType,
} from "../types/TypeIndex.d.ts";
import { getComboDefault } from "../utils/filterConditions.ts";
import { EFFECTIVE_COMBO_DEFAULT } from "../utils/constant.ts";
import HAIR_JSON from "../static/data/JSON.json" assert { type: "json" };
import { Company } from "../types/Company.d.ts";
import { Hair } from "../types/Hair.d.ts";
import ItemHair from "../islands/ItemHair.tsx";
import { useSearchCondition } from "../hook/useSearchCondition.ts";
import { FILTER_LIST } from "../components/filterHairRemovalData.tsx";
import { getPrCompanies } from "../utils/getPrCompanies.ts";
import NumberHair from "../islands/NumberHair.tsx";
import ItemHairPR from "../islands/ItemHairPR.tsx";

const initialReducerState: StateReducerType = {
  companies: HAIR_JSON,
  filterParams: {},
};

const filterBySingleCondition = (
  inputCompanies: Company[],
  filterVal: FilterValType,
): Company[] => {
  let newListCompany = inputCompanies;
  if (Array.isArray(filterVal) && filterVal.length > 0) {
    newListCompany = inputCompanies.filter((companyItem: Company) => {
      const newArr = filterVal?.map((itemFilter: string) => {
        return companyItem[itemFilter as keyof Company] === true;
      });
      return newArr?.includes(true);
    });
  }
  return newListCompany;
};

export const reducerFilter = (
  state: StateReducerType,
  action: ActionType,
): StateReducerType => {
  switch (action.type) {
    // deno-lint-ignore no-case-declarations
    case "UPDATE_FILTER_PARAMS":
      state.filterParams = { ...action.filter };

      const filterValue = Object.assign({}, state.filterParams);

      if (!filterValue.plan || filterValue.plan.length === 0) {
        // if no plan selected then set -> combo_default
        filterValue.plan = getComboDefault(EFFECTIVE_COMBO_DEFAULT);
      }

      // Custom case Hair Plan combo [body,face,vio] join to string body_face_vio
      if (
        filterValue.plan &&
        filterValue.plan.length > 1 &&
        typeof filterValue.plan === "object"
      ) {
        let keyFilter = filterValue.plan.sort().join("_");
        filterValue.plan = [keyFilter];
      }

      // Part-2. Update companies
      let newListCompany = HAIR_JSON;

      Object.values(filterValue).forEach((item: FilterValType) => {
        newListCompany = filterBySingleCondition(newListCompany, item);
      });

      return {
        ...state,
        companies: newListCompany,
      };
    default:
      throw new Error();
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducerFilter, initialReducerState);
  const [showCompaniesList, setShowCompaniesList] = useState<Hair[]>([]);
  const [showCompaniesPRList, setShowCompaniesPRList] = useState<Hair[]>([]);
  const {
    getSearchConditions,
    handleSetSearchConditions,
    getFilterConditionFromLocalStorage,
  } = useSearchCondition();

  const getKeySortCompanyByFilterPlan = (type: string) => {
    return getFilterConditionFromLocalStorage()
      ?.plan?.sort()
      .toString()
      .replace(/\,/g, "_")
      .concat(`_${type}`);
  };

  const handleKeyComboDefault = (type?: string) => {
    const keyComboDefault: string[] = [];

    const listComboDefaultTrue = FILTER_LIST.filter(
      (item: { parent_order: number }) => {
        return item.parent_order === 2;
      },
    )[0]?.items.filter((x: any) => x.combo_default === true);

    listComboDefaultTrue?.map((y: { answer_options: string }) => {
      keyComboDefault.push(y.answer_options);
    });

    return type
      ? keyComboDefault.sort().toString().replace(/\,/g, "_").concat(`_${type}`)
      : keyComboDefault;
  };

  const sortCompanyBeforeShow = (a: Hair, b: Hair) => {
    return (
      Number(
          getKeySortCompanyByFilterPlan("cost")
            ? a[getKeySortCompanyByFilterPlan("cost") as keyof Hair]
            : handleKeyComboDefault().toString()
            ? a[handleKeyComboDefault("cost") as keyof Hair]
            : a.body_face_vio_cost,
        ) /
        Number(
          getKeySortCompanyByFilterPlan("number_of_times")
            ? a[getKeySortCompanyByFilterPlan("number_of_times") as keyof Hair]
            : handleKeyComboDefault().toString()
            ? a[handleKeyComboDefault("number_of_times") as keyof Hair]
            : a.body_face_vio_number_of_times,
        ) -
      Number(
          getKeySortCompanyByFilterPlan("cost")
            ? b[getKeySortCompanyByFilterPlan("cost") as keyof Hair]
            : handleKeyComboDefault().toString()
            ? b[handleKeyComboDefault("cost") as keyof Hair]
            : b.body_face_vio_cost,
        ) /
        Number(
          getKeySortCompanyByFilterPlan("number_of_times")
            ? b[getKeySortCompanyByFilterPlan("number_of_times") as keyof Hair]
            : handleKeyComboDefault().toString()
            ? b[handleKeyComboDefault("number_of_times") as keyof Hair]
            : b.body_face_vio_number_of_times,
        )
    );
  };

  const setShowCompaniesListBeforeShow = () => {
    const companiesList = state.companies?.sort((a, b) => {
      return sortCompanyBeforeShow(a, b);
    });
    setShowCompaniesList(companiesList);
  };

  const setShowCompaniesPRListBeforeShow = () => {
    const companiesPRList = getPrCompanies(HAIR_JSON).sort((a, b) => {
      return sortCompanyBeforeShow(a, b);
    });
    setShowCompaniesPRList(companiesPRList);
  };

  useEffect(() => {
    setShowCompaniesListBeforeShow();
    setShowCompaniesPRListBeforeShow();
  }, [state]);

  useEffect(() => {
    if (!location) return;
    const currentSearchConditions = getSearchConditions();
    dispatch({ type: "UPDATE_FILTER_PARAMS", filter: currentSearchConditions });
    handleSetSearchConditions(currentSearchConditions);
  }, [location]);

  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link
          rel="stylesheet"
          href={asset("./css/index.css")}
        />
        <link
          rel="stylesheet"
          href={asset("./css/ItemHair.css")}
        />
      </Head>

      <HeaderHairRemoval />
      <FilterContext.Provider value={{ state, dispatch }}>
        <div className="relative lg:mx-0 lg:pb-12">
          {/* <Filter /> */}
          {
            /* <Curves
            classNameI={"absolute bottom-[-1px] w-full h-auto z-0"}
            fillColor={"#ffccdd"}
          /> */
          }
        </div>

        <div
          id="company-list-number pb-16"
          className="background-image-ImgFlowerLine bg-pink-light bg-no-repeat bg-[length:0px] lg:bg-[length:410px] lg:bg-[left_-2rem_bottom_-11rem]"
        >
          <div className="container py-3">
            <NumberHair numberHair={state.companies.length} />

            <div className="my-3.5 lg:my-11">
              {
                /* {showCompaniesPRList.map((item) => {
                return (
                  <div className="mb-6" key={item.id}>
                    <ItemHairPR company={item} />
                  </div>
                );
              })} */
              }

              <ItemHairPR company={state.companies} />
            </div>

            <div className="py-2.5 container w-2/3 lg:w-[calc(30%+10px)]">
              <img
                src={asset("./images/img_leaf.png")}
                width="760px"
                height="180px"
                alt="店舗リスト"
              />
            </div>
            <div className="my-3.5 lg:my-11">
              {state.companies.map((company) => {
                return (
                  <div className="mb-6" key={company.id}>
                    <ItemHair
                      item={company}
                      isPRItem={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </FilterContext.Provider>
    </>
  );
}
