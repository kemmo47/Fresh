import FILTER_CONDITION from "../static/data/search_condition.json" assert {
  type: "json",
};
import { Company } from "../types/Company.d.ts";
import { FilterCondition } from "../types/FilterCondition.d.ts";
import { FilterType } from "../types/type.d.ts";

export const getDefaultConditions = (): FilterType => {
  const result: FilterType = {};
  const defaultCheckItem = FILTER_CONDITION.filter(
    (item) => item.is_default === true,
  );
  defaultCheckItem.forEach((item) => {
    const itemCheck = result[item.group_question_key];
    if (typeof itemCheck === "object") {
      //"typeof itemCheck === 'object'" mean itemCheck's value is an Array
      result[item.group_question_key] = [...itemCheck, item.answer_options];
    } else {
      result[item.group_question_key] = [item.answer_options];
    }
  });

  return result;
};

export const getComboDefault = (groupQuestionKey: string) => {
  const comboFilter = FILTER_CONDITION.filter(
    (item) =>
      item.group_question_key === groupQuestionKey &&
      item.combo_default === true,
  ).map((item) => {
    return item.answer_options;
  });
  return comboFilter.sort();
};

export const getPRPlanDefault = (item: Company) => {
  const prPlanDefaultStr = item.pr_plan_default || "";

  const planDefaultPR: string[] = prPlanDefaultStr
    ?.replace(/　| +/g, "")
    .split("\n")
    .filter((i: string) => i !== "") || [];
  return planDefaultPR;
};

export const getLabelComboDefault = (groupQuestionKey: string) => {
  const comboFilter = FILTER_CONDITION.filter(
    (item) =>
      item.group_question_key === groupQuestionKey &&
      item.combo_default === true,
  ).map((item) => {
    return item.label;
  });
  return comboFilter;
};

export const getAllowSearchConditionKeys = (): string[] => {
  return FILTER_CONDITION.reduce<string[]>(
    (result: string[], currentValue: FilterCondition) => {
      if (result.indexOf(currentValue.group_question_key) === -1) {
        result.push(currentValue.group_question_key);
      }
      return result;
    },
    [],
  );
};
