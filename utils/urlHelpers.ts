import type { ParsedUrlQuery } from 'querystring';

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
