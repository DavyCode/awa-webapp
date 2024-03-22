"use client";
import React from "react";
import Link from "next/link";
import { Controller } from "react-hook-form";
import InputField from "@/components/Forms/input-text";
import InputFieldPhoneNumber from "@/components/Forms/input-phone-number";
import { useAuthContext } from "@/context/AuthContext";
import Select from "react-select";
import { selectStyles } from "./corporate";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import HookPhoneNumberFieldInput from "@/components/Forms/phone-input-with-hook";

const options = ["Option 1", "Option 2", "Option 3"];

const IndividualForm = () => {
  const {
    signupForm: {
      control,
      handleSubmit,
      register,
      formState: { errors },
      setValue,
    },
    countryArr,
    howDidYouHearAboutUs,
    isIndividualApplicationLoading,
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
              <HookPhoneNumberFieldInput
                label="Phone number"
                error={errors.phoneCountryCode?.message}
                errors={errors}
                placeholder="Enter phone number"
                control={control}
                {...others}
                name="phoneCountryCode"
                register={register}
                setValue={setValue}
              />
            );
          }}
          control={control}
          name="phoneCountryCode"
        />
        <Controller
          render={({ field: { ref, ...others } }) => (
            <div>
              <label className="block text-sm font-medium text-gray-700 my-2">
                Country
              </label>
              <Select
                options={countryArr}
                styles={selectStyles}
                classNames={{
                  container: (state) => {
                    return errors.country?.message ? "!border-red-600" : "";
                  },
                }}
                {...others}
              />
              {errors.country?.message ? (
                <p className="flex items-center lowercase text-red-600 text-xs">
                  {errors.country?.message}
                </p>
              ) : null}
            </div>
          )}
          name="country"
          control={control}
        />
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
                    id="individual-hear-about-us-dropdown-select"
                    instanceId="individual-hear-about-us-dropdown-select"
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
          name="referredBy"
          type="text"
          error={errors.referredBy?.message}
          placeholder="Referral code"
          register={register}
        />
        <Button
          type="submit"
          className={cn(
            "py-[14.5px] mt-10 h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4 bg-no-repeat cursor-pointer",
            {
              "bg-button_loading": isIndividualApplicationLoading,
            },
          )}
          style={{
            backgroundColor: "var(--primary)",
          }}
          disabled={isIndividualApplicationLoading}
        >
          {isIndividualApplicationLoading
            ? "Creating acount. Please wait..."
            : "Continue"}
        </Button>
        {/* <OrDivider content="or" />
        <Button
          className="bg-[rgba(241,241,241,0.60)] w-full gap-x-2 py-3 rounded-md flex justify-center items-center border-[#EBEBEB] border px-4 h-[unset] shadow-none"
          type="button"
        >
          <GoogleIcon />
          <span className="text-sm text-gray-800">Sign up with Google</span>
        </Button> */}

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
