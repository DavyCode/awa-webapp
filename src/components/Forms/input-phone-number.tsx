import clsx from "clsx";
import PhoneInput from "react-phone-input-2";

interface PhoneNumberInputProps {
  name: string;
  placeholder?: string;
  onChange: any;
  label?: string;
  value: string;
  required?: boolean;
  error?: string;
}

const InputFieldPhoneNumber = ({
  name,
  placeholder,
  onChange,
  value,
  required,
  label,
  error,
}: PhoneNumberInputProps) => {
  return (
    <div>
      <span className="text-base text-[#333] font-medium">{label}</span>
      <PhoneInput
        value={value}
        onChange={onChange}
        countryCodeEditable
        country={"ng"}
        autoFormat
        enableSearch
        placeholder="Enter phone number"
        inputClass={clsx({
          ["flex justify-between items-center !w-full !border-none focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden"]:
            true,
        })}
        containerClass={clsx({
          "border border-solid border-gray-200 focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden mt-1 py-1":
            true,
          "border-red-600": !!error,
        })}
      />
    </div>
  );
};

export default InputFieldPhoneNumber;
