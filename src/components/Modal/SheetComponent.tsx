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
    handleClose: any
}
const SheetComponent:React.FC<SheetProps> = ({ isOpen, children, handleClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="w-full sm:max-w-xl sm:w-[532px]">
        <SheetHeader>
          <div className="flex items-center gap-x-2 text-[#3D663D] cursor-pointer mb-[26px]" onClick={handleClose}>
            <ArrowCircleLeft />
            Go back
          </div>
          <SheetDescription className="h-screen overflow-y-auto">{children}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default SheetComponent