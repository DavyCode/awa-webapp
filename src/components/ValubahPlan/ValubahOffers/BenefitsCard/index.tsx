import React from "react";
import HealthInsuranceCard from "./HealthInsuranceCard";
import PensionCard from "./PensionCard";
import LifeInsuranceCard from "./LifeInsuranceCard";
import PersonalAccidentCoverCard from "./PersonalAccidentCoverCard";

const BenefitsComponent = () => {
  return (
    <div className="space-y-4 mb-10">
      <HealthInsuranceCard />
      <PensionCard />
      <LifeInsuranceCard />
      <PersonalAccidentCoverCard />
    </div>
  );
};

export default BenefitsComponent;
