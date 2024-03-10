"use client";

import useCountdownTimer from "@/hooks/useCountdownTimer";
import useToast from "@/hooks/useToast";
import { useRequestPhoneOTP, useVerifyPhone } from "@/queries/auth-queries";
import { useRouter, useSearchParams } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

export const useOTPManager = () => {
  const [disableButton, setDisableButton] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const { countDownTimer, setrequestCount } = useCountdownTimer(
    isActive,
    setIsActive,
  );
  const otpLength = 5;

  const [otp, setOtp] = useState<string>("");
  const [otpInput, setOtpInput] = useState<string[]>(
    new Array(length).fill(""),
  );
  const router = useRouter();
  const searchParams = useSearchParams();
  const { errorToastHandler, successToastHandler, loadingToastHandler } =
    useToast();

  const clearOTPHandler = () => {
    setOtp("");
    setOtpInput(new Array(length).fill(""));
  };
  const { refetch } = useRequestPhoneOTP(
    searchParams.get("p") as string,
    errorToastHandler,
    (msg: string) => {
      successToastHandler(msg);
      setIsActive(false);
      setrequestCount((curr) => curr + 1);
      clearOTPHandler();
    },
  );
  const { mutate, isPending } = useVerifyPhone(
    errorToastHandler,
    (msg: string, data: any) => {
      successToastHandler(msg);
      console.log("data :>> ", data);
      router.push("/");
    },
  );

  const resendHandler = () => {
    loadingToastHandler("Requesting new OTP. Please wait...");
    refetch();
  };

  const submitHandler = () => {
    loadingToastHandler("Verifying phone. Please wait...");
    mutate({
      otp,
      phoneNumber: (searchParams.get("p") as string) || "",
    });
  };

  console.log("countDownTimer :>> ", countDownTimer);

  return {
    setOtp,
    setDisableButton,
    isPending,
    disableButton,
    otp,
    submitHandler,
    isActive,
    countDownTimer,
    resendHandler,
    otpLength,
    clearOTPHandler,
    otpInput,
    setOtpInput,
  };
};

type OTPContextProps = ReturnType<typeof useOTPManager>;

export const otpContext = createContext<OTPContextProps | null>(null);

const OTPProvider = ({ children }: { children: ReactNode }) => {
  const contextData = useOTPManager();

  return (
    <otpContext.Provider value={contextData}>{children}</otpContext.Provider>
  );
};

export const useOTPContext = () => {
  const context = useContext(otpContext);
  if (!context) {
    throw new Error("useOTPContext must be used within a OTPProvider");
  }
  return context;
};

export default OTPProvider;
