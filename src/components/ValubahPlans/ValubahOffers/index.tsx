import React, { useState } from "react";
import ValubahOfferFormTabs from "./ValubahOfferFormTabs";
import { Button } from "@/components/Forms/Button";
import { PlanCardProps } from "@/lib/data";

interface ValubahOffersProps {
  setIsBeneficiaryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  planData: PlanCardProps;
}

const ValubahOffers: React.FC<ValubahOffersProps> = ({
  setIsBeneficiaryModalOpen,
  planData,
}) => {
  // console.log(planData);

  return (
    <div className="">
      <div className=" w-full flex self-center bg-white absolute top-[70%]">
        <Button
          className="w-11/12 px-20"
          onClick={() => {
            setIsBeneficiaryModalOpen(true);
          }}
        >
          Buy Valubah Premium
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1 gap-2 ">
          <h2 className="text-[16px] font-bold leading-[19px] mb-[8px]">
            {planData.title}
          </h2>
          <p className=" leading-[20px] text-[#666] text-[12px]">
            {planData.desc}
          </p>
        </div>
        <span className="flex-1  flex justify-end text-[24px] font-bold leading-[32px] text-[#3D663D]">
          ₦{planData.amount}/month
        </span>
      </div>
      <ValubahOfferFormTabs />
    </div>
  );
};

export default ValubahOffers;
