import React from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectDataProp {
  data: string[];
  label?: string;
  onChange?: (selectedValue: string) => void;
  defaultSelected?: string;
  isDisabled?: boolean
}

const SelectField: React.FC<SelectDataProp> = ({ data, onChange, label, defaultSelected, isDisabled }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className="flex flex-col space-y-2 w-full">
      <span
        className={cn("text-base text-[#333] font-medium", { hidden: !label })}
      >
        {label}
      </span>
      <Select onValueChange={onChange} defaultValue={defaultSelected} disabled={isDisabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={data[0]} />
        </SelectTrigger>
        <SelectContent className="focus:outline-none">
          {data.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;
