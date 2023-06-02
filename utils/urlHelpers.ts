import type { ParsedUrlQuery } from 'querystring';

import { SEARCH_CONDITION_STORAGE_KEY } from './constant';

export const getSingleValueFromQueryParam = (
  query: ParsedUrlQuery,
  key: string
) => {
  const values = query[key];
  if (typeof values === 'string') {
    return values;
  }
  if (Array.isArray(values) && values.length > 0) {
    return values[0];
  }
  return undefined;
};

interface QueryObject {
  [key: string]: Array<string>;
}

/**
 * Input: {
 *  "type_of_company": ["clinic"],
 *  "plan": ["body", "face", "vio"],
 *  "payment_method": ["installment_loan", "one_time"]
 * }
 *
 * Output: type_of_company=clinic&plan=body&plan=face&plan=vio&payment_method=installment_loan&payment_method=one_time
 * @param queryObj
 * @returns
 */
export const convertObjectToQueryStringUrl = (
  queryObj: QueryObject
): string => {
  let queryString = '';
  for (let key in queryObj) {
    const values = queryObj[key]?.map((value) => `${key}=${value}`).join('&');
    queryString += `${values}&`;
  }
  return `${queryString.substring(0, queryString.length - 1)}`;
};

export const getSearchConditionPath = (): string => {
  if (typeof window !== 'undefined') {
    let searchConditions = JSON.parse(
      localStorage.getItem(SEARCH_CONDITION_STORAGE_KEY) ?? '{}'
    );
    return `${convertObjectToQueryStringUrl(searchConditions)}`;
  }
  return '';
};

export const renderParam = (
  params: Record<string, string | number | boolean>
) => {
  let paramString = '';
  if (typeof window !== 'undefined') {
    paramString = window.location.search ? window.location.search : '';
  }
  const searchParams = new URLSearchParams(paramString);
  for (const [key, value] of Object.entries(params)) {
    searchParams.set(key, value.toString());
  }
  return `?${searchParams.toString()}`;
};
