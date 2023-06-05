import getBusinessHours from "../../utils/getBusinessHours.ts";

type BusinessHoursHairProp = {
  businessHours: string;
};

export const BusinessHoursHair = ({ businessHours }: BusinessHoursHairProp) => {
  return (
    <div className="flex flex-col h-full justify-center px-2 lg:pt-1">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4 rounded-md text-brown border border-brown text-smm lg:text-base flex items-center justify-center">
          営業時間
        </div>
        <div className="col-span-8 flex items-start flex-col">
          {getBusinessHours(businessHours).map((item, key) => {
            return (
              <div key={key}>
                <div className="rounded-[5px] text-smm lg:text-base text-brown lg:w-fit lg:px-2 lg:text-center">
                  【{item.label}】
                </div>
                <div className="text-brown text-smm font-medium flex flex-col lg:gap-1 lg:text-xl">
                  {item.listTime.map((hour, indexChild) => {
                    return <div key={indexChild}>{hour}</div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2 mb-1 block ">
        <p className="text-xss text-brown">
          営業時間は、各店舗や休日・祝日で異なります。
        </p>
        <p className="text-xss text-brown">
          料金は分割払いの手数料を含みます。
        </p>
        <p className="text-xss text-brown">分割回数と料金は一例になります。</p>
        <p className="text-xss text-brown">
          最新の営業時間・料金プランは公式ページをご確認ください。
        </p>
      </div>
    </div>
  );
};
