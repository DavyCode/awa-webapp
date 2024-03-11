import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { useSearchParams } from "next/navigation";
import tick_lottie from "@/assets/tick_lottie.json";
import { Button } from "../ui/button";

const EmailVerifiedComp = () => {
  const searchParams = useSearchParams();
  const lottieRef = useRef<AnimationItem>();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    lottieRef.current = lottie.loadAnimation({
      container: containerRef.current as HTMLDivElement,
      loop: true,
      autoplay: true,
      renderer: "svg",
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
      animationData: tick_lottie,
    });
  }, []);
  return (
    <div>
      <div
        className="w-[63px] h-[63px] overflow-hidden mx-auto"
        ref={containerRef}
      ></div>
      <div className="">
        <div className="text-center">
          <p className="text-center py-6">
            Your Email has been verified succesfully
          </p>
          <Button
            type="button"
            className="w-full my-4 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4 font-medium max-w-[184px] mx-auto"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifiedComp;
