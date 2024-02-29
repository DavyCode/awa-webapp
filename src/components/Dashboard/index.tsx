'use client'
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import CardInfos from "./CardInfos";
import ModalComponent from "../Modal";
import InsertPFAPin from "./InsertRSA";
import { Button } from "../ui/button";
import VerifyEmailComponent from "../VerifyEmail";
import EnrolOnBoarding from "../EnrolOnBoarding";

const Dashboard = () => {
  const [hasPFAPin] = useState(false);
  const [newUserTourModalOpen, setIsNewUserModalOpen] = useState(false)
  const [isInsertModalOpen, setIsInsertModalOpen] = useState(false)

  useEffect(() => {

  },[])

  const closeGetStartedModal = () => setIsNewUserModalOpen(false)
  const handleCloseInsertModal = () => setIsInsertModalOpen(false);

  return (
    <div className="sm:pl-10 sm:pr-[10px] mt-6 relative">
      <VerifyEmailComponent />
      <UserCard
        hasPFAPin={hasPFAPin}
        setIsInsertModalOpen={setIsInsertModalOpen}
      />
      <CardInfos />
      <ModalComponent
        isOpen={isInsertModalOpen}
        onClose={handleCloseInsertModal}
        title={"Insert RSA Pin"}
        size="medium"
      >
        <InsertPFAPin handleCloseInsertModal={handleCloseInsertModal} />
      </ModalComponent>
      <ModalComponent
        isOpen={newUserTourModalOpen}
        onClose={closeGetStartedModal}
        size="medium"
      >
        <div className="w-full sm:w-[237px] mx-auto text-center flex flex-col sm:mb-[47px] justify-center items-center">
          <p className="text-xs mb-1">Welcome to Awabah</p>
          <h1 className="text-xl font-bold text-black sm:mb-[10px]">
            Lets Get Started
          </h1>
          <p className="text-xs font-normal text-[#333] sm:mb-4">
            Now manage your Valubah purchases in one place
          </p>

          <p className="text-xs font-normal text-[#333] sm:mb-[17px]">
            Let us give you a product tour.Click on start
          </p>
          <Button
            type="button"
            className="py-[12.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] w-full rounded px-4"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Start
          </Button>
        </div>
      </ModalComponent>

      <EnrolOnBoarding />
    </div>
  );
};

export default Dashboard;
