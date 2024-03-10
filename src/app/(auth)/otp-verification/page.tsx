import OTPVerification from "@/components/OTPverification";
import OTPProvider from "@/context/OTPContext";
import React from "react";

const page = () => {
  return (
    <OTPProvider>
      <OTPVerification />
    </OTPProvider>
  );
};

export default page;
