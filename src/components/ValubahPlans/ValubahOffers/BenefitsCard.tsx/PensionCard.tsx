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
      <h2 className="font-bold text text-[#1A1A1A] leading-[20px] text-[14px]">
        Pension(Micro pension)
      </h2>

      <ul className="flex flex-wrap w-[439px]">
        {PensionList.map((item, index) => (
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

export default PensionCard;
