"use client";

import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Logo from "@/assets/icons/Logo copy";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="relative w-full shadow-[0_20px_40px_0px_rgba(223,223,223,0.25)]">
      <div className="sticky top-0 z-20 flex items-center justify-between w-full px-3 py-4 sm:px-20 max-w-[1440px] mx-auto">
        <div className="flex items-center flex-1">
          <div
            className="flex items-center justify-between gap-4 cursor-pointer sm:mr-8"
            onClick={() => router.push("https://awa-site.netlify.app/")}
          >
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
