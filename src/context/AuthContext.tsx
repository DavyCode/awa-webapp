"use client";

import useToast from "@/hooks/useToast";
import { useCreateIndividual } from "@/queries/auth-queries";
import {
  createPasswordSchema,
  loginSchema,
  signUpSchema,
} from "@/schema/authSchema";
import { IndividualSignupFormProps } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import countryList from "react-select-country-list";

const howDidYouHearAboutUs = [
  {
    label: "FACEBOOK",
    value: "Facebook",
  },
  {
    label: "INSTAGRAM",
    value: "Instagram",
  },
  {
    label: "TWITTER",
    value: "Twitter",
  },
  {
    label: "NEWS",
    value: "News",
  },
  {
    label: "EVENT",
    value: "Event",
  },
  {
    label: "FRIENDS",
    value: "Friends",
  },
  {
    label: "FAMILY",
    value: "Family",
  },
  {
    label: "ONLINE_BLOG",
    value: "Online Blog",
  },
  {
    label: "GOOGLE",
    value: "Google",
  },
  {
    label: "GOOGLE_PLAYSTORE",
    value: "Google Playstore",
  },
  {
    label: "APPLE_APPSTORE",
    value: "Apple Appstore",
  },
  {
    label: "OTHERS",
    value: "Other",
  },
];

export const useAuthManager = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "corporate">(
    "individual",
  );

  const [activeSection, setActiveSection] = useState<
    "registration" | "password"
  >("password");
  const [individualFormData, setIndividualFormData] = useState<Omit<
    IndividualSignupFormProps,
    "password"
  > | null>(null);
  const [corporateFormData, setCorporateFormData] = useState({});
  const { errorToastHandler } = useToast();

  const { mutate, isPending } = useCreateIndividual(
    errorToastHandler,
    (data) => {
      console.log("data :>> ", data);
    },
  );

  const signupForm = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      phoneCountryCode: "",
      howDidYouHearAboutUs: null as any,
      referredBy: "",
      country: undefined,
      //   type: "individual",
    },
    context: {
      activeTab,
    },
    resolver: yupResolver(signUpSchema),
  });

  //login form data
  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  //create password form data
  const passwordCreationForm = useForm({
    mode: "all",
    reValidateMode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      confirm_password: "",
      password: "",
    },
    resolver: yupResolver(createPasswordSchema),
  });

  const countryArr = useMemo(() => countryList().getData(), []);

  const onSubmit = signupForm.handleSubmit((data) => {
    console.log("data :>> ", data);
    activeTab === "individual"
      ? setIndividualFormData({
          ...data,
          howDidYouHearAboutUs: data.howDidYouHearAboutUs?.value as string,
        })
      : setCorporateFormData((curr) => ({
          ...curr,
          ...data,
        }));
    setActiveSection("password");
  });
  const loginSubmit = loginForm.handleSubmit((data) => {
    console.log("data :>> ", data);
  });
  const createPasswordSubmit = passwordCreationForm.handleSubmit((data) => {
    console.log("data :>> ", data);
    activeTab === "individual"
      ? mutate({
          ...((individualFormData as Omit<
            IndividualSignupFormProps,
            "password"
          >) || {}),
          password: data.password,
          //   phoneCountryCode: "",
        })
      : setCorporateFormData((curr) => ({
          ...curr,
          ...data,
        }));
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
    corporateFormData,
    individualFormData,
    isIndividualApplicationLoading: isPending,
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
