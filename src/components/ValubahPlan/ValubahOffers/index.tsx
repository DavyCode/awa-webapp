import React, { useState } from "react";
import ValubahOfferFormTabs from "./ValubahOfferFormTabs";
import { Button } from "@/components/Forms/Button";
import { PlanCardProps } from "@/lib/data";
import { formatAmountVariant } from "@/lib/utils";

interface ValubahOffersProps {
  setIsBeneficiaryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  planData: PlanCardProps;
}

const ValubahOffers: React.FC<ValubahOffersProps> = ({
  setIsBeneficiaryModalOpen,
  planData,
}) => {
  return (
    <div className=" h-screen flex flex-col">
      <div className=" w-full sm:w-[355px] h-12 flex self-center justify-center bg-white absolute bottom-14">
        <Button
          type="submit"
          className="w-full px-20 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded "
          style={{
            backgroundColor: "var(--primary)",
          }}
          onClick={() => {
            setIsBeneficiaryModalOpen(true);
          }}
        >
          Buy {planData.title}
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-1 gap-2 ">
          <h2 className="text-base font-bold mb-2 text-[#1A1A1A]">
            {planData.title}
          </h2>
          <p className="text-[#666666] text-xs">{planData.desc}</p>
        </div>
        <span className="flex-1  flex justify-end text-2xl font-bold text-[#3D663D]">
          ₦{formatAmountVariant(planData.amount)}/month
        </span>
      </div>
      <ValubahOfferFormTabs />
    </div>
  );
};

export default ValubahOffers;
