import React from "react";
import TickIcon from "@/assets/icons/TickIcon";
import Paystack from "@/assets/icons/Paystack";
import WalletIcon from "@/assets/icons/WalletIcon";
import AddIcon from "@/assets/icons/AddIcon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Payment = () => {
  return (
    <div className="w-full sm:w-[471px] mx-auto">
      <div className="bg-[#E0ECD8] flex justify-between items-center border-[1px] border-[#E0ECD8] w-full h-[62px] rounded-lg px-4 py-2 mb-4">
        <div className="flex items-center gap-2">
          <Paystack /> Paystack
        </div>
        <TickIcon />
      </div>
      <div className="bg-[#EBEBEB] flex justify-between items-center border-[1px] border-[#C2C2C2] w-full h-[62px] rounded-lg px-4 py-2">
        <div className="flex items-center gap-2 flex-1">
          <WalletIcon />{" "}
          <p className="text-[#C2C2C2] text-wrap leading-5">
            Wallet balance (₦0.00) Insufficient Fund
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end text-[#3D663D] font-medium ">
          <AddIcon />
          <p>Fund Wallet</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-[24px] mb-[48px]">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#666]"
        >
          By clicking {"continue"} you are agreeing to our
          <Button variant="link" className="-ml-3">Terms and Conditions,</Button>
          <Button variant="link" className="-ml-7">Privacy Policy</Button>
        </label>
      </div>
      <Button
        type="button"
        variant={"secondary"}
        className="w-full text-[#C2C2C2)] h-12"
      >
        Proceed
      </Button>
    </div>
  );
};

export default Payment;
