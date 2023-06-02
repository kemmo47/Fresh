import type { FilterCondition } from '@/types/FilterCondition';

// eslint-disable-next-line import/extensions
import FilterConditionData from '../../public/data/search_condition.json';

export const getPlans = (): FilterCondition[] => {
  let planRemoval = FilterConditionData.filter(
    (item) => item.group_question_key === 'plan'
  );
  if (planRemoval) {
    planRemoval = planRemoval.sort((filterConditionA, filterConditionB) => {
      return filterConditionA.child_order - filterConditionB.child_order;
    });
  }
  return planRemoval;
};
