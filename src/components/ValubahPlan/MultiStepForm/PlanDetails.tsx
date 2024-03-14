import React, { useState } from "react";
import { PlanCardProps } from "@/lib/data";
import { formatAmountVariant } from "@/lib/utils";
import InputField from "@/components/Forms/input-text";
import { Button } from "@/components/ui/button";
import ProgressFormSteps from "@/components/ProgressForm";

const PlanDetails = () => {
  const [inputValue, setInputValue] = useState(4);
  // const formattedAmount = Number(formatAmountVariant(planData.planData.amount));

  return (
    <div className=" mb-[67px] w-[476px]">
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
            {inputValue} X ₦{formatAmountVariant(3000)} = ₦6,000/month
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

export default PlanDetails;
