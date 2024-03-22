"use client";

import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { useRequestEmailOTP } from "@/queries/auth-queries";
import useToast from "@/hooks/useToast";
import lottie, { AnimationItem } from "lottie-web";
import { useEffect, useRef } from "react";
import successEmailLottie from "@/assets/email_lottie.json";

const Success = () => {
  const searchParams = useSearchParams();
  const lottieRef = useRef<AnimationItem>();
  const containerRef = useRef<HTMLDivElement>(null);
  const { successToastHandler, errorToastHandler, loadingToastHandler } =
    useToast();
  const { refetch } = useRequestEmailOTP(
    searchParams.get("e") as string,
    errorToastHandler,
    (msg: string) => {
      successToastHandler(msg);
    },
  );

  const resendHandler = () => {
    loadingToastHandler("Requesting verification link. Please wait...");
    refetch();
  };

  useEffect(() => {
    lottieRef.current = lottie.loadAnimation({
      container: containerRef.current as HTMLDivElement,
      loop: false,
      autoplay: true,
      renderer: "svg",
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
      animationData: successEmailLottie,
    });
  }, []);
  return (
    <div className="w-full max-w-[499px] mx-auto px-10 py-6 border border-[#EBEBEB] text-[#333]">
      <div
        className="w-[120px] h-[120px] overflow-hidden mx-auto"
        ref={containerRef}
      ></div>
      <div className="">
        <h5 className="text-center text-2xl font-bold md:whitespace-nowrap py-6">
          Thank you for Joining Awabah
        </h5>
        <div>
          <p className="text-[#555] text-center text-base">
            We sent a Verification link to your email address
          </p>
          <p className="font-bold text-[#3D663D] text-base leading-[19px] text-center pb-4">
            {searchParams.get("e")}{" "}
          </p>
          .
          <span className="text-[#333] text-base leading-[19px] text-center inline-block">
            Click the link in the email to verify your account
          </span>
          <p className="text-center p-2 mt-6">
            Did not receive the code?{" "}
            <Button
              className="hover:bg-transparent h-[unset] text-[#3D663D] px-0 py-0 font-bold leading-[19px]"
              variant={"ghost"}
              disabled={!searchParams.get("e")}
              onClick={resendHandler}
            >
              Resend
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
