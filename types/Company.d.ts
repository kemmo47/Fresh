import companies from "../static/data/JSON.json" assert { type: "json" };

type Company = typeof companies[number];

// CompanyPropertyBoolean is list of key have value have type is boolean Ex: online | telephone | ...
type CompanyPropertyBooleanType = {
  [k in keyof Company]: Company[k] extends boolean ? k : never | string;
}[keyof Company];
