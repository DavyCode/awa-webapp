import React from "react";
import clsx from "clsx";

interface TabProps {
  label: string;
  handleClick: (arg: string) => void;
  isActive: boolean;
}

const Tab: React.FC<TabProps> = ({ isActive, label, handleClick }) => {
  return (
    <p
      className={clsx({
        "flex gap-[13px] text-gray-400 w-fit pb-1 cursor-pointer justify-between":
          true,
        "border-b-2 !text-[#3D663D] border-[#3D663D] bg-white font-bold": isActive
      })}
      onClick={() => {
        handleClick(label);
      }}
    >
      {label}
    </p>
  );
};

export default Tab;
