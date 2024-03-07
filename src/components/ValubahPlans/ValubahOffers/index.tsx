import React, { useState } from "react";
import FormTabs from "../../EnrolOnBoarding/FormTabs";
import BenefitsComponent from "./BenefitsCard.tsx";
import ValubahOfferHeader from "./ValubahOfferHeader";
import ValubahOfferFormTabs from "./ValubahOfferFormTabs";

const ValubahOffers = () => {
  return (
    <div>
      <ValubahOfferHeader />
      <ValubahOfferFormTabs />
    </div>
  );
};

export default ValubahOffers;
