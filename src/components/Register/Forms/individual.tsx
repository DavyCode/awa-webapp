"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import InputField from "@/components/Forms/input-text";
import { Button } from "@/components/Forms/Button";
import OrDivider from "@/components/Divider";
import GoogleIcon from "../../../../assets/icons/GoogleIcon";
import CountryDropdown from "@/components/Dropdowns/CountryList";
import Dropdown from "@/components/Dropdowns/selectOption";
import InputFieldPhoneNumber from "@/components/Forms/input-phone-number";

const options = ["Option 1", "Option 2", "Option 3"];

const IndividualForm = () => {
  const { control, handleSubmit, register } = useForm();

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);
  };

  return (
    <form>
      <div className="flex flex-col gap-6 text-left sm:gap-4 mt-4">
        <InputField
          label="Fullname"
          name="fullname"
          type="text"
          /* error={errors.email?.message} */
          placeholder="Full name"
          /* register={register} */
        />
        <InputField
          label="Email address"
          name="email"
          type="email"
          /* error={errors.email?.message} */
          placeholder="Email address"
          /* register={register} */
        />
        <InputFieldPhoneNumber
          label="Phone number"
          name="phone"
          type="tel"
          /* error={errors.email?.message} */
          placeholder="80xxxxxxxx"
          register={register}
        />
        <CountryDropdown control={control} name="country" label="Country" />
        <Dropdown
          options={options}
          onSelect={handleSelect}
          label="How did you hear about us"
        />
        <InputField
          label="Refferal code (optional)"
          name="refferal"
          type="text"
          /* error={errors.userPassword?.message} */
          placeholder="Referral code"
          /* register={register} */
        />
        <Button
          variant="default"
          className="py-5 bg-[#3D663D] w-full flex justify-center items-center text-sm font-semibold text-white"
        >
          Continue
        </Button>
        <OrDivider content="or" />
        <Button
          className="border-gray-300 bg-white/20 w-full gap-x-2 py-5 border-gray-200 border rounded-md flex justify-center items-center shadow-none"
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
    </form>
  );
};

export default IndividualForm;