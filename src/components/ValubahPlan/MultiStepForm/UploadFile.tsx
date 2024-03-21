
import React from "react";
import { Button } from "@/components/Forms/Button";
import Link from 'next/link'
import FileUploader from "@/components/Common/File-uploader";
import FileUploaderProgress from "@/components/Common/File-uploader-progress";

const UploadFile = () => {
    const handleFileSelect = (file: any) => {
    console.log("Selected file:", file);
  };

  return (
    <div className="h-[100vh]">
      <FileUploader onFileSelect={handleFileSelect} isImage={false} />
      <FileUploaderProgress progress={35} fileTitle="Beneficiaries 2023.csv" />

      <div className="bg-[#FFF8F2] mt-[21px] rounded-lg p-4 text-[#1A1A1A] space-y-[13px]">
        <p className="">Preparing Csv</p>
        <ul className="list-disc ml-4 space-y-4">
          <li>Use supported headings, name, email, phone number etc</li>
          <li>You can import a maximum of 500 rows</li>
          <li>I need something to add here</li>
          <li>I need something to add here</li>
        </ul>
      </div>
      <div className="flex justify-between mt-[18px]">
        <span className="text-[#3D663D] underline">Download CSV Template</span>
        <span className="text-[#3D663D] underline">Watch demo</span>
      </div>
      <Button
        type="submit"
        className="w-full px-4 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded my-6"
        style={{
          backgroundColor: "var(--primary)",
        }}
      >
        Submit
      </Button>
      <div className="flex justify-center mt-[10px]">
        <span className="underline text-[#3D663D]">
          Skip, i&lsquo;ll do this later
        </span>
      </div>
    </div>
  );
};

export default UploadFile;
