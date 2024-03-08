"use client";
import React from "react";
import Link from "next/link";
import { Controller } from "react-hook-form";
import InputField from "@/components/Forms/input-text";
import { Button } from "@/components/Forms/Button";
import OrDivider from "@/components/Divider";
import Dropdown from "@/components/Dropdowns/selectOption";
import InputFieldPhoneNumber from "@/components/Forms/input-phone-number";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { useAuthContext } from "@/context/AuthContext";
import Select from "react-select";
import { selectStyles } from "./corporate";

const options = ["Option 1", "Option 2", "Option 3"];

const IndividualForm = () => {
  const {
    signupForm: {
      control,
      handleSubmit,
      register,
      formState: { errors },
    },
    countryArr,
    howDidYouHearAboutUs,
  } = useAuthContext();

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);
  };

  return (
    <div>
      <div className="flex flex-col gap-6 text-left sm:gap-4 mt-4">
        <InputField
          label="First name"
          name="firstName"
          type="text"
          error={errors.firstName?.message}
          placeholder="First name"
          register={register}
        />
        <InputField
          label="Last name"
          name="lastName"
          type="text"
          error={errors.lastName?.message}
          placeholder="Last name"
          register={register}
        />
        <InputField
          label="Email address"
          name="email"
          type="email"
          error={errors.email?.message}
          placeholder="Email address"
          register={register}
        />
        <Controller
          render={({ field: { ref, ...others } }) => {
            return (
              <InputFieldPhoneNumber
                label="Phone number"
                error={errors.phoneNumber?.message}
                placeholder="Enter phone number"
                {...others}
              />
            );
          }}
          control={control}
          name="phoneNumber"
        />
        {/* <CountryDropdown control={control} name="country" label="Country" /> */}
        <div className="relative inline-block text-left w-full">
          <Controller
            render={({ field: { ref, ...others } }) => {
              return (
                <div>
                  <label className="block text-sm font-medium text-gray-700 my-2">
                    How did you hear about us
                  </label>
                  <Select
                    options={howDidYouHearAboutUs}
                    styles={selectStyles}
                    placeholder="How did you hear about us"
                    {...others}
                  />
                </div>
              );
            }}
            name="howDidYouHearAboutUs"
            control={control}
          />
        </div>
        <InputField
          label="Refferal code (optional)"
          name="refCode"
          type="text"
          error={errors.refCode?.message}
          placeholder="Referral code"
          register={register}
        />
        <Button
          type="submit"
          className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4"
          style={{
            backgroundColor: "var(--primary)",
          }}
        >
          Continue
        </Button>
        <OrDivider content="or" />
        <Button
          className="bg-[rgba(241,241,241,0.60)] w-full gap-x-2 py-3 rounded-md flex justify-center items-center border-[#EBEBEB] border px-4 h-[unset] shadow-none"
          type="button"
        >
          <GoogleIcon />
          <span className="text-sm text-gray-800">Sign up with Google</span>
        </Button>

        <p className="py-1 text-center text-sm">
          Already have an account?
          <Link
            href="/"
            className="ml-1 font-semibold text-base text-[#3D663D]"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default IndividualForm;
