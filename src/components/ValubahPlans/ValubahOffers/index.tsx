import React, { useState } from "react";
import FormTabs from "../../EnrolOnBoarding/FormTabs";
import BenefitsComponent from "./BenefitsCard.tsx";
import ValubahOfferHeader from "./ValubahOfferHeader";
import ValubahOfferFormTabs from "./ValubahOfferFormTabs";
import { Button } from "@/components/Forms/Button";

const ValubahOffers = () => {
  return (
    <div className="">
      <ValubahOfferHeader />
      <ValubahOfferFormTabs />
    </div>
  );
};

export default ValubahOffers;
