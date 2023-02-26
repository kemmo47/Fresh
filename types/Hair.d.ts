import hairs from "../static/data/JSON.json" assert { type: "json" };

type Hair = typeof hairs[number];

type HairPropertyBooleanType = {
  [k in keyof Hair]: Hair[k] extends boolean ? k : never;
}[keyof Hair];
