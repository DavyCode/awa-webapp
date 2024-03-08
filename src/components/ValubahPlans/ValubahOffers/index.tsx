import React, { useState } from "react";
import ValubahOfferHeader from "./ValubahOfferHeader";
import ValubahOfferFormTabs from "./ValubahOfferFormTabs";
import { Button } from "@/components/Forms/Button";

interface ValubahOffersProps {
  setIsBeneficiaryModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ValubahOffers: React.FC<ValubahOffersProps> = ({
  setIsBeneficiaryModalOpen,
}) => {
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
      <ValubahOfferHeader />
      <ValubahOfferFormTabs />
    </div>
  );
};

export default ValubahOffers;
