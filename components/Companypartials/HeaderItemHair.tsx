import type { Company } from "../../types/Company.d.ts";

type HeaderItemHairProps = {
  status: boolean;
  company: Company;
};

export const HeaderItemHair = ({ company, status }: HeaderItemHairProps) => {
  const companyName = company.company_name || "";
  return (
    <>
      {status
        ? (
          <div
            className={`${status ? "bg-pink-dark" : "bg-brown"}
            bg_badge text-cream-600 w-[32px] h-[42px] text-smm pt-1.5 -translate-y-px translate-x-1 lg:tracking-[2px] lg:pt-3 lg:translate-x-4 lg:w-[50px] lg:h-[67px] lg:text-xl`}
          >
            PR
          </div>
        )
        : (
          ""
        )}
      <div
        className={`${
          status ? "bg-brown" : "bg-gray-200"
        } flex justify-between items-center p-[5px] rounded rounded-b-none lg:pr-5 lg:rounded-none`}
      >
        <div className={`${status ? "pl-[50px] lg:pl-20" : "pl-3"}`}>
          <span
            className={`${
              status ? "text-white" : "text-brown-dark"
            } text-smm font-semibold tracking-[3px] lg:text-xl`}
          >
            {companyName}
          </span>
        </div>
        <div
          className={`${
            status ? "bg-white" : "bg-brown"
          } rounded-[5px] px-1.5 flex items-center h-fit py-px lg:px-2`}
        >
          <span
            className={`${
              status ? "text-brown" : "text-white"
            }  text-xss lg:text-base`}
          >
            {company.company_type === "医療"
              ? "医療脱毛クリニック"
              : company.company_type === "サロン"
              ? "美容脱毛サロン"
              : ""}
          </span>
        </div>
      </div>
    </>
  );
};
