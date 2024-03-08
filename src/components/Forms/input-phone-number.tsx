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

const InputFieldPhoneNumber = (props: PhoneNumberInputProps) => {
  const { label, placeholder, error, ...others } = props;

  return (
    <div className="relative z-10">
      <span className="text-base text-[#333] font-medium">{label}</span>
      <PhoneInput
        countryCodeEditable
        country={"ng"}
        autoFormat
        placeholder={placeholder}
        inputClass={clsx({
          ["flex justify-between items-center !w-full !border-none focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden"]:
            true,
        })}
        containerClass={clsx({
          "border border-solid border-gray-200 focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md h-10 mt-1 p-[1px]":
            true,
          "border-red-600": !!error,
        })}
        dropdownClass="absolute z-20" // Set the dropdown class with a higher z-index
        {...others}
      />
    </div>
  );
};

export default InputFieldPhoneNumber;
