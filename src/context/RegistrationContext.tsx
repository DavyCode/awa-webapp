"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";
import { useAuthContext } from "./AuthContext";
import { useCreateIndividual } from "@/queries/auth-queries";
import useToast from "@/hooks/useToast";

const howDidYouHearAboutUs = [
  {
    label: "Others",
    value: "Others",
  },
];

export const useRegistrationManager = () => {
  const { onSubmit, loginSubmit, createPasswordSubmit, individualFormData } =
    useAuthContext();
  const [activeTab, setActiveTab] = useState<"individual" | "corporate">(
    "individual",
  );

  const { errorToastHandler } = useToast();

  const { mutate, isPending } = useCreateIndividual(
    errorToastHandler,
    (data) => {
      console.log("data :>> ", data);
    },
  );
  return {
    mutate,
    isPending,
  };
};

type RegistrationContextProps = ReturnType<typeof useRegistrationManager>;

export const registrationContext =
  createContext<RegistrationContextProps | null>(null);

const RegistrationProvider = ({ children }: { children: ReactNode }) => {
  const contextData = useRegistrationManager();

  return (
    <registrationContext.Provider value={contextData}>
      {children}
    </registrationContext.Provider>
  );
};

export const useRegistrationContext = () => {
  const context = useContext(registrationContext);
  if (!context) {
    throw new Error(
      "useRegistrationContext must be used within a RegistrationProvider",
    );
  }
  return context;
};

export default RegistrationProvider;
