"use client";
import EmailVerifyLoadingComp from "./EmailVerifyLoadingComponent";
import EmailVerifiedComp from "./EmailVerifiedComponent";
import { useVerifyEmail } from "@/queries/auth-queries";
import useToast from "@/hooks/useToast";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const VerifyEmailComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = searchParams.toString();
  const { errorToastHandler } = useToast();
  const { isSuccess, mutate } = useVerifyEmail(errorToastHandler, () => {
    // const params = searchParams.toString();
    const params = new URLSearchParams(searchParams.toString());
    params.set("is_verified", "yes");
    router.replace(`${pathname}?${params.toString()}`);
  });

  useEffect(() => {
    const params = new URLSearchParams(queryParams);
    if (!params.get("is_verified")) {
      mutate({
        emailToken: params.get("emailToken") as string,
        email: params.get("email") as string,
      });
    }
    return () => {};
  }, [queryParams]);

  return (
    <div className="w-full max-w-[499px] mx-auto px-10 py-6 border border-[#EBEBEB] text-[#333]">
      {isSuccess || searchParams.get("is_verified") ? (
        <EmailVerifiedComp />
      ) : (
        <EmailVerifyLoadingComp />
      )}
    </div>
  );
};

export default VerifyEmailComponent;
