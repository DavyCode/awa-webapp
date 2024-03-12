"use client";

import { useForm, useWatch } from "react-hook-form";
import { Button } from "../Forms/Button";
import Link from "next/link";
import InputField from "../Forms/input-text";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordSchema } from "@/schema/authSchema";
import { useRequestForgotPasswordOTP } from "@/queries/auth-queries";
import useToast from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const ResetPasswordComponent = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<{ email: string }>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver<any>(resetPasswordSchema),
  });

  const email = useWatch({
    name: "email",
    control,
  });
  const { errorToastHandler, loadingToastHandler, successToastHandler } =
    useToast();
  const { refetch, isLoading } = useRequestForgotPasswordOTP(
    email,
    errorToastHandler,
    (msg: string) => {
      successToastHandler(msg);
      router.push(`/set-password?e=${email}`);
    },
  );

  const onSubmit = handleSubmit((data) => {
    loadingToastHandler("Requesting password reset. Please wait...");
    refetch();
  });
  return (
    <div className="w-full max-w-[499px] mx-auto px-10 py-6 border border-[#EBEBEB] text-[#333]">
      <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
        Reset password
      </p>
      <p className="mt-2 mb-4 text-[#333333] text-center text-sm sm:text-base">
        Reset your password via email. Be sure the email is linked to your
        account
      </p>

      <form onSubmit={onSubmit} className="">
        <div className="pb-6">
          <InputField
            label="Email address"
            name="email"
            type="email"
            error={errors.email?.message}
            placeholder="Email address"
            register={register}
          />
        </div>
        <Button
          type="submit"
          className={cn(
            "py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4 bg-no-repeat w-full",
            {
              "bg-button_loading": isLoading,
            },
          )}
          style={{
            backgroundColor: "var(--primary)",
          }}
          disabled={isLoading}
        >
          Reset password
        </Button>
      </form>

      <p className="py-1 text-center text-sm pt-6">
        Already have an account?
        <Link href="/" className="ml-1 font-semibold text-base text-[#3D663D]">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default ResetPasswordComponent;
