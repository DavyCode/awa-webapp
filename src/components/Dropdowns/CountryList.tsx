import React from "react";
import { UseControllerProps, useWatch } from "react-hook-form";
import CountrySelectWrapper from "./CountrySelectWrapper";

interface CountryDropdownFormProps extends UseControllerProps {
  label: string;
}

const CountryDropdown: React.FC<CountryDropdownFormProps> = ({
  label,
  ...props
}) => {
  const selectedValue = useWatch({
    control: props.control,
    name: props.name,
  });

  return (
    <div className="">
      <label className="block text-sm font-medium text-gray-700 my-2">
        {label}
      </label>
      <CountrySelectWrapper
        value={selectedValue}
        handleOnChange={(value: any) =>
          props?.defaultValue.handleOnChange(value)
        }
      />
      {/* {props.fieldState?.isTouched &&
        props.fieldState?.isDirty &&
        props.fieldState?.invalid && (
          <p className="mt-1 text-sm text-red-500">
            {props.fieldState?.error?.message}
          </p>
        )} */}
    </div>
  );
};

export default CountryDropdown;
