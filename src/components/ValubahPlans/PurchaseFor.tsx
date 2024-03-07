import React from "react";
import RadioButton from "../Forms/Button/radio";
import { PurchaseForData } from "@/lib/data";

const PurchaseFor = () => {
  return (
    <div>
      <p className="text-[#666] text-[14px]">Who are you buying for</p>
      <div>
        {PurchaseForData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-solid p-4 mt-6 mb-[45px] border-gray-200 hover:bg-[#DAFEDA] focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md"
            onClick={() => console.log("true")}
          >
            <div className="flex items-center gap-2 w-full">
              <div className="bg-[#F9FDF7] w-10 h-10 rounded-full flex items-center">
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
