import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import ArrowCircleLeft from "@/assets/icons/ArrowCircleLeft";
interface SheetProps {
    isOpen: boolean;
    children: JSX.Element;
    handleClose: any;
    customizedWidth?: number;
}
const SheetComponent:React.FC<SheetProps> = ({ isOpen, children, handleClose, customizedWidth }) => {
  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent
        className={`sm:max-w-${customizedWidth !== undefined && "2xl"} sm:w-[${
          customizedWidth !== undefined ? customizedWidth + "px" : "532px"
        }]`}
      >
        <SheetHeader>
          <div
            className="flex items-center gap-x-2 text-[#3D663D] cursor-pointer mb-[26px]"
            onClick={handleClose}
          >
            <ArrowCircleLeft />
            Go back
          </div>
          <SheetDescription className="h-screen overflow-y-auto">
            {children}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SheetComponent