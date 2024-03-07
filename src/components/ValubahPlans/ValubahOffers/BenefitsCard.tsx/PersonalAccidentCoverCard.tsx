import TickCircleIcon from "@/assets/icons/TickCircleIcon";
import React from "react";

const AccidentCoverList = [
  {
    text: "24 hours coverage worldwide with no medical examination required",
  },
  { text: "Medical expenses up to ₦50,000" },
  { text: "Death benefit limit up to ₦250,000" },
  { text: "Permanent disability limit up to ₦500,000" },
];

const PersonalAccidentCoverCard = () => {
  return (
    <div className="border rounded-[8px] py-4 pl-4 pr-[21px]">
      <h2 className="font-bold text text-[#1A1A1A] leading-[20px] text-[14px]">
        Personal Accident Cover
      </h2>

      <ul className="flex flex-wrap w-[439px]">
        {AccidentCoverList.map((item, index) => (
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

export default PersonalAccidentCoverCard;
