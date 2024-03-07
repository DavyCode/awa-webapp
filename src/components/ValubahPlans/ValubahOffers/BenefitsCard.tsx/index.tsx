import React from "react";
import HealthInsuranceCard from "./HealthInsuranceCard";
import PensionCard from "./PensionCard";
import LifeInsuranceCard from "./LifeInsuranceCard";
import PersonalAccidentCoverCard from "./PersonalAccidentCoverCard";

const BenefitsComponent = () => {
  return (
    <div className="mt-[23px] space-y-4">
      <HealthInsuranceCard />
      <PensionCard />
      <LifeInsuranceCard />
      <PersonalAccidentCoverCard />
    </div>
  );
};

export default BenefitsComponent;
