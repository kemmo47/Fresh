// deno-lint-ignore-file no-explicit-any
import filter_conditions from "../static/data/JSON.json" assert { type: "json" };
import { CompanyPropertyBooleanType } from "./Company.d.ts";


type FilterCondition = typeof filter_conditions[number] & {
  group_question_key: any;
  answer_options: CompanyPropertyBooleanType;
};
