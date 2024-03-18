import React, { useRef, ChangeEvent } from "react";
import UploadFileIcon from "@/assets/svg/upload-file-icon.svg";
import { cn } from "@/lib/utils";


interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  isImage?: boolean;
  label?: string
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect, isImage=true, label }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col space-y-2 w-full">
      <span
        className={cn("text-base text-[#333] font-medium", {
          hidden: !label,
        })}
      >
        {label}
      </span>
    <div
      className="w-full sm:py-[27px] rounded-lg border border-dashed flex justify-center items-center border-[#EBEBEB]"
      onClick={handleClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        style={{ display: "none" }}
      />
      <div className="w-full sm:w-[146px] sm:h-[99px] mx-auto flex justify-center items-center flex-col cursor-pointer">
        <div className="sm:w-[47px] sm:h-[47px] flex justify-center items-center bg-[#F1F1F166] rounded-full mb-1">
          <UploadFileIcon />
        </div>
        <p className="text-xs text-[#ccc]">
          {isImage ?  "Upload image": "Drag a file here"} or{" "}
          <span className="underline text-[#3D663D]">Browse</span>
        </p>
        <span className="text-gray-400 text-[10px] leading-[14px] mt-2">
          Supports {isImage ? "png jpeg" : "CSV and TSV or XLX"}
        </span>
      </div>
    </div>
    </div>
  );
};

export default FileUploader;
