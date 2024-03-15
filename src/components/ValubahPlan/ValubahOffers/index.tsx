import React, { useState } from "react";
import ValubahOfferFormTabs from "./ValubahOfferFormTabs";
import { Button } from "@/components/Forms/Button";
import { PlanCardProps } from "@/lib/data";
import { formatAmountVariant } from "@/lib/utils";

interface ValubahOffersProps {
  setIsForWhoPurchaseModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeValubahOffers: () => void;
  planData: PlanCardProps;
}

const ValubahOffers: React.FC<ValubahOffersProps> = ({
  setIsForWhoPurchaseModalOpen,
  closeValubahOffers,
  planData,
}) => {
  return (
    <div className=" h-screen flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-center sticky -top-1 pb-4 bg-white">
        <div className="flex-1 gap-2 ">
          <h2 className="text-lg sm:text-base font-bold mb-2 text-[#1A1A1A]">
            {planData.title}
          </h2>
          <p className="text-[#666666] text-sm sm:text-xs">{planData.desc}</p>
          <span className="text-2xl font-bold text-[#3D663D]">
            ₦{formatAmountVariant(planData.amount)}/month
          </span>
        </div>
        <Button
          type="submit"
          className="w-full px-20 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded sm:w-fit my-2"
          style={{
            backgroundColor: "var(--primary)",
          }}
          onClick={() => {
            setIsForWhoPurchaseModalOpen(true);
            closeValubahOffers();
          }}
        >
          Buy {planData.title === "Diamond(No waiting period)" ? "Valubah Diamond" : planData.title}
        </Button>
      </div>
      <ValubahOfferFormTabs />
    </div>
  );
};

export default ValubahOffers;
