"use client";
import Header from "../Header";
import IndividualForm from "./Forms/individual";
import CorporateForm from "./Forms/corporate";
import { useAuthContext } from "@/context/AuthContext";
import CreatePasswordComponent from "../CreatePassword/CreatePassword";
import RegistrationProvider from "@/context/RegistrationContext";

const RegisterComponent = () => {
  const {
    setActiveTab,
    activeTab,
    onSubmit,
    activeSection,
    createPasswordSubmit,
  } = useAuthContext();

  const handleTabMenu = (type: "individual" | "corporate") => {
    setActiveTab(type);
  };

  return (
    <div>
      {activeSection === "registration" ? (
        <form
          className="shadow py-5 rounded-md px-6  flex flex-col justify-center w-full sm:w-[438px]"
          onSubmit={onSubmit}
        >
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
        </form>
      ) : (
        <form onSubmit={createPasswordSubmit}>
          <CreatePasswordComponent />
        </form>
      )}
    </div>
  );
};

export default RegisterComponent;
