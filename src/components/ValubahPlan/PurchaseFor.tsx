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
  setIsBeneficiaryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseModal: () => void;
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
  setIsBeneficiaryModalOpen, handleCloseModal
}) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleItemClick = (title: string) => {
    setSelectedItem(title);
    setIsBeneficiaryModalOpen(true);
    handleCloseModal()
  };

  return (
    <div className="w-full sm:max-w-[470px]">
      <p className="text-[#666] text-sm">Who are you buying for</p>
      <div className="mt-6 mb-[45px]">
        {PurchaseForData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-solid p-4 mb-2 border-gray-200 hover:bg-[#DAFEDA] focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md cursor-pointer hover:border-[#DAFEDA]"
            onClick={() => {
              handleItemClick(item.title);
            }}
          >
            <div className="flex justify-between w-full gap-4">
              <div className="flex flex-1 w-full gap-x-4 items-center">
                <span className="flex justify-center items-center w-10 h-10 rounded-full bg-[#F9FDF7]">
                  {item.icon}
                </span>
                <div className="flex flex-col w-fit">
                  <p>{item.title}</p>
                  <p className="text-xs text-[#666]">Who are you buying for</p>
                </div>
              </div>
              <div className="w-fit">
                <RadioButton checked={selectedItem === item.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseFor;
