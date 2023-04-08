// deno-lint-ignore-file prefer-const
import {useContext, useEffect, useState} from 'preact/hooks';
import { CompanyPropertyBooleanType } from "../types/Company.d.ts";
import { FilterContextType, FilterType, FilterValType } from "../types/type.d.ts";
import FilterContext from '../hook/FilterContext.ts';
import { asset } from "https://deno.land/x/fresh@1.1.3/runtime.ts";

type FilterItemProps = {
  isChecked: boolean;
  value: string;
  label: string;
  name: string;
  subLabel: string | null;
  extraClasses?: string;
};

export default function FilterItem({
  isChecked,
  value,
  name,
  label,
}: FilterItemProps) {
  const [isCheck, setIsCheck] = useState(isChecked);
  const { state, dispatch }: FilterContextType = useContext(FilterContext);

  const getUpdatedFilterParams = (
    keyName: string,
    keyValue: CompanyPropertyBooleanType
  ): FilterType => {
    let valueParams: FilterValType;

    if (state.filterParams?.hasOwnProperty(keyName)) {
      valueParams = state.filterParams[keyName];
    }
    if (valueParams && Array.isArray(valueParams)) {
      let oldItemIndex = valueParams.indexOf(keyValue);

      if (oldItemIndex > -1) {
        valueParams.splice(oldItemIndex, 1);
      } else {
        valueParams.push(keyValue);
      }

      return { [keyName]: valueParams };
    }

    valueParams = [];
    valueParams.push(keyValue);
    return { [keyName]: valueParams };
  };

  const handleCheckActive = () => {
    const newFilterParams: FilterType = getUpdatedFilterParams(name, value);
    setIsCheck(!isCheck);
    const queryUrl = {
      ...state.filterParams,
      ...newFilterParams,
    };

    dispatch({
      type: 'UPDATE_FILTER_PARAMS',
      filter: queryUrl,
    });

  };

  useEffect(() => {
    // const query: FilterValType = getSearchConditions()[name];
    const query: FilterValType = [];
    const isActive: boolean | undefined = query?.includes(value);
    setIsCheck(isActive ?? false);
  }, []);

  return (
    <>
      <div
        className={`${
          isCheck
            ? 'text-white text-outline-blue'
            : 'text-gray-800 lg:hover:bg-pink-light'
        } min-w-max relative group flex justify-center rounded-md py-[17px] lg:py-3.5 px-2 cursor-pointer font-bold bg-gray-200 duration-300 ease-out z-10
       `}
        onClick={() => {
          handleCheckActive();
        }}
      >
        <span
          className={` ${
            isCheck ? 'bg-blue w-full' : 'w-0'
          } absolute rounded-md top-0 left-0 flex h-full transition-all duration-300 ease-out opacity-90`}
        ></span>

        <div className="absolute top-0 left-1 lg:left-4 z-10">
          {isCheck ? (
            <img
              src={asset('/images/ico_bookmark.svg')}
              width={19}
              height={28}
              alt="icon question"
            />
          ) : (
            ''
          )}
        </div>
        <div
          className="z-30 leading-none break-all"
          style={{ fontSize: 'min(max(7px, 3.5vw), 20px)' }}
        >
          {' '}
          {label}
        </div>
      </div>
    </>
  );
};
