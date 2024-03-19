"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import DashLine from "@/assets/svg/dash-line.svg";
import PlanDetails from "./ValubahPlan/MultiStepForm/PlanDetails";
import BeneficiariesDetails from "./ValubahPlan/MultiStepForm/BeneficiariesDetails";
import Summary from "./ValubahPlan/MultiStepForm/SummaryTable";
import Payment from "./ValubahPlan/MultiStepForm/Payment";

const steps = [
  { label: "Plan details", content: <PlanDetails /> },
  { label: "Beneficiaries details", content: <BeneficiariesDetails /> },
  { label: "Summary", content: <Summary /> },
  { label: "Payment", content: <Payment /> },
];

const ProgressFormSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(
    new Array(steps.length).fill(false)
  );

  const goToStep = (step: number) => {
    if (step <= currentStep + 1) {
      if (step === currentStep + 1) {
        const updatedCompletedSteps = [...completedSteps];
        updatedCompletedSteps[currentStep] = true;
        setCompletedSteps(updatedCompletedSteps);
      }
      setCurrentStep(step);
    }
  };

  const renderCircle = (index: number) => {
    if (completedSteps[index]) {
      return (
        <span className="bg-[#3D663D] border-[#3D663D] text-white w-[18px] h-[18px] p-1 rounded-full flex items-center justify-center cursor-pointer">
          <Check />
        </span>
      );
    } else if (currentStep === index) {
      return (
        <span className="bg-[#3D663D] border-[#3D663D] text-white rounded-full w-[18px] h-[18px] p-1 flex items-center justify-center cursor-pointer">
          {index + 1}
        </span>
      );
    } else {
      return (
        <span className="border border-gray-300 rounded-full w-[18px] h-[18px] flex items-center justify-center p-1 cursor-pointer"></span>
      );
    }
  };

  return (
    <div className=" w-full mx-auto">
      <div className="flex mt-[24px]">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center mb-4 mx-0.5 gap-1 cursor-pointer"
            onClick={() => goToStep(index)}
          >
            {renderCircle(index)}
            <div className="flex items-center gap-1">
              <label
                className={`text-xs ${
                  currentStep === index ? "text-[#3D663D]" : "text-gray-400"
                }`}
              >
                {step.label}
              </label>
              <DashLine />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 ">{steps[currentStep].content}</div>
    </div>
  );
};

export default ProgressFormSteps;
