"use client";
import React, { useState } from "react";
import Header from "../Header";
import IndividualForm from "./Forms/individual";
import CorporateForm from "./Forms/corporate";

const RegisterComponent = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [activeTab, setActiveTab] = useState("individual");

  const handleTabMenu = (type: string) => {
    if (type === "individual") {
      setActiveTab("individual");
    } else {
      setActiveTab("corporate");
    }
  };

  return (
    <div className="pt-20 flex px-4 sm:px-20 gap-x-20 flex-col sm:flex-row">
      <Header isVisible />
      <div className="py-5 px-6 border border-[#EBEBEB] flex flex-col justify-center w-full sm:w-[438px]">
        <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
          Get Started
        </p>
        <span className="mt-2 mb-4 text-[#333] text-center text-sm sm:text-base">
          Sign up to Awabah to get started
        </span>
        <div className="border p-2 text-sm font-medium cursor-pointer bg-white rounded-md w-full border-[#EBEBEB] flex justify-between items-center gap-x-4">
          <div
            onClick={() => handleTabMenu("individual")}
            className={`${
              activeTab === "individual" ? "bg-[#E0ECD8]" : "bg-transparent"
            } text-[#0A330A] flex justify-center items-center w-full py-2 rounded-md`}
          >
            Individual/ SMEs
          </div>
          <div
            onClick={() => handleTabMenu("corporate")}
            className={`${
              activeTab === "corporate" ? "bg-[#E0ECD8]" : "bg-transparent"
            } text-[#0A330A] flex justify-center items-center w-full py-2 rounded-md`}
          >
            Corporate Business
          </div>
        </div>
        {activeTab === "individual" ? <IndividualForm /> : <CorporateForm />}
      </div>
    </div>
  );
};

export default RegisterComponent;
