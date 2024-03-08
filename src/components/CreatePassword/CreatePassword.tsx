"use client";
import { useState } from "react";

import InputFieldText from "../Forms/input-text";
import { Button } from "../Forms/Button";
import { useAuthContext } from "@/context/AuthContext";
import EyeIcon from "@/assets/svg/eye.svg";
import EyeSlashIcon from "@/assets/svg/eye-slash.svg";

const CreatePasswordComponent = () => {
  const {
    passwordCreationForm: {
      register,
      formState: { errors },
    },
  } = useAuthContext();
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
            error={errors.password?.message}
            placeholder="Enter password"
            register={register}
            showIcon={true}
          />
          <InputFieldText
            label="Confirm password"
            name="confirm_password"
            type={"password"}
            error={errors.confirm_password?.message}
            placeholder="Confirm password"
            register={register}
            showIcon={true}
          />

          <div className="pt-6 w-full">
            <Button
              type="submit"
              className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4 w-full"
              style={{
                backgroundColor: "var(--primary)",
              }}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePasswordComponent;
