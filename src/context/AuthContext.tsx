"use client";

import {
  createPasswordSchema,
  loginSchema,
  signUpSchema,
} from "@/schema/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";

const howDidYouHearAboutUs = [
  {
    label: "Others",
    value: "Others",
  },
];

export const useAuthManager = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "corporate">(
    "individual",
  );

  const [activeSection, setActiveSection] = useState<
    "registration" | "password"
  >("registration");

  const signupForm = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      //   phoneCountryCode: "",
      howDidYouHearAboutUs: "",
      referredBy: "",
      country: undefined,
      refCode: "",
      //   type: "individual",
    },
    context: {
      activeTab,
    },
    resolver: yupResolver(signUpSchema),
  });

  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const passwordCreationForm = useForm({
    defaultValues: {
      confirm_password: "",
      password: "",
    },
    resolver: yupResolver(createPasswordSchema),
  });

  const countryArr = useMemo(() => countryList().getData(), []);

  const onSubmit = signupForm.handleSubmit((data) => {
    console.log("data :>> ", data);
  });
  const loginSubmit = loginForm.handleSubmit((data) => {
    console.log("data :>> ", data);
  });
  const createPasswordSubmit = passwordCreationForm.handleSubmit((data) => {
    console.log("data :>> ", data);
  });

  return {
    setActiveTab,
    activeTab,
    signupForm,
    countryArr,
    onSubmit,
    loginSubmit,
    howDidYouHearAboutUs,
    activeSection,
    setActiveSection,
    createPasswordSubmit,
    passwordCreationForm,
  };
};

type AuthContextProps = ReturnType<typeof useAuthManager>;

export const authContext = createContext<AuthContextProps | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const contextData = useAuthManager();

  return (
    <authContext.Provider value={contextData}>{children}</authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
