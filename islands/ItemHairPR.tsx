import { Company } from "../types/Company.d.ts";
import { useEffect } from "preact/hooks";

interface ItemHairPRProps {
  company: Company[];
}

export default function ItemHairPR(props: ItemHairPRProps) {
  useEffect(() => {
    console.log("company: ", props.company);
  });

  return (
    <>
      company
    </>
  );
}
