"use client";

import { useForm, useFormState } from "react-hook-form";
import { Button } from "../Forms/Button";
import Link from "next/link";
import InputField from "../Forms/input-text";
import { yupResolver } from "@hookform/resolvers/yup";
import { setNewPasswordSchema } from "@/schema/authSchema";
import { useSetNewPassword } from "@/queries/auth-queries";
import useToast from "@/hooks/useToast";
import TickIcon from "@/assets/svg/tick-circle.svg";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const SetNewPasswordComponent = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { isValid, errors, dirtyFields },
    control,
    getFieldState,
  } = useForm<{ otp: string; password: string; confirm_password: string }>({
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      otp: "",
      password: "",
      confirm_password: "",
    },
    resolver: yupResolver<any>(setNewPasswordSchema),
  });

  const { errorToastHandler, loadingToastHandler, successToastHandler } =
    useToast();
  const { mutate, isPending } = useSetNewPassword(
    errorToastHandler,
    (message: string) => {
      successToastHandler(message);
      router.push("/");
    },
  );

  const onSubmit = handleSubmit((data) => {
    loadingToastHandler("Creating new password. Please wait...");
    mutate({
      otp: data.otp,
      password: data.password,
    });
  });

  const {
    hasNumber,
    hasSymbol,
    length: passwordLength,
    uppercase,
    lowercase,
    itMatches,
  } = (errors.password?.types || {}) as any;

  return (
    <div className="w-full max-w-[499px] mx-auto px-10 py-6 border border-[#EBEBEB] text-[#333]">
      <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
        Set new password
      </p>
      <p className="mt-2 mb-4 text-[#333333] text-center text-sm sm:text-base">
        Reset your password via email. Be sure the email is linked to your
        account
      </p>

      <form onSubmit={onSubmit}>
        <div className="pb-6 flex flex-col gap-4">
          <InputField
            label="OTP"
            name="otp"
            type="text"
            error={errors.otp?.message}
            placeholder="Enter OTP"
            register={register}
          />
          <div className="flex flex-col gap-6 text-left sm:gap-4 w-full mt-4">
            <InputField
              label="Create password"
              name="password"
              type="password"
              // error={errors.password?.message}
              placeholder="Enter password"
              register={register}
              showIcon={true}
            />
            <InputField
              label="Confirm password"
              name="confirm_password"
              type={"password"}
              // error={errors.confirm_password?.message}
              placeholder="Confirm password"
              register={register}
              showIcon={true}
            />
            <div className="flex flex-col gap-2 text-[#333]">
              <div
                className={cn("flex items-center gap-2", {
                  "text-[#3D663D] [&_svg>path]:stroke-[#3D663D]":
                    dirtyFields?.password && !passwordLength,
                  "text-red-600 [&_svg>path]:stroke-red-600":
                    dirtyFields?.password && passwordLength,
                })}
              >
                <span>
                  <TickIcon />
                </span>
                <p className="leading-5">
                  Password contains atleast 8 characters
                </p>
              </div>
              <div
                className={cn("flex items-center gap-2", {
                  "text-[#3D663D] [&_svg>path]:stroke-[#3D663D]":
                    dirtyFields?.password && !lowercase,
                  "text-red-600 [&_svg>path]:stroke-red-600":
                    dirtyFields?.password && lowercase,
                })}
              >
                <span>
                  <TickIcon />
                </span>
                <p className="leading-5">At least one Lowercase</p>
              </div>
              <div
                className={cn("flex items-center gap-2", {
                  "text-[#3D663D] [&_svg>path]:stroke-[#3D663D]":
                    dirtyFields?.password && !uppercase,
                  "text-red-600 [&_svg>path]:stroke-red-600":
                    dirtyFields?.password && uppercase,
                })}
              >
                <span>
                  <TickIcon />
                </span>
                <p className="leading-5">At least one Uppercase</p>
              </div>
              <div
                className={cn("flex items-center gap-2", {
                  "text-[#3D663D] [&_svg>path]:stroke-[#3D663D]":
                    dirtyFields?.password && !hasNumber,
                  "text-red-600 [&_svg>path]:stroke-red-600":
                    dirtyFields?.password && hasNumber,
                })}
              >
                <span>
                  <TickIcon />
                </span>
                <p className="leading-5">At least one number</p>
              </div>
              <div
                className={cn("flex items-center gap-2", {
                  "text-[#3D663D] [&_svg>path]:stroke-[#3D663D]":
                    dirtyFields?.password && !hasSymbol,
                  "text-red-600 [&_svg>path]:stroke-red-600":
                    dirtyFields?.password && hasSymbol,
                })}
              >
                <span>
                  <TickIcon />
                </span>
                <p className="leading-5">At least one special character</p>
              </div>
              <div
                className={cn("flex items-center gap-2", {
                  "text-[#3D663D] [&_svg>path]:stroke-[#3D663D]":
                    dirtyFields?.password && (!itMatches || isValid),
                  "text-red-600 [&_svg>path]:stroke-red-600":
                    dirtyFields?.password && itMatches && !isValid,
                })}
              >
                <span>
                  <TickIcon />
                </span>
                <p className="leading-5">Passwords match</p>
              </div>
            </div>

            <div className="pt-6 w-full">
              <Button
                type="submit"
                className={cn(
                  "py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4 bg-no-repeat w-full",
                  {
                    "bg-button_loading": isPending,
                  },
                )}
                style={{
                  backgroundColor: "var(--primary)",
                }}
                disabled={isPending || !isValid}
              >
                {isPending
                  ? "Setting new password. Please wait..."
                  : "Set new password"}
              </Button>
            </div>
          </div>
        </div>
        {/* <Button
          type="submit"
          className="w-full my-4 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4"
          style={{
            backgroundColor: "var(--primary)",
          }}
        >
          Set new password
        </Button> */}
      </form>

      <p className="py-1 text-center text-sm">
        Already have an account?
        <Link href="/" className="ml-1 font-semibold text-base text-[#3D663D]">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SetNewPasswordComponent;
