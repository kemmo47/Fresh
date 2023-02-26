import { useState } from "preact/hooks";
import { Hair } from "../types/Hair.d.ts";

type FilterTreatmentListType = {
  filter_item: string;
  active: boolean;
  answer_options: string;
};

export const useGetFee = () => {
  const [filterTreatmentList, setFilterTreatmentList] = useState<
    FilterTreatmentListType[]
  >([
    {
      filter_item: "全身",
      active: true,
      answer_options: "body",
    },
    {
      filter_item: "VIO",
      active: true,
      answer_options: "vio",
    },
    {
      filter_item: "顔",
      active: true,
      answer_options: "face",
    },
  ]);

  const filterTreatmentPlanHair = (filterLocalStore: any) => {
    const TreatmentFilter: FilterTreatmentListType[] = [];

    filterTreatmentList.map((fil) => {
      TreatmentFilter.push({
        filter_item: fil.filter_item,
        active: filterLocalStore
            ?.sort()
            .toString()
            .replace(/\,/g, "_")
            .includes(fil.answer_options)
          ? true
          : false,
        answer_options: fil.answer_options,
      });
    });
    setFilterTreatmentList(TreatmentFilter);
  };

  const getFeeBodyPlanHairByFilter = (item: any, filterLocalStore: any) => {
    const costs = filterLocalStore?.sort().toString()
      ? Number(
        item[
          filterLocalStore
            ?.sort()
            .toString()
            .replace(/\,/g, "_")
            .concat("_cost") as keyof Hair
        ],
      )
      : item.body_face_vio_cost;

    const ofTimes = filterLocalStore?.sort().toString()
      ? Number(
        item[
          filterLocalStore
            ?.sort()
            .toString()
            .replace(/\,/g, "_")
            .concat("_number_of_times") as keyof Hair
        ],
      )
      : item.body_face_vio_number_of_times;

    return { costs: costs, ofTimes: ofTimes };
  };

  return {
    filterTreatmentList,
    getFeeBodyPlanHairByFilter,
    filterTreatmentPlanHair,
  };
};