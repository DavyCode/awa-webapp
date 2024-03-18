import InputField from "@/components/Forms/input-text";
import UploadFileIcon from "@/assets/svg/upload-icon.svg";
import { Progress } from "@/components/ui/progress";
import ImageIcon from "@/assets/svg/image-icon.svg";
import CloseIconCircle from "@/assets/svg/close-green.svg";
import AddGreenIcon from "@/assets/svg/add-black.svg";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/Forms/input-select";
import TextField from "@/components/Forms/text-field";
import InputFieldPhoneNumber from "@/components/Forms/input-phone-number";
import DateInputField from "@/components/Forms/date-input";
import FileUploader from "@/components/Common/File-uploader";
import FileUploaderProgress from "@/components/Common/File-uploader-progress";

const Options = ["Yes", "No"];
const StatusOption = ["Married", "Single", "Divorce"];
const BankOptions = ["GTB", "UBA", "KUDA", "ABC", "First Bank"];
const GenderOptions = ["Male", "Female"];
const RelationshipOptions = ["Husband", "Wife", "Father", "Mother", "Son", "Daughter"];

const BeneficiaryForm = () => {

  const handleFileSelect = (file: any) => {
    console.log("Selected file:", file);
  };

  return (
    <div className="w-full border-[1px] rounded-lg p-4 space-y-4">
      <SelectField
        data={Options}
        label="Does beneficiary have a micro pension account"
      />
      <div className="flex gap-4 w-full">
        <TextField label="Full name" placeholder="Dagana Lois" />
        <TextField label="Email address" placeholder="daganalois@gmail.com" type="email" />
        {/* <SelectField data={Options} label="Select PFA" /> */}
      </div>
      <div className="flex gap-4 w-full">
        <SelectField data={Options} label="Country" />
        <InputFieldPhoneNumber
          label="Phone number"
          name="phone"
          type="tel"
          /* error={errors.email?.message} */
          placeholder="80xxxxxxxx"
          //register={register}
          additionalClassname="w-full"
        />
      </div>
      <div className="flex gap-4 w-full">
        <TextField
          label="Address"
          placeholder="No. 12 Bangore street Lagos Nigeria"
        />
        <SelectField data={Options} label="State of Origin" />
      </div>
      <div className="flex gap-4 w-full">
        <SelectField data={Options} label="LGA" />
        <SelectField data={Options} label="Qualification" />
      </div>
      <div className="flex gap-4 w-full">
        <DateInputField label="Date of birth" />
        <SelectField data={StatusOption} label="Marital status" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <TextField label="Nin" placeholder="1234567890" />
        <span className="text-xs text-[#3D663D]">Dial *346#</span>
      </div>
      <FileUploader onFileSelect={handleFileSelect} label="Upload Nin" />
      <FileUploader onFileSelect={handleFileSelect} label="Upload passport" />

      <FileUploaderProgress
        progress={54}
        fileTitle="Imagename.jpeg"
        isFileAnImage={true}
      />

      {/*Bank Details */}

      <section className="space-y-4 mt-24">
        <h2 className="leading-[22px] text-[#1A1A1A] mb-2 font-bold">
          Bank Details
        </h2>
        <div className="flex gap-4">
          <SelectField data={BankOptions} label="Bank name" />
          <div className="flex flex-col w-full">
            <TextField label="Account number" placeholder="1234567890" />
            {/* Validated account name */}
            <span className="text-xs mt-2 text-[#3D663D]">Dagana Lois</span>
          </div>
        </div>
        <TextField label="Signature" />
      </section>

      {/* Next of kin details */}
      <section className="space-y-4">
        <h2 className="leading-[22px] text-[#333] mb-2 text-[16px] ">
          Next of kin details
        </h2>
        <TextField label="Full name" placeholder="Preye Dagana" />

        <div className="flex gap-4 w-full">
          <TextField label="Email address" placeholder="daganalois@gmail.com" type="email" />
          <InputFieldPhoneNumber
            label="Phone number"
            name="phone"
            type="tel"
            /* error={errors.email?.message} */
            placeholder="80xxxxxxxx"
            //register={register}
            additionalClassname="w-full"
          />
        </div>
        <div className="flex gap-4 w-full">
          <TextField label="Occupation" placeholder="Enter Occupation" />
          {/* <InputField type={""} name="" label="Gender" placeholder="Select" />
           */}
           <SelectField data={GenderOptions} label="Gender" />
           <SelectField data={RelationshipOptions} label="Relationship" />
        </div>
          <TextField label="Address" placeholder="Enter Address" />
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
  );
};

export default BeneficiaryForm;
