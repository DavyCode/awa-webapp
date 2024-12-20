"use client";
import React, { useState } from "react";
import { formatAmountVariant } from "@/lib/utils";
import clsx from "clsx";
import ModalComponent from "@/components/Modal";
import PurchaseFor from "@/components/ValubahPlan/PurchaseFor";
import SheetComponent from "@/components/Modal/SheetComponent";
import ValubahOffers from "@/components/ValubahPlan/ValubahOffers";
import MultiStepForm from "@/components/ValubahPlan/MultiStepForm";

interface PlanData {
  label: string;
  index: number;
  title: string;
  amount: number;
  desc: string;
}

interface PlanCardProps {
  planData: PlanData;
}

const PlanCard: React.FC<PlanCardProps> = ({ planData }) => {
  const { label, index, title, amount, desc } = planData;

  const [isForWhoPurchaseModalOpen, setIsForWhoPurchaseModalOpen] =
    useState(false);
  const [isValubahOffersModalOpen, setIsValubahOffersModalOpen] =
    useState(false);
  const [isBeneficiaryModalOpen, setIsBeneficiaryModalOpen] = useState(false);

  const openForWhoPurchaseModal = () => setIsForWhoPurchaseModalOpen(true);
  const closeForWhoPurchaseModal = () => setIsForWhoPurchaseModalOpen(false);
  const closeValubahOffersModal = () => setIsValubahOffersModalOpen(false);
  const closeBeneficiaryModal = () => setIsBeneficiaryModalOpen(false);

  return (
    <>
      <div
        className="w-full h-fit rounded-lg border-2 mt-4 sm:mt-10 group overflow-hidden group-hover:shadow-xl"
        onClick={() => setIsValubahOffersModalOpen(true)}
      >
        <div
          className={clsx({
            "w-full h-fit border-l-4 p-2 pb-6 group-hover:cursor-pointer":
              true,
            "border-[#97912E]": index === 0,
            "border-[#A4813A]": index === 1,
            "border-[#354D72]": index === 2,
            "border-[#703061]": index === 3,
            "border-[#8050B8]": index === 4,
            "border-[#3C804B]": index === 5,
            "border-[#C4C1C7]": index === 6,
          })}
        >
          <div className="w-full flex justify-end">
            <div
              className={clsx({
                "text-xs text-white w-fit px-4 flex justify-center items-center rounded-[4px] h-6 sm:h-[26px]":
                  true,
                "bg-[#97912E]": index === 0,
                "bg-[#A4813A]": index === 1,
                "bg-[#354D72]": index === 2,
                "bg-[#703061]": index === 3,
                "bg-[#8050B8]": index === 4,
                "bg-[#3C804B]": index === 5,
                "bg-[#C4C1C7] text-black": index === 6,
              })}
            >
              {label}
            </div>
          </div>
          <div className="sm:pl-[14px] mt-[14px]">
            <h1 className="text-base text-[#1A1A1A] font-bold">{title}</h1>
            <p className="text-2xl font-bold my-3">
              ₦{formatAmountVariant(amount)}/month
            </p>
            <span className="text-gray-400 text-sm">{desc}</span>
          </div>
        </div>
      </div>
      <ModalComponent
        isOpen={isForWhoPurchaseModalOpen}
        onClose={closeForWhoPurchaseModal}
        title={title}
        size="custom"
        width={470}
      >
        <PurchaseFor setIsBeneficiaryModalOpen={setIsBeneficiaryModalOpen} handleCloseModal={closeForWhoPurchaseModal} />
      </ModalComponent>
      <SheetComponent
        isOpen={isValubahOffersModalOpen}
        handleClose={closeValubahOffersModal}
      >
        <ValubahOffers
          setIsForWhoPurchaseModalOpen={setIsForWhoPurchaseModalOpen}
          closeValubahOffers={closeValubahOffersModal}
          planData={planData}
        />
      </SheetComponent>
      <SheetComponent
        isOpen={isBeneficiaryModalOpen}
        handleClose={closeBeneficiaryModal}
        customizedWidth={705}
      >
        <MultiStepForm planData={planData} />
      </SheetComponent>
    </>
  );
};

export default PlanCard;
