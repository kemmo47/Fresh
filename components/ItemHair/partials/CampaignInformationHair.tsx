// deno-lint-ignore-file prefer-const
import { asset } from "https://deno.land/x/fresh@1.1.3/runtime.ts";
import { useEffect, useState } from "preact/hooks";

type CampaignInformationHairProp = {
  campaign: string | null;
};

export const CampaignInformationHair = ({
  campaign,
}: CampaignInformationHairProp) => {
  const [campaignArray, setCampaignArray] = useState<string[]>([]);
  useEffect(() => {
    if (campaign) {
      let parseCampaign = campaign.split("\n");
      setCampaignArray([...campaignArray, ...parseCampaign]);
    }
  }, []);

  return (
    <div className="col-span-full bg-white h-full lg:border-x-2 lg:border-pink-dark lg:row-start-2 lg:col-start-1">
      {campaignArray?.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-cream-500 p-2 rounded mt-1 lg:gap-5 lg:flex lg:pl-10 lg:py-[15px] lg:mx-3 lg:first:mt-3"
          >
            <div className="relative text-start flex items-center gap-1 lg:gap-2 lg:tracking-[3px]">
              <span className="text-pink-dark text-xss flex-none font-semibold pl-5 lg:text-base">
                キャンペーン情報
              </span>
              <img
                src={asset("./images/ico_present_pink.svg")}
                className="absolute content-[''] w-4 h-5 top-1/2 left-0 -translate-y-1/2 translate-x-0.5"
                alt="ico present pink"
              />
            </div>
            <div className="pl-5">
              <p className="text-brown-dark text-smm font-semibold lg:text-lg lg:tracking-[3px]">
                {item}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
