"use client";
import OrDivider from "@/components/Divider";
import Dropdown from "@/components/Dropdowns/selectOption";
import { Button } from "@/components/Forms/Button";
import InputField from "@/components/Forms/input-text";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import InputFieldPhoneNumber from "@/components/Forms/input-phone-number";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { useAuthContext } from "@/context/AuthContext";
import Select, { StylesConfig, CSSObjectWithLabel } from "react-select";

const options = ["Option 1", "Option 2", "Option 3"];

export const selectStyles: StylesConfig<any> = {
  container(styles: any) {
    return {
      ...styles,
      lineHeight: "1.5rem",
      fontSize: "0.875rem",
      border: "1px solid #EBEBEB",
      borderRadius: 8,
      outline: "none",
      "&:hover": {
        borderColor: "rgb(226 232 240 / 1)",
      },
      boxShadow: "none",
      padding: "10px 16px",
    };
  },
  control(styles: any) {
    return {
      ...styles,
      lineHeight: "1.5rem",
      fontSize: "0.875rem",
      border: "none",
      "&:hover": {
        borderColor: "rgb(226 232 240 / 1)",
      },
      minHeight: "unset",
      height: "100%",
      maxHeight: 32,
      alignItems: "center",
      outline: "none !important",
      boxShadow: "none",
    };
  },
  option(styles: any) {
    return {
      ...styles,
      lineHeight: "1.25rem",
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "var(--primary)",

      //   color: "rgb(1 85 105/1)",
      "&:hover": {
        backgroundColor: "#E0ECD8",
        color: "var(--primary)",
      },
    };
  },
  indicatorSeparator(styles: any) {
    return {
      ...styles,
      display: "none",
    };
  },
  valueContainer(styles: any) {
    return {
      ...styles,
      padding: "0",
      lineHeight: "22px",
      borderRadius: "0.25rem",
      borderColor: "rgb(226 232 240/1)",
    };
  },
  input(styles: any) {
    return {
      ...styles,
      color: "#344054",
      fontWeight: 600,
      fontSize: 14,
    };
  },
  placeholder(styles: any) {
    return {
      ...styles,
      color: "#D6D6D6",
      fontWeight: 600,
      fontSize: 14,
    };
  },
  singleValue(styles: any) {
    return {
      ...styles,
      fontWeight: 500,
    };
  },
  indicatorsContainer(styles: any) {
    return {
      ...styles,
      padding: 0,
      //   display: "none",
      "&>div": {
        padding: 0,
      },
    };
  },
  menuPortal: (base: any) => ({ ...base, zIndex: 9999, left: 0, top: "100%" }),
};

const CorporateForm = () => {
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

  console.log("errors :>> ", errors);

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);
    // Perform any other actions based on the selected option
  };
  return (
    <div className="flex flex-col gap-6 text-left sm:gap-4 mt-2">
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
                  register={register} // Pass the register function
                  {...others}
                />
              );
            }}
            name="phoneNumber"
            control={control}
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
                      console.log(
                        "errors.country?.message :>> ",
                        errors.country?.message,
                      );
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
          <InputField
            label="Business name"
            name="business_name"
            type="text"
            error={errors.business_name?.message}
            placeholder="Business name"
            register={register}
          />
          <InputField
            label="Business Location"
            name="business_location"
            type="text"
            error={errors.business_location?.message}
            placeholder="Business Location"
            register={register}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 my-2">
              How did you hear about us
            </label>
            <Select
              options={howDidYouHearAboutUs}
              styles={selectStyles}
              placeholder="How did you hear about us"
            />
          </div>
          <InputField
            label="Refferal code (optional)"
            name="refferal"
            type="text"
            /* error={errors.userPassword?.message} */
            placeholder="Referral code"
            /* register={register} */
          />
          <Button
            type="submit"
            className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Sign up
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
    </div>
  );
};

export default CorporateForm;
