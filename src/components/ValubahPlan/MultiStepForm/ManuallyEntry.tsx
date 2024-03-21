import React, { useState } from "react";
import AddGreenIcon from "@/assets/svg/add-black.svg";
import EmptyBeneficiaryIcon from "@/assets/svg/empty-beneficiary-icon.svg";
import { Button } from "@/components/ui/button";
import BeneficiaryForm from "./BeneficiaryForm";
import SelectField from "@/components/Forms/input-select";

const BeneficiaryData = ["Dagana Lois", "Adekanbi Seun", "John Doe", "George Lugard"]

const ManuallyEntry = () => {
  const [isAdditionalFormOpen, setIsAdditionalFormOpen] = useState(false);
 const [isBuyingForOthersAlone, setIsBuyingForOthersAlone] = useState(true)
  const [additionalForms, setAdditionalForms] = useState<boolean[]>([]);


   const handleSelectChange = () => {
     setIsAdditionalFormOpen(!isAdditionalFormOpen);
   };

   const handleAddBeneficiary = () => {
    setAdditionalForms([...additionalForms, true]);
  };

    const handleDelete = (index: number) => {
      const updatedForms = [...additionalForms];
      updatedForms.splice(index, 1);
      setAdditionalForms(updatedForms);
    };

  return (
    <div className="mb-40  space-y-4">
      {/* This shows up if buying for self and other */}
      {!isBuyingForOthersAlone && (
        <div className="flex items-center gap-2">
          <div className="w-full">
            <SelectField data={BeneficiaryData} onChange={handleSelectChange} />
          </div>
        </div>
      )}
      {additionalForms.length === 0 && (
      <div className="w-[213px] h-fit flex flex-col justify-center mx-auto">
        <EmptyBeneficiaryIcon />
        <p className="text-[#333333] font-medium text-base my-4">Your beneficiary list is empty</p>
        <div
        className="flex justify-center mb-6 items-center cursor-pointer"
        onClick={handleAddBeneficiary}
      >
        <AddGreenIcon />
        <p className="underline text-[#3D663D]">Add new beneficiary</p>
      </div>
      </div>
      )}

      {additionalForms.map((_, index) => (
        <div className="flex flex-col space-y-3" key={index}>
          <BeneficiaryForm index={index} handleDelete={handleDelete} />
        </div>
      ))}

      {additionalForms.length > 0 && (
      <div className="flex flex-col">
      <div
        className="flex justify-end items-center my-8 cursor-pointer"
        onClick={handleAddBeneficiary}
      >
        <AddGreenIcon />
        <p className="underline sm:mr-6 text-[#3D663D]">Add new beneficiary</p>
      </div>
        <Button
          type="submit"
          className="w-full px-4 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded mb-6 sm:w-3/4 mt-14 mx-auto flex justify-center"
          style={{
            backgroundColor: "var(--primary)",
          }}
        >
          Submit
        </Button>
        <div className="flex justify-center mt-[6px]">
          <span className="underline text-[#3D663D]">
            Skip, i&lsquo;ll do this later
          </span>
        </div>
      </div>)}
    </div>
  );
};

export default ManuallyEntry;
