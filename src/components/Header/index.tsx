import React from "react";
import ActiveUsers from "../../../public/users.png";
import Image from "next/image";
import ArrowCircleLeft from "../../../assets/icons/ArrowCircleLeft";

const Header = () => {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-x-2 mb-5">
        <ArrowCircleLeft />
        Go back
      </div>
      <div className="flex gap-x-4 w-full sm:w-fit sm:h-auto items-center">
        <Image src={ActiveUsers} alt="active Users" sizes="80" />
        <div className="flex flex-col">
          <span className="font-bold text-[#1a1a1a]">50k+</span>
          <p className="text-xs">Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
