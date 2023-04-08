import React from "react";
import { Company, CompanyPropertyBooleanType } from "./Company.d.ts";

export type FilterContextType = {
  state: StateReducerType;
  dispatch: React.Dispatch<ActionType>;
};

export type StateReducerType = {
  companies: Company[];
  filterParams: FilterType;
};

export type ActionType = {
  type: string;
  filter: FilterType;
};

export type FilterType = {
  [key: string]: FilterValType;
};

export type FilterValType =
  | CompanyPropertyBooleanType[]
  | string
  | string[]
  | undefined;
