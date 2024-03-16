import TickCircleIcon from "@/assets/icons/TickCircleIcon";
import React from "react";

const PensionList = [
  {
    text: "Register for micro pension",
  },
  { text: "Remit into your micro pension account" },
  { text: "Use penpay to remit into your micro pension account" },
];

const PensionCard = () => {
  return (
    <div className="border rounded-[8px] py-4 pl-4 pr-[21px]">
      <h2 className="font-bold text-[#1A1A1A] text-sm">
        Pension(Micro pension)
      </h2>

      <ul className="flex flex-wrap w-full sm:w-[439px]">
        {PensionList.map((item, index) => (
          <li key={index} className="flex sm:items-center gap-2 mt-4 sm:mr-4">
            <span className="w-4 h-4">
              <TickCircleIcon />
            </span>
            <p className="text-[14px] leading-[20px] font-[400] text-[#333]">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PensionCard;
