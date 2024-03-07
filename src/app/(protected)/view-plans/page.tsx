"use client";
import { useRouter } from "next/navigation";
import BackIcon from "@/assets/svg/back-icon.svg";
import PlanCard from "./card";
import { PlanData } from "@/lib/data";
import { useState } from "react";
import ModalComponent from "@/components/Modal";
import PurchaseFor from "@/components/ValubahPlans/PurchaseFor";
import RightSideModal from "@/components/Modal/RightSideModal";
import ValubahOffers from "@/components/ValubahPlans/ValubahOffers";

const ViewPlans = () => {
  const [modalStack, setModalStack] = useState([]);

  const [isForWhoPurchaseModalOpen, setIsForWhoPurchaseModalOpen] =
    useState(false);

  const closeForWhoPurchaseModal = () => setIsForWhoPurchaseModalOpen(false);

  const [isValubahOffersModalOpen, setIsValubahOffersModalOpen] =
    useState(false);

  const handleCloseValubahOffersModal = () => {
    setIsValubahOffersModalOpen(false);
  };
  const router = useRouter();
  return (
    <div className="px-10 mt-12 mb-14">
      <div className="w-full sm:w-[253px] space-y-4">
        <div
          className="w-full sm:w-[90px] gap-2 flex text-[#3D663D] cursor-pointer items-center"
          onClick={() => router.back()}
        >
          <span className="w-4 h-4">
            <BackIcon />
          </span>
          Go back
        </div>
        <div className="text-sm text-[#C2C2C2]">
          Dashboard /Total valuebah/
          <span className="text-[#3D663D]">View plans</span>
        </div>
        <h1 className="text-xl text-[#1A1A1A] font-medium">View Plans</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-between flex-wrap">
        {PlanData.map(({ label, title, amount, desc }, index) => (
          <PlanCard
            label={label}
            index={index}
            title={title}
            amount={amount}
            desc={desc}
            key={amount}
            setIsForWhoPurchaseModalOpen={setIsForWhoPurchaseModalOpen}
          />
        ))}
        <ModalComponent
          isOpen={isForWhoPurchaseModalOpen}
          onClose={closeForWhoPurchaseModal}
          title={"Valubah Premium"}
          size="medium"
        >
          <PurchaseFor
            setIsValubahOffersModalOpen={setIsValubahOffersModalOpen}
          />
        </ModalComponent>
        <RightSideModal
          isOpen={isValubahOffersModalOpen}
          onClose={handleCloseValubahOffersModal}
          title=""
          size="medium"
          width="523px"
        >
          <ValubahOffers />
        </RightSideModal>
      </div>
    </div>
  );
};

export default ViewPlans;
