"use client";
import OrDivider from "@/components/Divider";
import CountryDropdown from "@/components/Dropdowns/CountryList";
import Dropdown from "@/components/Dropdowns/selectOption";
import { Button } from "@/components/Forms/Button";
import InputField from "@/components/Forms/input-text";
import Link from "next/link";
import { useForm } from "react-hook-form";
import GoogleIcon from "../../../../assets/icons/GoogleIcon";
import InputFieldPhoneNumber from "@/components/Forms/input-phone-number";

const options = ["Option 1", "Option 2", "Option 3"];

const CorporateForm = () => {
  const { control, handleSubmit, register } = useForm();

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);
    // Perform any other actions based on the selected option
  };
  return (
    <div className="flex flex-col gap-6 text-left sm:gap-4 mt-2">
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
          <InputField
            label="Business name"
            name="business_name"
            type="text"
            /* error={errors.email?.message} */
            placeholder="Business name"
            /* register={register} */
          />
          <InputField
            label="Business Location"
            name="business_location"
            type="text"
            /* error={errors.email?.message} */
            placeholder="Business Location"
            /* register={register} */
          />
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
            className="bg-[#3D663D] w-full flex justify-center items-center text-sm font-semibold text-white"
          >
            Sign up
          </Button>
          <OrDivider content="or" />
          <Button
            className="bg-white/20 w-full gap-x-2 py-3 border-gray-200 border rounded-md flex justify-center items-center shadow-none"
            type="button"
          >
            <GoogleIcon />
            <span className="text-sm text-gray-800">Sign up with Google</span>
          </Button>

          <p className="py-1 text-center text-sm">
            Already have an account?
            <Link
              href="/login"
              className="ml-1 font-semibold text-base text-[#3D663D]"
            >
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CorporateForm;
