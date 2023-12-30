"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Forms/Button";
import Link from "next/link";
import RadioButton from "../Forms/Button/radio";
import { ResetPasswordOptions } from "@/lib/data";

const ResetPasswordComponent = () => {
    const { control, handleSubmit, register } = useForm();
  return (
    <div className="flex h-fit rounded-md shadow flex-col px-10 py-6 my-32 justify-center items-center w-full sm:w-[518px] mx-auto border border-gray-200">
      <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
        Reset password
      </p>
      <span className="mt-2 mb-4 text-[#333333] text-center text-sm sm:text-base">
        Reset your password via email or mobile number. Be sure the email or
        mobile number is linked to your account
      </span>

      {ResetPasswordOptions.map((datum, index) => (
        <RadioButton
          key={index}
          label={datum.label}
          name={datum.name}
          value={datum.value}
          // Add other props like onChange if needed
        />
      ))}

      <Button
        type="button"
        className="w-full my-4 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4"
        style={{
          backgroundColor: "var(--primary)",
        }}
      >
        Reset
      </Button>

      <p className="py-1 text-center text-sm">
        Already have an account?
        <Link href="/" className="ml-1 font-semibold text-base text-[#3D663D]">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default ResetPasswordComponent;
