type TreatmentPlanHairProp = {
  filterList: FilterList;
};

type FilterList = {
  filter_item: string;
  active: boolean;
}[];

export const TreatmentPlanHair = ({ filterList }: TreatmentPlanHairProp) => {
  return (
    <div className="rounded bg-gray-200 lg:bg-white h-full mb-1 mx-0.5 mt-0 px-0.5 py-1 lg:p-0 lg:pt-px lg:m-0 lg:grid lg:grid-cols-12">
      <div className="text-xss text-brown tracking-[2px] pl-1.5 lg:pl-0 lg:text-center lg:text-base lg:col-span-3">
        表示しているプラン
      </div>
      <div className="grid col-span-9 grid-cols-3 gap-[5px] lg:gap-2.5">
        {filterList.map((x, index) => {
          return (
            <div
              key={index}
              className={`${
                x.active
                  ? 'bg-blue text-white'
                  : 'bg-white text-gray-600 lg:bg-gray-200'
              } text-xss text-center py-0.5 rounded lg:rounded-[10px] lg:text-xl lg:py-[5px] flex items-center justify-center`}
            >
              {x.filter_item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
