"use client";
import { Button } from "@/components/Forms/Button";
import React, { useState } from "react";
import { BeneficiarySummaryData } from "@/lib/data";
import TableComponent from "./Table";
import SheetComponent from "@/components/Modal/SheetComponent";
import PaymentTermsModal from "../PaymentTermsModal";

const Summary = () => {
  const [paymentTermsOpen, setPaymentTermsOpen] = useState(false);
  const handlePaymentTermsClose = () => {
    setPaymentTermsOpen(false);
  };
  return (
    <>
      <div className="space-y-6 h-[100vh]">
        <p className="text-[#1A1A1A]">Beneficiary Summary</p>
        <TableComponent />
        <div className="flex justify-center">
          <div className="w-10/12 h-[62px] bg-[#DAFEDA] rounded flex flex-col items-center justify-center text-[#244D24]">
            <span className="text-[12px] leading-5">Subtotal</span>
            <span className="font-[700]">₦140,500/month</span>
          </div>
        </div>
        <div className="w-3/12 flex flex-col mx-auto space-y-4">
          <div className="flex justify-between">
            <p>Total:</p>
            <span>₦140,000</span>
          </div>
          <div className="flex justify-between">
            <p>Transaction charge:</p>
            <span>₦500</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-[50%] px-20 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded "
            style={{
              backgroundColor: "var(--primary)",
            }}
            onClick={() => {
              setPaymentTermsOpen(true);
            }}
          >
            Proceed
          </Button>
        </div>
      </div>
      <SheetComponent
        isOpen={paymentTermsOpen}
        handleClose={handlePaymentTermsClose}
      >
        <PaymentTermsModal />
      </SheetComponent>
    </>
  );
};

export default Summary;
