import React from "react";
import { ControllerRenderProps } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cn } from "@/lib/utils";

interface PhoneNumberInputProps
  extends Omit<ControllerRenderProps<any>, "ref"> {
  placeholder?: string;
  label?: string;
  name: string;
  required?: boolean;
  error?: string;
  register?: any;
}

const InputFieldPhoneNumber = ({
  placeholder,
  label,
  error,
  ...others
}: PhoneNumberInputProps) => {
  console.log("others.value :>> ", others.value);
  return (
    <div className="relative z-10">
      <span className="text-base text-[#333] font-medium">{label}</span>
      <PhoneInput
        // value={field.value}
        onChange={(value, country, e, formattedValue) => {
          console.log("value :>> ", value);
          console.log("country :>> ", country);
          console.log("formattedValue :>> ", formattedValue);
          others.onChange(value);
        }}
        // countryCodeEditable
        country={"ng"}
        autoFormat
        placeholder={placeholder}
        inputClass={cn(
          "flex justify-between items-center !w-full !border-none focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden !pl-[54px]",
          {},
        )}
        containerClass={cn(
          "border border-solid border-gray-200 focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md mt-1 py-1",
          {
            "border-red-600": !!error,
          },
        )}
        buttonClass=" !bg-white !border-l-0 !border-t-0 !border-b-0 !border-[#EBEBEB] !border-r-solid !px-1"
        // dropdownClass="absolute z-20" // Set the dropdown class with a higher z-index
        // dropdownStyle={{}}
      />
    </div>
  );
};

export default InputFieldPhoneNumber;
