import React from "react";
import InputField from "../Forms/input-text";
import { Button } from "../Forms/Button";

const Beneficiary = () => {
  return (
    <div className=" mb-[67px]">
      <div>
        <h2>Valubah Premium</h2>
        <span className="flex-1 mt-[9px]  flex justify-start text-[24px] font-bold leading-[32px] text-[#3D663D]">
          ₦3,000/month
        </span>
        <div className="bg-red-400 flex items-center w-full h-[20px] mt-[23px]">
          jff
        </div>
      </div>
      <div className="mt-[24px]">
        <div className="mb-[16px]">
          <InputField
            type={"type"}
            name={"name"}
            label="Enter number of beneficiaries"
            placeholder="Enter promo code"
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
            2 X ₦3,000= ₦6,000/month
          </Button>
          <Button>Proceed</Button>
        </div>
      </div>
    </div>
  );
};

export default Beneficiary;
