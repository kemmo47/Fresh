import { FirstView } from "../components/FirstView.tsx";
import Filter from "../islands/Filter.tsx";
import { asset, Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={asset('./css/css.css')} />
      </Head>
      <FirstView />
      <Filter />
    </>
  );
}
