'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button";
import SelectField from "@/components/Forms/input-select";
import TextField from "@/components/Forms/text-field";
import InputFieldPhoneNumber from "@/components/Forms/input-phone-number";
import DateInputField from "@/components/Forms/date-input";
import FileUploader from "@/components/Common/File-uploader";
import FileUploaderProgress from "@/components/Common/File-uploader-progress";
import TrashIcon from "@/assets/svg/trash-icon.svg";

const Options = ["Yes", "No"];
const StatusOption = ["Married", "Single", "Divorce"];
const BankOptions = ["GTB", "UBA", "KUDA", "ABC", "First Bank"];
const GenderOptions = ["Male", "Female"];
const CountryOption = ["Nigeria"];
const RelationshipOptions = ["Husband", "Wife", "Father", "Mother", "Son", "Daughter"];
const PensionOption = ["VGM Pension"];
const QualificationOptions = ["Bsc", "HND", "NCE"];
const LGAOptions = ["Apapa", "Ikeja", "Agege"];
const StateOptions = ["Lagos", "Kwara", "Delta", "Lokoja"];

interface FormProps {
  index: number;
  handleDelete: (arg: number) => void
}
const BeneficiaryForm: React.FC<FormProps> = ({ index, handleDelete }) => {
  const [selectedOption, setSelectedOption] = useState("No");

  const handleFileSelect = (file: any) => {
    console.log("Selected file:", file);
  };


  const handleSelectChange = (selectedValue: any) => {
    setSelectedOption(selectedValue);
  };

  const isDisabled = selectedOption === "Yes"

  return (
    <div className="flex gap-2">
      <div className="w-full border-[1px] rounded-lg p-4 space-y-4">
        <SelectField
          onChange={handleSelectChange}
          data={Options}
          defaultSelected="No"
          label="Does beneficiary have a micro pension account"
        />
        {selectedOption === "Yes" && (
          <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full">
              <TextField
                label="Beneficiary  RSA number"
                placeholder="22334455667"
                maxLength={11}
              />
              {/* Validated RSA */}
              <span className="text-xs mt-2 text-[#3D663D]">RSA Validated</span>
            </div>
            <SelectField data={PensionOption} label="Select PFA" />
          </div>
        )}
        <div className="flex gap-4 w-full">
          <TextField
            label="Full name"
            isDisabled={isDisabled}
            placeholder="Dagana Lois"
          />
          <TextField
            label="Email address"
            placeholder="daganalois@gmail.com"
            type="email"
            isDisabled={isDisabled}
          />
          {/* <SelectField data={Options} label="Select PFA" /> */}
        </div>
        <div className="flex gap-4 w-full">
          <SelectField
            data={CountryOption}
            label="Country"
            isDisabled={isDisabled}
          />
          {isDisabled ? (
            <TextField
              label="Phone number"
              placeholder="+234 9032167898"
              isDisabled={isDisabled}
            />
          ) : (
            <InputFieldPhoneNumber
              label="Phone number"
              name="phone"
              type="tel"
              /* error={errors.email?.message} */
              placeholder="80xxxxxxxx"
              //register={register}
              additionalClassname="w-full"
            />
          )}
        </div>
        <div className="flex gap-4 w-full">
          <TextField
            label="Address"
            isDisabled={isDisabled}
            placeholder="No. 12 Bangore street Lagos Nigeria"
          />
          <SelectField
            data={StateOptions}
            label="State of Origin"
            isDisabled={isDisabled}
          />
        </div>
        <div className="flex gap-4 w-full">
          <SelectField data={LGAOptions} label="LGA" isDisabled={isDisabled} />
          <SelectField
            data={QualificationOptions}
            label="Qualification"
            isDisabled={isDisabled}
          />
        </div>
        <div className="flex gap-4 w-full">
          {isDisabled ? (
            <TextField
              label="Date of birth"
              isDisabled={isDisabled}
              placeholder="11/04/1990"
            />
          ) : (
            <DateInputField label="Date of birth" />
          )}
          <SelectField
            data={StatusOption}
            label="Marital status"
            isDisabled={isDisabled}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <TextField
            label="Nin"
            isDisabled={isDisabled}
            placeholder="1234567890"
          />
          {!isDisabled && <span className="text-xs text-[#3D663D]">Dial *346#</span>}
        </div>
        {!isDisabled && (
          <div className="flex gap-4">
            <FileUploader onFileSelect={handleFileSelect} label="Upload Nin" />
            <FileUploader
              onFileSelect={handleFileSelect}
              label="Upload passport"
            />
          </div>
        )}
        {isDisabled ? <TextField
                label="Passport"
                isDisabled={isDisabled}
                placeholder="user.png"
              /> : 
          <FileUploader
            onFileSelect={handleFileSelect}
            label="Upload Signature"
          />
        }
        {/*         <FileUploaderProgress
          progress={54}
          fileTitle="Imagename.jpeg"
          isFileAnImage={true}
        /> */}

        {/*Bank Details */}

        <section className="space-y-4 mt-24">
          <h2 className="leading-[22px] text-[#1A1A1A] mb-2 font-bold">
            Bank Details
          </h2>
          <div className="flex gap-4">
            <SelectField
              data={BankOptions}
              label="Bank name"
              isDisabled={isDisabled}
            />
            <div className="flex flex-col w-full">
              <TextField
                label="Account number"
                isDisabled={isDisabled}
                placeholder="1234567890"
              />
              {/* Validated account name */}
              {!isDisabled && <span className="text-xs mt-2 text-[#3D663D]">Dagana Lois</span>}
            </div>
          </div>
          {/* <TextField label="Signature" /> */}
        </section>

        {/* Next of kin details */}
        <section className="space-y-4">
          <h2 className="leading-[22px] text-[#333] mb-2 text-[16px] font-semibold">
            Next of kin details
          </h2>
          <TextField
            label="Full name"
            isDisabled={isDisabled}
            placeholder="Preye Dagana"
          />

          <div className="flex gap-4 w-full">
            <TextField
              label="Email address"
              placeholder="daganalois@gmail.com"
              type="email"
              isDisabled={isDisabled}
            />
            {isDisabled ? (
              <TextField
                label="Phone number"
                placeholder="+234 9032167898"
                isDisabled={isDisabled}
              />
            ) : (
              <InputFieldPhoneNumber
                label="Phone number"
                name="phone"
                type="tel"
                /* error={errors.email?.message} */
                placeholder="80xxxxxxxx"
                //register={register}
                additionalClassname="w-full"
              />
            )}
          </div>
          <div className="flex gap-4 w-full">
            <TextField
              label="Occupation"
              isDisabled={isDisabled}
              placeholder="Enter Occupation"
            />
            {/* <InputField type={""} name="" label="Gender" placeholder="Select" />
             */}
            {isDisabled ? (
              <TextField
                label="Gender"
                isDisabled={isDisabled}
                placeholder="Male"
              />
            ) : (
              <SelectField data={GenderOptions} label="Gender" />
            )}
            {isDisabled ? (
              <TextField
                label="Relationship"
                isDisabled={isDisabled}
                placeholder="Single"
              />
            ) : (
              <SelectField data={RelationshipOptions} label="Relationship" />
            )}
          </div>
          <TextField
            label="Address"
            isDisabled={isDisabled}
            placeholder={isDisabled ? "No. 12 Bangore street Lagos Nigeria" : "Enter address"}
          />
        </section>
        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            className="w-full px-4 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded sm:w-[113px] my-2"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Save
          </Button>
        </div>
      </div>
      <span
        className="w-4 h-4 cursor-pointer"
        onClick={() => handleDelete(index)}
      >
        <TrashIcon />
      </span>
    </div>
  );
};

export default BeneficiaryForm;
