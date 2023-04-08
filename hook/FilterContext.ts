import { createContext } from "preact";

const initValue = {
  state: {
    companies: [],
    filterParams: {},
  },
  dispatch: () => { },
};

const FilterContext = createContext(initValue);

export default FilterContext
