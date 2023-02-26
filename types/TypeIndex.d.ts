// deno-lint-ignore-file no-explicit-any
import type { Company } from "../types/Company.d.ts";
import type { CompanyPropertyBooleanType } from './Company.d.ts';
import { FilterCondition } from "./FilterCondition.d.ts";

export type FilterValType =
  | CompanyPropertyBooleanType[]
  | string
  | string[]
  | undefined;

export type FilterType = {
  [key: string]: FilterValType;
};

export type StateReducerType = {
  companies: Company[];
  filterParams: FilterType;
};

export type StateReducerProps = {
  state: StateReducerType;
  dispatch: any
};

export type ActionType = {
  type: string;
  filter: FilterType;
};

export type FilterListType = {
  question: string | null;
  modal_question: string | null;
  image: string;
  group_question_key: string;
  parent_order: number;
  items: FilterCondition[];
};
