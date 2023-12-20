"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../../assets/icons/Logo";
import CloseIcon from "../../../assets/icons/CloseIcon";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <div className="relative">
      <div className="flex w-full justify-between fixed bg-white items-center shadow-md h-10 py-8 px-3 sm:px-20 z-20">
        <Link href="/">
            <Logo />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
