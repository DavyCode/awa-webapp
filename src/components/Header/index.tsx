import React from "react";
import ActiveUsers from "../../../public/users.png";
import Image from "next/image";
import ArrowCircleLeft from "../../../assets/icons/ArrowCircleLeft";
import clsx from "clsx"
interface IProp {
  isVisible?: boolean
}

const Header:React.FC<IProp> = ({ isVisible = false }) => {
  return (
    <div className={clsx({"my-2": true,
      "px-4 w-full sm:w-1/6": !isVisible
    })}>
      <div className="flex items-center gap-x-2 mb-5 text-[#3D663D]">
        <ArrowCircleLeft />
        Go back
      </div>
      {isVisible && (
        <div className="flex gap-x-6 w-full sm:w-fit sm:h-auto items-center">
          <Image src={ActiveUsers} alt="active Users" sizes="80" />
          <div className="flex flex-col">
            <span className="font-bold text-[#1a1a1a]">50k+</span>
            <p className="text-xs">Happy Customers</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
