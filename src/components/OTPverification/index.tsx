"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import InputFieldPhoneNumber from "@/components/Forms/input-phone-number";
import InputField from "@/components/Forms/input-text";
import { Button } from '../Forms/Button';
import Link from 'next/link';
import OtpInput from '../Forms/OtpInput';

interface IProp {
    modeOfVerification?: string
}

const OTPVerification:React.FC<IProp> = ({modeOfVerification = "phone number"}) => {
  return (
    <div className="flex h-fit rounded-md shadow flex-col px-10 py-6 my-[49px] justify-center items-center w-full sm:w-[518px] mx-auto border border-gray-200">
      <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
        OTP Sent
      </p>
      <span className="mt-2 mb-4 text-[#333333] text-center text-sm sm:text-base">
        An OTP has been sent to your {modeOfVerification}
      </span>
      <OtpInput length={4} onComplete={() => {}} />
      <Button
        type="button"
        className="w-full my-4 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4"
        style={{
          backgroundColor: "var(--primary)",
        }}
      >
        Verify
      </Button>
      <label className="text-gray-500 text-center">03:00</label>

      <p className="py-3 text-center my-8">
        Did not receive the code?
        <Link href="#" className="ml-1 font-semibold text-base text-[#3D663D]">
          Resend
        </Link>
      </p>

      <Link href="/verify" className="underline text-[#3D663D] font-medium">
        Use Email address instead
      </Link>
    </div>
  );
}

export default OTPVerification