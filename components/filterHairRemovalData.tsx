// deno-lint-ignore-file prefer-const
import FilterConditionData from '../static/data/search_condition.json' assert { type: "json" };
import { FilterCondition } from "../types/FilterCondition.d.ts";

export type FilterListType = {
  question: string | null;
  modal_question: string | null;
  image: string;
  group_question_key: string;
  parent_order: number;
  items: FilterCondition[];
};

export const FILTER_LIST = FilterConditionData.reduce<FilterListType[]>(
  (previousValue, currentValue: FilterCondition) => {
    // Find index similar question to group option
    let findIndex = previousValue.findIndex(
      (index) => currentValue.group_question_key === index.group_question_key
    );

    // Push new option by index
    if (findIndex > -1) {
      return previousValue.map((value) => {
        if (value.group_question_key === currentValue.group_question_key) {
          return {
            ...value,
            items: [...value.items, { ...currentValue }].sort((a, b) => {
              if (a.child_order < b.child_order) {
                return -1;
              }
              return 0;
            }),
          };
        }
        return value;
      });
    }

    const newQuestion: FilterListType = {
      question: currentValue.question,
      modal_question: currentValue.modal_question,
      image: currentValue.image,
      group_question_key: currentValue.group_question_key,
      parent_order: currentValue.parent_order,
      items: [currentValue],
    };
    return [...previousValue, newQuestion];
  },
  []
).sort((a, b) => {
  if (a.parent_order < b.parent_order) {
    return -1;
  }
  return 0;
});
