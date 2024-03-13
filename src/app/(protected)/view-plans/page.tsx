"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackIcon from "@/assets/svg/back-icon.svg";
import PlanCard from "./card";
import { PlanData } from "@/lib/data";
import SheetComponent from "@/components/Modal/SheetComponent";

const ViewPlans = () => {
  const router = useRouter();
  // const [isSheetOpen, setIsSheetOpen] = useState<boolean>(true);

  // const handleCloseSheet = () => setIsSheetOpen(false);
  return (
    <>
      {/* <SheetComponent isOpen={isSheetOpen} handleClose={handleCloseSheet}>
          <div className="overflow-y-auto h-full">
            Content goes here
          </div>
        </SheetComponent> */}

      <div className="px-10 mt-12 mb-14">
        <div className="w-full sm:w-[253px] space-y-4">
          <div
            className="w-full sm:w-[90px] flex gap-2 text-[#3D663D] cursor-pointer items-center"
            onClick={() => router.back()}
          >
            <span className="w-4 h-4">
              <BackIcon />
            </span>
            Go back
          </div>
          <div className="text-sm text-[#C2C2C2]">
            Dashboard /Total valuebah/
            <span className="text-[#3D663D]">View plans</span>
          </div>
          <h1 className="text-xl text-[#1A1A1A] font-medium">View Plans</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-between flex-wrap">
          {PlanData.map(({ label, title, amount, desc }, index) => (
            <PlanCard
              label={label}
              index={index}
              title={title}
              amount={amount}
              desc={desc}
              key={title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewPlans;
