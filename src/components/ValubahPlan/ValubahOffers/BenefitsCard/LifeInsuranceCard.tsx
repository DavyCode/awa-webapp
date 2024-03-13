import TickCircleIcon from "@/assets/icons/TickCircleIcon";
import React from "react";

const LifeInsuranceList = [
  {
    text: "Death benefit limit up to ₦150,000",
  },
  { text: "Accident  permanent benefit up to ₦50,000" },
  { text: "Medical expenses limit up to ₦30,000" },
];

const LifeInsuranceCard = () => {
  return (
    <div className="border rounded-[8px] py-4 pl-4 pr-[21px]">
      <h2 className="font-bold text text-[#1A1A1A] leading-[20px] text-[14px]">
        Life Insurance
      </h2>

      <ul className="flex flex-wrap w-[439px]">
        {LifeInsuranceList.map((item, index) => (
          <li key={index} className="flex items-center gap-2 mt-4 mr-4">
            <TickCircleIcon />
            <p className="text-[14px] leading-[20px] font-[400] text-[#333]">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LifeInsuranceCard;
