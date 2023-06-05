import { useState } from "preact/hooks";
import { asset } from "$fresh/runtime.ts";
import { useModal } from "../hook/useModal.tsx";
import { FILTER_LIST } from "../components/filterHairRemovalData.tsx";
import FilterItem from "./FilterItem.tsx";

export type FilterConditionType = {
  parent_order: number;
  question: string;
  image: string;
  label: string;
  modal_question: string | null;
  modal_label: string | null;
  modal_content: string | null;
  child_order: number;
  group_question_key: string;
  answer_options: string;
  is_default: boolean;
};

export type FilterStructureType = {
  question: string | null;
  modal_question: string | null;
  image: string;
  group_question_key: string;
  parent_order: number;
  items: FilterConditionType[];
};

export default function Filter() {
  const [isOpenCollapses, setIsOpenCollapses] = useState<boolean>(false);
  const { isShown, toggle } = useModal();
  const [dataModal, setDataModal] = useState<FilterConditionType[]>([]);

  const handleToggle = () => {
    setIsOpenCollapses(!isOpenCollapses);
  };

  const handleSetDataModal = (valueModal: FilterConditionType[]) => {
    setDataModal(valueModal || []);
    toggle();
  };

  return (
    <>
      <div className="container pt-4 pb-6 px-2" id="filter">
        <div className="text-center border-b border-gray-600 lg:border-b-0 lg:pl-28 lg:flex lg:justify-center pb-2">
          <div className="text-pink-dark font-medium text-smm lg:text-xl">
            見たい条件を選んでください
          </div>
          <div className="font-normal lg:ml-4 text-xs lg:text-sm lg:flex lg:items-center z-40">
            ※複数選択もOK
          </div>
        </div>

        <div className="flex justify-center z-30">
          <span className="flex justify-center items-center lg:hidden w-5 h-5 rotate-[130deg] skew-y-12 -translate-y-2.5 border-t border-r border-gray-600 bg-white">
          </span>
        </div>

        <div
          className={`${
            isOpenCollapses ? "block" : "hidden"
          } lg:block mb-7 md:px-24 lg:px-12 xl:px-36`}
        >
          {FILTER_LIST.map((filter: FilterStructureType) => {
            return (
              <div
                key={filter.parent_order}
                className="grid first:lg:pt-0 pt-4 lg:pt-[30px]"
              >
                <div className="lg:flex lg:justify-between flex justify-center">
                  <div className="text-brown-dark font-bold -mb-1">
                    <div className="flex gap-2">
                      <div className="lg:hidden pb-2">
                        <img
                          src={asset(`/images/${filter.image}`)}
                          className="w-[58px] h-[58px]"
                          alt="image woman"
                        />
                      </div>
                      <div className="hidden lg:block lg:pb-1">
                        <img
                          src={asset(`/images/${filter.image}`)}
                          className="w-[82px] h-[82px]"
                          alt="image woman"
                        />
                      </div>
                      <span className="text-lg leading-none lg:mt-4 lg:text-2xl flex items-center">
                        {filter.question}
                      </span>
                    </div>
                  </div>
                  {filter.modal_question
                    ? (
                      <div className="hidden text-pink justify-center text-sm lg:text-base mt-2 lg:flex lg:items-center">
                        <span
                          onClick={() => handleSetDataModal(filter.items)}
                          className="border leading-none w-[165px] border-pink rounded-md px-3 lg:py-1.5 flex justify-center gap-1 cursor-pointer hover:translate-y-[-2px] hover:transition hover:duration-500 hover:border-b-2 hover:border-violet"
                        >
                          <img
                            src={asset("/images/ico_q_pink.svg")}
                            width={18}
                            height={18}
                            alt="icon question"
                          />
                          {filter.modal_question}
                        </span>
                      </div>
                    )
                    : (
                      ""
                    )}
                </div>

                <div className="parent grid gap-2 text-smm lg:text-xl lg:px-8">
                  {filter.items.map((item: FilterConditionType) => {
                    return (
                      <FilterItem
                        key={item.child_order}
                        name={item.group_question_key}
                        value={item.answer_options}
                        label={item.label}
                        isChecked={item.is_default}
                        subLabel={item.modal_label}
                      />
                    );
                  })}
                </div>
                {filter.modal_question
                  ? (
                    <div className="lg:hidden text-pink flex justify-center text-sm mt-2">
                      <span
                        onClick={() => handleSetDataModal(filter.items)}
                        className="border leading-none min-w-[146px] border-pink rounded-md px-3 py-[10px] flex justify-center gap-1 cursor-pointer hover:translate-y-[-2px] hover:transition hover:duration-500 hover:border-b-2 hover:border-violet"
                      >
                        <img
                          src={asset("/images/ico_q_pink.svg")}
                          width={15}
                          height={15}
                          alt="icon question"
                        />
                        {filter.modal_question}
                      </span>
                    </div>
                  )
                  : (
                    ""
                  )}
              </div>
            );
          })}
        </div>

        <div className="lg:hidden flex justify-center mt-1">
          <div
            className="flex w-[240px]  items-center justify-end gap-10 border border-brown rounded-md p-3 cursor-pointer z-[3] bg-white"
            onClick={handleToggle}
          >
            <div className="text-brown leading-none text-smm">
              {isOpenCollapses ? "検索条件を閉じる" : "検索条件を見る"}
            </div>
            <div className="">
              {isOpenCollapses
                ? (
                  <img
                    src={asset("/images/ico_up_gold.svg")}
                    width={15}
                    height={15}
                    alt="icon up gold"
                  />
                )
                : (
                  <img
                    src={asset("/images/ico_down_gold.svg")}
                    width={15}
                    height={15}
                    alt="icon down gold"
                  />
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
