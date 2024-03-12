import React, { useState } from "react";
import InputField from "../Forms/input-text";
import { Button } from "../Forms/Button";
import { PlanCardProps } from "@/lib/data";
import { formatAmount, formatAmountVariant } from "@/lib/utils";

interface BeneficiaryProps {
  planData: PlanCardProps;
}

const Beneficiary: React.FC<BeneficiaryProps> = (planData) => {
  const [inputValue, setInputValue] = useState(4);
  // const formattedAmount = Number(formatAmountVariant(planData.planData.amount));

  return (
    <div className=" mb-[67px] w-[476px]">
      <div className=" ">
        <h2>{planData.planData.title} </h2>
        <span className="flex-1 mt-[9px]  flex justify-start text-[24px] font-bold leading-[32px] text-[#3D663D]">
          ₦{formatAmountVariant(planData.planData.amount)} /month
        </span>
        <div className="bg-red-400 flex items-center w-full h-[20px] mt-[23px]">
          jff
        </div>
      </div>
      <div className="mt-[24px]">
        <div className="mb-[16px]">
          <InputField
            type={"number"}
            value={""}
            name={"name"}
            label="Enter number of beneficiaries"
            placeholder="2"
          />
        </div>
        <div>
          <InputField
            type={"type"}
            name={"name"}
            label="Do you have a promo code(Optional)"
            placeholder="Enter promo code"
          />
        </div>

        <div className="flex flex-col mt-[24px]">
          <Button className="bg-[#DAFEDA] text-[#244D24] mb-[32px] py-[21px]">
            {inputValue} X ₦{formatAmountVariant(planData.planData.amount)} =
            ₦6,000/month
          </Button>
          <Button
            onClick={() => {
              console.log("true");
            }}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Beneficiary;
