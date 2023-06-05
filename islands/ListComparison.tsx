import Comparison from "../static/data/JSON.json" assert { type: "json" };
import ItemHair from "./ItemHair.tsx";

export default function ListComparison() {
  return (
    <div className="my-3.5 lg:my-11" id="list-company">
      {Comparison.map((item) => {
        return (
          <div className="my-10 lg:px-36" key={item.id}>
            <ItemHair item={item} isPRItem={true} />
          </div>
        );
      })}
    </div>
  );
}
