import React from 'react'
import UploadFileIcon from '@/assets/svg/upload-icon.svg'
import ExcelIcon from '@/assets/svg/excel-icon.svg'
import { Progress } from "@/components/ui/progress";


const UploadFile = () => {
  return (
    <div>
      <div className="w-full sm:py-[27px] rounded-lg border border-dashed flex justify-center items-center border-[#EBEBEB]">
        <div className="w-full sm:w-[146px] sm:h-[99px] mx-auto flex justify-center items-center flex-col cursor-pointer">
          <div className="sm:w-[47px] sm:h-[47px] flex justify-center items-center bg-[#F1F1F166] rounded-full mb-1">
            <UploadFileIcon />
          </div>
          <p className="text-xs text-[#ccc]">
            Drag a file here or{" "}
            <span className="underline text-[#3D663D]">Browse</span>
          </p>
          <span className="text-gray-400 text-[10px] leading-[14px] mt-2">
            Supports CSV and TSV or XLX
          </span>
        </div>
      </div>
      <div className="w-full h-fit rounded-lg p-4 border border-[#EBEBEB] flex flex-col mt-4">
        <div className="w-full sm:w-[169px] sm:h-8 justify-between flex gap-1 mb-4">
          <span>
            <ExcelIcon />
          </span>
          <div className="flex flex-col w-full">
            <p className="text-[#1A1A1A] text-xs font-medium">
              Beneficiaries 2023.csv
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
        <div className="flex flex-col w-full">
          <p className="flex justify-end text-[10px] text-gray-400">75% 10 sec</p>
          <Progress value={33} />
        </div>
      </div>
    </div>
  );
}

export default UploadFile