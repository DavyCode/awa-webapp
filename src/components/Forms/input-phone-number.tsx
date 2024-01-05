import React from "react";
import { useForm, Controller } from "react-hook-form";
import clsx from "clsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneNumberInputProps {
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
  name,
  required,
  error,
  register,
}: PhoneNumberInputProps) => {
  const { control } = useForm();

  return (
    <div className="relative z-10">
      <span className="text-base text-[#333] font-medium">{label}</span>
      <Controller
        name={name}
        control={control}
        rules={{ required: required && "This field is required" }}
        render={({ field }) => (
          <PhoneInput
            value={field.value}
            onChange={(value, country, e, formattedValue) => {
              field.onChange(value);
            }}
            countryCodeEditable
            country={"ng"}
            autoFormat
            placeholder={placeholder}
            inputClass={clsx({
              ["flex justify-between items-center !w-full !border-none focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden"]:
                true,
            })}
            containerClass={clsx({
              "border border-solid border-gray-200 focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md mt-1 py-1":
                true,
              "border-red-600": !!error,
            })}
            dropdownClass="absolute z-20" // Set the dropdown class with a higher z-index
          />
        )}
      />
    </div>
  );
};

export default InputFieldPhoneNumber;
