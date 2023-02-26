import type { FilterType } from '../types/TypeIndex.d.ts';
import { SEARCH_CONDITION_STORAGE_KEY } from '../utils/constant.ts';
import {
  getAllowSearchConditionKeys,
  getDefaultConditions,
} from '../utils/filterConditions.ts';


type ParsedUrlQuery = {
  [key: string]: string | string[] | undefined
}

const ALLOW_SEARCH_CONDITION_KEYS = getAllowSearchConditionKeys();

export const useSearchCondition = () => {
  const handleSetSearchConditions = (queryObject: FilterType) => {
    localStorage.setItem(
      SEARCH_CONDITION_STORAGE_KEY,
      JSON.stringify(queryObject)
    );
  };

  const getAllowFilterConditions = (
    routerQuery: ParsedUrlQuery
  ): FilterType => {
    if (Object.keys(routerQuery).length > 0) {
      return Object.entries(routerQuery).reduce<FilterType>((a, b) => {
        if (b && ALLOW_SEARCH_CONDITION_KEYS.includes(b[0])) {
          const filterConditionItem: FilterType = { [b[0]]: b[1] };
          a = { ...a, ...filterConditionItem };
        }
        return a;
      }, {});
    }
    return {};
  };

  const getFilterConditionFromLocalStorage = () => {
    return (
      typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem(SEARCH_CONDITION_STORAGE_KEY) ?? '{}')
    );
  };

  const getSearchConditions = (): FilterType => {
    const routerSearchObject = JSON.parse(
      `{"${location?.search.replace("\?", "").replace(/\&/g, '"\,"').replace(
        /\=/g,
        '"\:"',
      )
      }"}`,
    );

    const allowFilterConditions = getAllowFilterConditions(routerSearchObject);

    if (Object.keys(allowFilterConditions).length > 0) {
      return allowFilterConditions;
    }
    const queryUrlFromLocal = getFilterConditionFromLocalStorage();
    if (Object.keys(queryUrlFromLocal).length > 0) {
      return queryUrlFromLocal;
    }

    return getDefaultConditions();
  };

  return {
    getFilterConditionFromLocalStorage,
    getSearchConditions,
    handleSetSearchConditions,
  };
};
