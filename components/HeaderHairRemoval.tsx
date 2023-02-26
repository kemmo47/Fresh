import { asset, Head } from "$fresh/runtime.ts";

export const HeaderHairRemoval = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={asset("./css/HeaderHairRemoval.css")}
        />
      </Head>
      <div className="w-full text-center max-h-fit lg:pb-6 pb-0 relative">
        <div className="lg:hidden">
          <img
            src={asset("./images/fv-hair-removal-pc.jpg")}
            className="w-full"
            alt="image SP header"
          />
        </div>
        <div className="hidden lg:block bg-pink-light">
          <img
            src={asset("./images/fv-hair-removal-sp.jpg")}
            className="w-full"
            alt="image PC header"
          />
        </div>

        <a
          href="#filter"
          className="firstViewLabel duration-300 ease-in-out w-[560px] bg-pink-dark lg:inline-block hidden text-2xl text-cream-600 font-medium rounded-full py-4 text-center relative top-[-30px]"
        >
          あなたにピッタリのプランを探そう！
        </a>
      </div>
    </>
  );
};
