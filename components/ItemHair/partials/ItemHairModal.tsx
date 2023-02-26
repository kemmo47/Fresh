import { formatMoney, rounding } from "../../../utils/helper.ts";

import { BaseModal } from "../../BaseModal.tsx";

type ItemHairModalProps = {
  itemHairCost: number;
  itemHairNumberOfTimes: number;
  companyType: string;
  companyName: string;
  isShown: boolean;
  handleToggleModal: () => void;
};
export const ItemHairModal = ({
  itemHairCost,
  itemHairNumberOfTimes,
  companyName,
  companyType,
  isShown,
  handleToggleModal,
}: ItemHairModalProps) => {
  return (
    <BaseModal isShown={isShown} hide={handleToggleModal}>
      <div className="px-2">
        <div className="border-b border-[#00000066] pl-3 pb-2 text-xl">
          {companyName}
        </div>
        <div className="pt-0.5 pl-3 pb-4 lg:pt-2">
          <span className="shadow-[0_0_1px_1px] shadow-blue px-3 text-blue font-semibold text-xss lg:text-sm">
            {companyType === "医療"
              ? "医療脱毛"
              : companyType === "サロン"
              ? "美容脱毛"
              : "簡単な脱毛"}
          </span>
          <span className="text-blue pl-2 text-smm lg:text-base">
            {companyType === "医療"
              ? "クリニック"
              : companyType === "サロン"
              ? "サロン"
              : "美容ケア"}
          </span>
        </div>
        <div className="flex justify-center">
          <div className="w-fit bg-gray-800 rounded-[16px] text-white text-xss py-0.5 px-[33px] lg:px-7 lg:py-0 lg:text-base">
            料金内訳
          </div>
        </div>
        <div className="pt-2 grid grid-cols-2">
          <div className="grid grid-rows-3">
            <div className="text-end text-blue border-b border-gray-600">
              <div className="border-r-2 border-gray-600 text-xss px-3 py-3.5 my-1 lg:py-2.5 lg:my-1.5 lg:text-base">
                プランの料金総額
              </div>
            </div>
            <div className="text-end text-blue border-b border-gray-600">
              <div className="border-r-2 border-gray-600 text-xss px-3 py-3.5 my-1 lg:py-2.5 lg:my-1.5 lg:text-base">
                受けられる施術の回数
              </div>
            </div>
            <div className="text-end text-blue border-b border-gray-600">
              <div className="border-r-2 border-gray-600 text-xss px-3 py-3.5 my-1 lg:py-2.5 lg:my-1.5 lg:text-base">
                一回あたり実質料金
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="border-b border-gray-600 flex items-center">
              <div className="grid justify-items-end px-3 w-full lg:w-1/2">
                <div className="flex items-baseline justify-end">
                  <span className="text-2xl font-bold lg:font-medium">
                    {itemHairCost ? formatMoney(itemHairCost) : 0}
                  </span>
                  <span className="text-base">円</span>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-600 flex items-center">
              <div className="grid justify-items-end px-3 w-full lg:w-1/2">
                <div className="flex items-baseline justify-end">
                  <span className="text-2xl font-bold lg:font-medium">
                    {itemHairNumberOfTimes
                      ? itemHairNumberOfTimes
                      : itemHairCost
                      ? 1
                      : 0}
                  </span>
                  <span className="text-base">回</span>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-600 flex items-center">
              <div className="grid justify-items-end px-3 w-full lg:w-1/2">
                <div className="flex items-baseline justify-end">
                  <span className="text-2xl font-bold lg:font-medium">
                    {formatMoney(
                      rounding(
                        itemHairCost /
                          (itemHairNumberOfTimes ? itemHairNumberOfTimes : 1),
                      ),
                    )}
                  </span>
                  <span className="text-base">円</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};
