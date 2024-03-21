import React from 'react'
import { Progress } from "@/components/ui/progress";

import ExcelIcon from "@/assets/svg/excel-icon.svg";
import ImageIcon from "@/assets/svg/image-icon.svg";

interface FileUploaderProgressProps {
    progress: number;
    fileTitle: string;
    isFileAnImage?: boolean
}
const FileUploaderProgress: React.FC<FileUploaderProgressProps> = ({ progress, fileTitle, isFileAnImage=false }) => {
  return (
    <div className="w-full h-fit rounded-lg p-4 border border-[#EBEBEB] flex flex-col my-4">
      <div className="w-full sm:w-[169px] sm:h-8 justify-between flex gap-1 mb-4">
        <span>{isFileAnImage ? <ImageIcon /> : <ExcelIcon />}</span>
        <div className="flex flex-col w-full">
          <p className="text-[#1A1A1A] text-xs font-medium">{fileTitle}</p>
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
        <p className="flex justify-end text-[10px] text-gray-400">
          75% 10 sec left
        </p>

        <Progress value={progress} />
      </div>
    </div>
  );
}

export default FileUploaderProgress