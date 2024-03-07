"use client";
import React, { useState } from "react";
import { formatAmountVariant } from "@/lib/utils";
import clsx from "clsx";

interface PlanCardProps {
  label: string;
  index: number;
  title: string;
  amount: number;
  desc: string;
  setIsForWhoPurchaseModalOpen: any;
}
const PlanCard: React.FC<PlanCardProps> = ({
  label,
  index,
  title,
  amount,
  desc,
  setIsForWhoPurchaseModalOpen,
}) => {
  return (
    <div
      className="w-full sm:w-[322px] h-fit sm:h-[190px] rounded-[8px]  border border-2 mt-10 overflow-hidden"
      onClick={() => {
        setIsForWhoPurchaseModalOpen(true);
      }}
    >
      <div
        className={clsx({
          "w-full h-fit sm:h-screen border-l-4 p-2 pb-6": true,
          "border-[#97912E]": index === 0,
          "border-[#A4813A]": index === 1,
          "border-[#354D72]": index === 2,
          "border-[#703061]": index === 3,
          "border-[#8050B8]": index === 4,
          "border-[#3C804B]": index === 5,
          "border-[#C4C1C7]": index === 6,
        })}
      >
        <div className="w-full flex justify-end">
          <div
            className={clsx({
              "text-xs text-white w-fit px-4 flex justify-center items-center rounded-[4px] sm:h-[26px]":
                true,
              "bg-[#97912E]": index === 0,
              "bg-[#A4813A]": index === 1,
              "bg-[#354D72]": index === 2,
              "bg-[#703061]": index === 3,
              "bg-[#8050B8]": index === 4,
              "bg-[#3C804B]": index === 5,
              "bg-[#C4C1C7] !text-black": index === 6,
            })}
          >
            {label}
          </div>
        </div>
        <div className="sm:pl-[14px] mt-[14px]">
          <h1 className="text-base text-[#1A1A1A] font-bold">{title}</h1>
          <p className="text-2xl font-bold my-3">
            ₦{formatAmountVariant(amount)}/month
          </p>
          <span className="text-gray-400 text-sm">{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
