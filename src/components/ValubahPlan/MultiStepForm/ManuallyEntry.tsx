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
const ManuallyEntry = () => {
  const [isOpen, setIsOpen] = useState(true);

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
        <div className="w-[99%]" onFocus={toggleContainer}>
          <InputField type="select" name="" placeholder="2nd Beneficiary" />
        </div>
        <TrashIcon />
      </div>

      {isOpen && (
        <div className="border-[1px] rounded-lg p-4 space-y-4">
          <InputField
            type={""}
            name=""
            label="Does beneficiary have a micro pension account"
            placeholder="No"
          />
          <div className="flex gap-4">
            <InputField
              name={""}
              label="Beneficiary RSA number"
              type={"text"}
              placeholder="2223445567"
            />
            <InputField
              name={""}
              label="Select PFA"
              type={"text"}
              placeholder="Email"
            />
          </div>
          <div className="flex gap-4">
            <InputField
              type={""}
              name=""
              label="Full Name"
              placeholder="Enter full name"
            />
            <InputField
              name={""}
              label="Email"
              type={"text"}
              placeholder="Email"
            />
          </div>
          <div className="flex gap-4">
            <InputField
              label="Country"
              name={""}
              type=""
              placeholder="Select"
            />
            <InputField
              label="Phone number"
              name={""}
              type=""
              placeholder="Phone number"
            />
          </div>
          <div className="flex gap-4">
            <InputField
              label="Address"
              name={""}
              type=""
              placeholder="enter address"
            />
            <InputField
              label="State of Origin"
              name={""}
              type=""
              placeholder="Select"
            />
          </div>

          <div className="flex gap-4">
            <InputField label="LGA" name="" type="" />
            <InputField
              label="Qualification"
              name=""
              type="text"
              placeholder="Bsc"
            />
          </div>
          <div className="flex ">
            <InputField label="Date of Birth" name="" type="" />
            <InputField label="Marital status" name="" type="" />
          </div>
          <InputField label="NIN" name="" type="" />
          {/* Upload NIN */}
          <div>
            <h2 className="leading-[22px] text-[#333] mb-2">Upload NIN</h2>
            <div className="w-full sm:py-[27px] rounded-lg border border-dashed flex justify-center items-center border-[#EBEBEB]">
              <div className="w-full sm:w-[146px] sm:h-[99px] mx-auto flex justify-center items-center flex-col cursor-pointer">
                <div className="sm:w-[47px] sm:h-[47px] flex justify-center items-center bg-[#F1F1F166] rounded-full mb-1">
                  <UploadFileIcon />
                </div>
                <p className="text-xs text-[#ccc]">
                  Upload image or{" "}
                  <span className="underline text-[#3D663D]">Browse</span>
                </p>
                <span className="text-gray-400 text-[10px] leading-[14px] mt-2">
                  Supports png jpeg
                </span>
              </div>
            </div>
          </div>
          {/* Upload Passport */}
          <div>
            <h2 className="leading-[22px] text-[#333] mb-2">Upload Passport</h2>
            <div className="w-full sm:py-[27px] rounded-lg border border-dashed flex justify-center items-center border-[#EBEBEB]">
              <div className="w-full sm:w-[146px] sm:h-[99px] mx-auto flex justify-center items-center flex-col cursor-pointer">
                <div className="sm:w-[47px] sm:h-[47px] flex justify-center items-center bg-[#F1F1F166] rounded-full mb-1">
                  <UploadFileIcon />
                </div>
                <p className="text-xs text-[#ccc]">
                  Upload image or{" "}
                  <span className="underline text-[#3D663D]">Browse</span>
                </p>
                <span className="text-gray-400 text-[10px] leading-[14px] mt-2">
                  Supports png jpeg
                </span>
              </div>
            </div>
          </div>
          {/* Uploading image progress */}
          <div className="w-full h-fit rounded-lg p-4 border border-[#EBEBEB] flex flex-col mt-4 pl-4 ">
            <div className="flex justify-between">
              <div className="w-full sm:w-[169px] sm:h-8 justify-between items-center flex gap-1 mb-4">
                <span>
                  <ImageIcon />
                </span>
                <div className="flex flex-col w-full">
                  <p className="text-[#1A1A1A] text-xs font-medium">
                    Imagename.jpeg
                  </p>
                  <div className="flex gap-1">
                    <p className="text-gray-400 text-[10px]">5.6MB of 7.8MB</p>
                    <div className="flex items-center gap-1">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#D9D9D9]"></span>
                      <span className="text-[#3D663D] font-medium text-[10px]">
                        Uploading
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <CloseIconCircle />
            </div>

            <div className="flex flex-col w-full ">
              <p className="flex justify-end text-[10px] text-gray-400">
                75% 10 sec
              </p>
              <Progress value={33} />
            </div>
          </div>
          {/*Bank Details */}

          <section className="space-y-4 mt-[39px]">
            <h2 className="leading-[22px] text-[#1A1A1A] mb-2 font-bold">
              Bank Details
            </h2>
            <div className="flex gap-4">
              <InputField label="Bank name" name="" type="select" />
              <InputField
                label="Account number"
                name=""
                type="text"
                placeholder="Bsc"
              />
            </div>
            <InputField label="Signature" name="signature" type="text" />
          </section>

          {/* Next of kin details */}
          <section className="space-y-4">
            <h2 className="leading-[22px] text-[#333] mb-2 text-[16px] ">
              Next of kin details
            </h2>
            <InputField
              type={""}
              name=""
              label="Full Name"
              placeholder="Enter full name"
            />
            <div className="flex space-x-5">
              <InputField
                type={""}
                name=""
                label="Email"
                placeholder="Enter Email"
              />
              <InputField
                type={""}
                name=""
                label="Contact number"
                placeholder="Enter full name"
              />
            </div>
            <div className="flex space-x-5">
              <InputField
                type={""}
                name=""
                label="Occupation"
                placeholder="Enter Occupation"
              />
              {/* <InputField type={""} name="" label="Gender" placeholder="Select" />
               */}
              <InputField type="" label="Gender" name="" />
              <InputField
                type={""}
                name=""
                label="Relationship"
                placeholder="Select"
              />
            </div>
            <InputField
              type={""}
              name=""
              label="Address"
              placeholder="Enter Address"
            />
          </section>
          <div className="flex justify-end mt-6">
            <Button className="px-[16px] py-[6px]">Save</Button>
          </div>
        </div>
      )}
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
