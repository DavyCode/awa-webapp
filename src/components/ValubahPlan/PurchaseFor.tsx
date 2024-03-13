"use client";
import React, { useState } from "react";
import RadioButton from "../Forms/Button/radio";
import MyselfIcon from "@/assets/icons/MyselfIcon";
import MyselfandOthersIcon from "@/assets/icons/MyselfandOthersIcon";
import Others from "@/assets/icons/Others";

interface PurchaseForCard {
  icon: JSX.Element;
  title: string;
}
[];
interface PurchaseForProps {
  setIsValubahOffersModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PurchaseForData: PurchaseForCard[] = [
  {
    icon: <MyselfIcon />,
    title: "Myself",
  },
  {
    icon: <MyselfandOthersIcon />,
    title: "Myself and Others",
  },
  {
    icon: <Others />,
    title: "Others",
  },
];

const PurchaseFor: React.FC<PurchaseForProps> = ({
  setIsValubahOffersModalOpen,
}) => {
  return (
    <div>
      <p className="text-[#666] text-[14px]">Who are you buying for</p>
      <div className="mt-6 mb-[45px]">
        {PurchaseForData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-solid p-4 mb-2 border-gray-200 hover:bg-[#DAFEDA] focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md"
          >
            <div
              className="flex items-center gap-2 w-full"
              onClick={() => {
                setIsValubahOffersModalOpen(true);
              }}
            >
              <div className="bg-[#F9FDF7] w-10 h-10 rounded-full p-auto flex justify-center items-center">
                {item.icon}
              </div>
              <div>
                <p>{item.title}</p>
                <p className="text-xs text-[#666]">Who are you buying for</p>
              </div>
            </div>
            <div>
              <RadioButton label="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseFor;
