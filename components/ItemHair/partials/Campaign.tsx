import { asset } from "https://deno.land/x/fresh@1.1.3/runtime.ts";
import { useEffect, useState } from "preact/hooks";

type CampaignProp = {
  campaign: string | null;
  type: string;
};

export const Campaign = ({ campaign, type }: CampaignProp) => {
  const [campaignArray, setCampaignArray] = useState<string[]>([]);
  useEffect(() => {
    if (campaign) {
      let parseCampaign = campaign.split("\n");
      parseCampaign = parseCampaign.filter((cam) => cam !== "");
      setCampaignArray([...campaignArray, ...parseCampaign]);
    }
  }, []);

  if (type === "rightSideBar") {
    return (
      <>
        {campaignArray?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-cream-500 text-pink-dark p-2 mdh:p-1 text-center rounded-md mb-1 mx-2 relative text-xss last:mb-4"
            >
              <img
                src={asset("images/ico_present_pink.svg")}
                className="w-4 h-5 inline-block"
                alt="ico present pink"
              />
              {item}
            </div>
          );
        })}
      </>
    );
  }
  if (type === "itemCompany") {
    return (
      <>
        <div className="col-span-full bg-white h-full lg:border-x-2 lg:border-brown lg:row-start-2 lg:col-start-1">
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
                    src={asset("images/ico_present_pink.svg")}
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
      </>
    );
  }

  return (
    <>
      {campaignArray?.map((item, index) => {
        return (
          <div key={index} className="first:p-5 pt-0 p-2">
            <div className="bg-cream-500 p-2 text-pink-dark rounded flex">
              <div>
                <img
                  src={asset("images/ico_present_pink.svg")}
                  className="w-4 h-5 inline-block"
                  alt="ico present pink"
                />
              </div>

              <span className="ml-2">{item}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
