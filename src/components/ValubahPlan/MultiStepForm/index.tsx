import React, { useState } from "react";
import { PlanCardProps } from "@/lib/data";
import { formatAmountVariant } from "@/lib/utils";
import ProgressFormSteps from "@/components/ProgressForm";

interface MultiStepFormProps {
  planData: PlanCardProps;
}

const MultiStepForm: React.FC<MultiStepFormProps> = (planData) => {
  return (
    <div>
      <div className=" ">
        <h2>{planData.planData.title} </h2>
        <span className="flex-1 mt-[9px]  flex justify-start text-[24px] font-bold leading-[32px] text-[#3D663D]">
          ₦{formatAmountVariant(planData.planData.amount)} /month
        </span>
        {/* <div className="bg-red-400 flex items-center w-full h-[20px] mt-[23px]">
      jff
    </div> */}
        <ProgressFormSteps />
      </div>
    </div>
  );
};

export default MultiStepForm;
