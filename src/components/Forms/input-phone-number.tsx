import clsx from "clsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import InputField from "./input-text";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useCallback } from "react";

interface PhoneNumberInputProps {
  placeholder?: string;
  label?: string;
  name: string;
  required?: boolean;
  error?: string;
  errors?: { [key: string]: any };
  register?: any;
  control?: Control<any>;
  setValue?: UseFormSetValue<any>;
}

const InputFieldPhoneNumber = (props: PhoneNumberInputProps) => {
  const {
    label,
    placeholder,
    error,
    errors,
    name,
    control,
    register,
    setValue,
    ...others
  } = props;

  const callbackRef = useCallback((node: HTMLInputElement) => {
    if (!node) return;
    setValue?.(name, node.value);
    // setValue?.("phoneNumber", node.value);
  }, []);

  return (
    <div className="relative z-10 flex flex-col">
      <span className="text-base text-[#333] font-medium">{label}</span>
      <div
        className={cn(
          "items-center border border-solid border-gray-200 focus:border-gray-200 rounded-md inline-flex",
          {
            "border-red-600": !!errors?.phoneNumber?.message,
          },
        )}
      >
        <Controller
          render={({ field: { ref, ...others } }) => {
            return (
              <PhoneInput
                countryCodeEditable
                country={"ng"}
                autoFormat
                inputProps={{
                  readOnly: true,
                  ref: callbackRef,
                }}
                inputClass={clsx({
                  ["!border-none focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden !text-base !w-fit hidden"]:
                    true,
                })}
                containerClass={clsx({
                  " focus:outline-none placeholder:text-color-100 rounded-md !border-none mt-1 p-[1px] !w-[unset] inline [&_.flag-dropdown]:!border-none [&_.flag-dropdown]:!relative [&_.flag-dropdown]:!top-[unset] [&_.flag-dropdown]:!bottom-[unset] [&_.flag-dropdown]:!h-[40px] h-full [&_.selected-flag]:cursor-pointer [&_.flag]:cursor-pointer [&_.flag-dropdown]:!cursor-pointer":
                    true,
                  "border-red-600": !!error,
                })}
                dropdownClass="absolute z-20" // Set the dropdown class with a higher z-index
                {...others}
                onChange={(value, country, e, formattedValue) => {
                  //   setValue?.("phoneNumber", formattedValue);
                  setValue?.(name, formattedValue);
                }}
              />
            );
          }}
          control={control}
          name={name}
        />
        <div className="flex-1">
          <InputField
            name="phoneNumber"
            type="text"
            // error={errors?.phoneNumber?.message}
            additionalClassname={"!border-none !flex-1"}
            style={{ paddingLeft: 0 }}
            register={register}
          />
        </div>
      </div>
      {errors?.phoneNumber?.message ? (
        <p className="flex items-center lowercase text-red-600 text-xs">
          {errors?.phoneNumber?.message}
        </p>
      ) : null}
    </div>
  );
};

export default InputFieldPhoneNumber;
