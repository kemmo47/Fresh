import { asset } from "https://deno.land/x/fresh@1.1.3/runtime.ts";

interface NumberHairProps {
  numberHair: number;
}

export default function NumberHair(props: NumberHairProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col w-full">
          <div className="text-violet text-base text-center mb-1 font-bold z-10 lg:text-xl">
            見つかった
            <p>脱毛サロン･クリニック</p>
          </div>
          <div className="bg-white rounded-lg mx-auto w-[215px] relative lg:w-[340px] lg:bg-white-transparent-light">
            <div className="gap-1 flex items-baseline justify-center py-1 text-pink">
              <span className="text-8xl lg:text-11xl font-bold">
                {props.numberHair}
              </span>
              <span className="text-lg lg:text-5xl font-medium">件</span>
            </div>
            <img
              src={asset("/images/ico_woman_concierge.png")}
              className="absolute bottom-0 right-0 translate-x-14 w-[98px] h-[114px] lg:w-auto lg:h-[147px]"
              width="241px"
              height="296px"
              alt="Icon Woman Concierge"
            />
          </div>
        </div>
        <p className="text-brown-dark text-sm mt-3 font-normal">
          ※ 一回あたり料金が安い順に並んでいます
        </p>
      </div>
    </>
  );
}
