"use client"
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid"; 

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, label }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <label className="font-medium block text-[#454040]">{label}</label>
        <div className="relative inline-flex w-full rounded-md border border-gray-200 bg-white mt-1">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-between w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-500 h-10"
          >
            {selectedOption || "Select an option"}
            <ChevronDownIcon className="h-5 w-5 ml-2 text-gray-300" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-full rounded-md bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
