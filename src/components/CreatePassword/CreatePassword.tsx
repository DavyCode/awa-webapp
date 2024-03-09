"use client";

import InputFieldText from "../Forms/input-text";
import { useAuthContext } from "@/context/AuthContext";
import { useRegistrationContext } from "@/context/RegistrationContext";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import TickIcon from "@/assets/svg/tick-circle.svg";

const CreatePasswordComponent = () => {
  const { passwordCreationForm, isIndividualApplicationLoading } =
    useAuthContext();

  const {
    register,
    formState: { errors, isValid, touchedFields, isDirty, isValidating },
  } = passwordCreationForm;

  const {
    hasNumber,
    hasSymbol,
    length: passwordLength,
    uppercase,
    lowercase,
    itMatches,
  } = (errors.password?.types || {}) as any;

  const {} = useRegistrationContext();

  return (
    <div className="flex w-full flex-col sm:flex-row relative sm:justify-center pb-[20px]">
      <div className="py-6 px-10 border border-[#EBEBEB] flex flex-col justify-center w-full sm:max-w-[518px] relative">
        <p className="mb-2 text-[32px] leading-[48px] font-bold text-[#1a1a1a] text-center">
          Create password
        </p>
        <span className="mt-2 mb-4 text-[#333] text-center text-sm sm:text-base">
          Sign up for Awabah to get started
        </span>

        <div className="flex flex-col gap-6 text-left sm:gap-4 w-full mt-4">
          <InputFieldText
            label="Create password"
            name="password"
            type="password"
            // error={errors.password?.message}
            placeholder="Enter password"
            register={register}
            showIcon={true}
          />
          <InputFieldText
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
                  isDirty && !passwordLength,
                "text-red-600 [&_svg>path]:stroke-red-600":
                  isDirty && passwordLength,
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
                  isDirty && !lowercase,
                "text-red-600 [&_svg>path]:stroke-red-600":
                  isDirty && lowercase,
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
                  isDirty && !uppercase,
                "text-red-600 [&_svg>path]:stroke-red-600":
                  isDirty && uppercase,
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
                  isDirty && !hasNumber,
                "text-red-600 [&_svg>path]:stroke-red-600":
                  isDirty && hasNumber,
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
                  isDirty && !hasSymbol,
                "text-red-600 [&_svg>path]:stroke-red-600":
                  isDirty && hasSymbol,
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
                  isDirty && (!itMatches || isValid),
                "text-red-600 [&_svg>path]:stroke-red-600":
                  isDirty && itMatches && !isValid,
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
                  "bg-button_loading": isIndividualApplicationLoading,
                },
              )}
              style={{
                backgroundColor: "var(--primary)",
              }}
              disabled={isIndividualApplicationLoading || !isValid}
            >
              {isIndividualApplicationLoading
                ? "Creating account. Please wait..."
                : "Sign up"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePasswordComponent;
