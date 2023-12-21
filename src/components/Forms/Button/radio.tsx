import React, { InputHTMLAttributes } from "react";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, ...rest }) => {
  return (
    <label className="flex my-4 w-full space-x-4 sm:ml-4">
      <input
        type="radio"
        className="text-red-500 border-gray-200 focus:ring-red-200 h-6 w-6"
        {...rest}
      />
      <span className="text-[#333333] text-sm">{label}</span>
    </label>
  );
};

export default RadioButton;
