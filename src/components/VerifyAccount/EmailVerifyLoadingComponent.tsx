import useToast from "@/hooks/useToast";
import lottie, { AnimationItem } from "lottie-web";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import loadingLottie from "@/assets/loading_lottie_two.json";

const EmailVerifyLoadingComp = () => {
  const searchParams = useSearchParams();
  const lottieRef = useRef<AnimationItem>();
  const containerRef = useRef<HTMLDivElement>(null);
  const { successToastHandler, errorToastHandler, loadingToastHandler } =
    useToast();

  useEffect(() => {
    lottieRef.current = lottie.loadAnimation({
      container: containerRef.current as HTMLDivElement,
      loop: true,
      autoplay: true,
      renderer: "svg",
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
      animationData: loadingLottie,
    });
  }, []);
  return (
    <div>
      <div
        className="w-[143px] h-[143px] overflow-hidden mx-auto"
        ref={containerRef}
      ></div>
      <div className="">
        <h5 className="text-center text-xl font-bold whitespace-nowrap pt-6 text-[#555]">
          Please wait
        </h5>
        <div>
          <p className="text-[#555] text-center text-base">
            Your email{" "}
            <span className="text-[#3D663D]">
              ({searchParams.get("email")})
            </span>{" "}
            is being verified
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifyLoadingComp;
