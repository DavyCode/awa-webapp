import React, { useState } from "react";
import { formatAmountVariant } from "@/lib/utils";
import InputField from "@/components/Forms/input-text";
import { Button } from "@/components/ui/button";

const PlanDetails = () => {
  const [inputValue, setInputValue] = useState<number>(4);

  return (
    <div className="w-full sm:mb-[67px] sm:w-[476px] mx-auto">
      <div className="mt-6">
        <div className="mb-4">
          <InputField
            type="tel"
            value={inputValue}
            name="number-of-beneficiaries"
            label="Enter number of beneficiaries"
            placeholder="1"
          />
        </div>
        <div>
          <InputField
            type="type"
            name="promo-code"
            label="Do you have a promo code(Optional)"
            placeholder="Enter promo code"
          />
        </div>

        <div className="flex flex-col mt-[24px]">
          <span className="bg-[#DAFEDA] text-[#244D24] mb-[32px] py-[21px] sm:h-[62px] rounded-lg flex justify-center items-center font-semibold">
            {inputValue} X ₦{formatAmountVariant(3000)} = ₦{formatAmountVariant(inputValue*3000)}/month
          </span>
          
          <Button
            type="submit"
            className="w-full px-20 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded "
            style={{
              backgroundColor: "var(--primary)",
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
