import React from "react";
import { Button } from "../Forms/Button";

const SuccessfulTransactionModal = () => {
  return (
    <div>
      <div className="my-9">Loading Animation</div>
      <div className="space-y-8 flex flex-col items-center">
        <div className="space-y-4 flex flex-col items-center">
          <h1 className="text-xl font-bold text-[#1A1A1A]">
            Transaction Succesful
          </h1>
          <p className="w-10/12 text-wrap text-sm font-extralight text-[#1A1A1A]">
            You have successfully bought Valuebah premimum for ₦2000/month via
            paystack
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <Button
            type="submit"
            className="w-full px-20 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded "
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Next
          </Button>
          <Button variant="outline">View reciept</Button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <u className="text-[#3D663D]">Invite Beneficiaries</u>
          <p>Dont have a micro pension account?</p>
          <u className="text-[#3D663D]">Enrol and earn ₦200 naira</u>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulTransactionModal;
