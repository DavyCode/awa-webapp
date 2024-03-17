import InputField from "@/components/Forms/input-text";
import React, { useState } from "react";
import UploadFileIcon from "@/assets/svg/upload-icon.svg";
import { Progress } from "@/components/ui/progress";
import ImageIcon from "@/assets/svg/image-icon.svg";
import CloseIconCircle from "@/assets/svg/close-green.svg";
import AddGreenIcon from "@/assets/svg/add-black.svg";
import { Button } from "@/components/ui/button";
import TrashIcon from "@/assets/svg/trash-icon.svg";
import Select from "react-select";

import Dropdown from "@/components/Dropdowns/selectOption";
import { selectStyles } from "@/components/Register/Forms/corporate";
import BeneficiaryForm from "./BeneficiaryForm";
const ManuallyEntry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContainer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[100%] mb-40  space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-[99%]">
          <InputField type="" name="" placeholder="Dagana Lois" />
        </div>
        <TrashIcon />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[99%] bg-red-200" onFocus={toggleContainer}>
          <InputField type="select" name="" placeholder="2nd Beneficiary" />
        </div>
        <TrashIcon />
      </div>

      {isOpen && <BeneficiaryForm />}
      <div className="flex justify-end items-center">
        <AddGreenIcon />
        <p className="underline text-[#3D663D]">Add new beneficiary</p>
      </div>
      <div className="flex justify-center">
        <Button className="w-9/12">Submit</Button>
      </div>
      <div className="flex justify-center mt-[6px]">
        <span className="underline text-[#3D663D]">
          Skip, {"i'll"} do this later
        </span>
      </div>
    </div>
  );
};

export default ManuallyEntry;
