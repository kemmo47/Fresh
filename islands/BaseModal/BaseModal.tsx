import React from "react";
import { Close } from "../../components/Icon/Close.tsx";

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  children: React.ReactNode;
}

export const BaseModal = ({ isShown, hide, children }: ModalProps) => {
  return (
    <div
      className={`${
        isShown ? "flex" : "hidden"
      } top-0 left-0 z-50 fixed h-full w-full items-center justify-center bg-[#888888ab] px-4`}
      onClick={hide}
    >
      <div
        className={`${
          isShown ? "show_modal" : "hidden_modal"
        } max-h-[80vh] w-[600px] rounded-[10px] bg-white lg:pb-5 py-3 px-1`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative">
          {children}
          <button
            onClick={hide}
            className="hover:text-secondary absolute right-2 pt-1 group lg:pt-0 top-0 rounded-md"
          >
            <Close
              classNameI={"duration-200 ease-in-out group-hover:text-pink text-gray-600"}
              classNameSvg={"w-6 h-6"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
