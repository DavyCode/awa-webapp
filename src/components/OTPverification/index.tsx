"use client";

import OtpInput from "../Forms/OtpInput";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useOTPContext } from "@/context/OTPContext";

interface IProp {
  modeOfVerification?: string;
}

const OTPVerification: React.FC<IProp> = ({
  modeOfVerification = "phone number",
}) => {
  const {
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
  } = useOTPContext();
  return (
    <div className="flex h-fit rounded-md shadow flex-col px-10 py-6 my-[49px] justify-center items-center w-full sm:w-[518px] mx-auto border border-gray-200">
      <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
        Enter OTP
      </p>
      <span className="mt-2 mb-4 text-[#333333] text-center text-sm sm:text-base">
        An OTP has been sent to your {modeOfVerification}
      </span>
      <OtpInput
        length={5}
        onComplete={(otpData: string) => {
          setOtp(otpData);
          setDisableButton(false);
        }}
      />
      <Button
        type="button"
        className={cn(
          "w-full my-4 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4",
          {
            "bg-button_loading": isPending,
          },
        )}
        style={{
          backgroundColor: "var(--primary)",
        }}
        disabled={disableButton || otp.length !== otpLength || isPending}
        onClick={submitHandler}
      >
        {isPending ? "Verifying phone. Please wait..." : "Verify"}
      </Button>

      <div className="py-3 text-center my-8">
        {!isActive ? (
          <p>
            Did not receive the code?{" "}
            <span className="ml-1 font-semibold text-base text-[#3D663D]">
              Resend OTP in {countDownTimer}
            </span>
          </p>
        ) : (
          <Button
            className="ml-1 font-semibold text-base text-[#3D663D]"
            variant={"link"}
            type="button"
            onClick={resendHandler}
          >
            Resend OTP
          </Button>
        )}
        {/* Did not receive the code?
        <Link href="#" className="ml-1 font-semibold text-base text-[#3D663D]">
          Resend
        </Link> */}
      </div>

      {/* <Link href="/verify" className="underline text-[#3D663D] font-medium">
        Use Email address instead
      </Link> */}
    </div>
  );
};

export default OTPVerification;
