"use client";

import { signUpSchema } from "@/schema/authSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";

export const useAuthManager = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "corporate">(
    "individual",
  );

  const authForm = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      //   phoneCountryCode: "",
      howDidYouHearAboutUs: "",
      referredBy: "",
    },
    context: {
      activeTab,
    },
    resolver: yupResolver(signUpSchema),
  });
  return {
    setActiveTab,
    activeTab,
    authForm,
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
