import { createContext } from "https://esm.sh/v95/preact@10.11.0/src/index";
import {
  StateReducerProps
} from "../types/TypeIndex.d.ts";

const initValue: StateReducerProps = {
  state: {
    companies: [],
    filterParams: {},
  },
  dispatch: () => { },
};

export const FilterContext = createContext(initValue);
