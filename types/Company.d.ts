import companies from "../static/data/JSON.json" assert { type: "json" };

type Company = typeof companies[number];
type CompanyPropertyBooleanType = {
  [k in keyof Company]: Company[k] extends boolean ? k : never | string;
}[keyof Company];
