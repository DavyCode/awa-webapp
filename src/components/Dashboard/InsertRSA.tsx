"use client";
import React, { useState } from "react";
import InputFieldText from "../Forms/input-text";
import { Button } from "../ui/button";
import FormModalComponent from "../Modal/FormModal";
import Dropdown from "../Dropdowns/selectOption";

const options = ["Option 1", "Option 2", "Option 3"];

interface InsertPFAProps {
  handleCloseInsertModal: () => void;
}

const InsertPFAPin: React.FC<InsertPFAProps> = ({ handleCloseInsertModal }) => {
  const [isFormModalOpen, setFormModalOpen] = useState(false);

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected: ${selectedOption}`);
    // Perform any other actions based on the selected option
  };

  const handleEnrollClick = () => {
    setFormModalOpen(true);
  };

  return (
      <div className="flex flex-col">
          <div className="flex flex-col gap-6 text-left sm:gap-4">
          <InputFieldText
            label="Enter PFA"
            name="rfa"
            type="tel"
            placeholder="5647563746736"
          />
          {/*         <Dropdown
          options={options}
          onSelect={handleSelect}
          label="Enter PFA"
        /> */}
          <InputFieldText
            label="Enter PIN"
            name="rfa"
            type="tel"
            placeholder="5647563746736"
            />
          <InputFieldText
            label="Name"
            name="Name"
            type="text"
            placeholder="Name"
          />

          <Button
            type="button"
            className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4"
            style={{
              backgroundColor: "var(--primary)",
            }}
            >
            Submit
          </Button>
          <Button
            type="button"
            variant="link"
            className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4"
            onClick={handleEnrollClick}
          >
            Enroll
          </Button>
        </div>
        </div>
  );
};

export default InsertPFAPin;
