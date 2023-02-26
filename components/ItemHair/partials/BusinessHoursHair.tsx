// deno-lint-ignore-file prefer-const
type BusinessHoursHairProp = {
  businessHours: string;
};

export const ShowBusinessHoursFull = (hour: string) => {
  const newBusinessHours = hour.split("【").filter((item) => item !== "");

  const businessHours: {
    storeName: string | undefined;
    time: string[];
  }[] = [];

  newBusinessHours.map((item) => {
    let newValue = item.split("\n");
    let storeName = newValue.shift()?.replace("】", "");
    businessHours.push({
      storeName: storeName,
      time: newValue.filter((x) => x !== ""),
    });
  });

  return businessHours;
};

export const BusinessHoursHair = ({ businessHours }: BusinessHoursHairProp) => {
  return (
    <div className="flex flex-col  px-2 lg:pt-1">
      <div className="border-gray-600 flex items-stretch gap-2 lg:grid lg:grid-cols-12 lg:items-center lg:w-full lg:pb-3 lg:pt-2 lg:border-t">
        <div className="flex items-center col-span-2 tracking-[2px] rounded-md text-brown border border-brown px-2 text-smm leading-[19px] text-center whitespace-nowrap lg:justify-end lg:pr-5 lg:border-none lg:text-base">
          営業時間
        </div>
        <div className="flex items-center flex-col gap-2 col-span-7 ml-1 lg:items-start lg:col-span-10 lg:flex-row">
          {ShowBusinessHoursFull(businessHours).map((item, index) => {
            return (
              <div className="items-center lg:flex gap-3" key={index}>
                <div className="rounded-[5px] text-smm lg:text-base text-brown lg:w-fit lg:px-2 lg:text-center">
                  【{item.storeName}】
                </div>
                <div className="text-brown text-smm tracking-[2px] font-medium flex flex-col lg:flex-row lg:gap-4 lg:text-xl">
                  {item.time.map((hour, indexChild) => {
                    return <div key={indexChild}>{hour}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2 mb-1 block lg:hidden">
        <p className="text-xss text-brown">
          営業時間は、各店舗や休日・祝日で異なります。
        </p>
        <p className="text-xss text-brown">
          詳細は公式ページをご確認ください。
        </p>
      </div>
    </div>
  );
};
