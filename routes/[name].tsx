import { PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";

export default function Greet(props: PageProps) {
  return (
    <div className="p-10">
      <div className="w-1/4">
        <Counter start={3} />
      </div>
      Hello {props.params.name}
    </div>
  );
}
