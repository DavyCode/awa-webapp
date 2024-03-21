import React from 'react'
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";

interface TextFieldProps {
    label?: string;
    type?: string;
    placeholder?: string;
    isDisabled?: boolean;
    maxLength?: number
}

const TextField:React.FC<TextFieldProps> = ({ label, type, placeholder, isDisabled, maxLength }) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
        <span
          className={cn("text-base text-[#333] font-medium", {
            hidden: !label,
          })}
        >
          {label}
        </span>
        <Input disabled={isDisabled} maxLength={maxLength} type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextField