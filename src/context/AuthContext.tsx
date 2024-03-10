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
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<
    "registration" | "password"
  >("registration");
  const [formData, setFormData] = useState<Omit<
    IndividualSignupFormProps,
    "password"
  > | null>(null);
  const { errorToastHandler, successToastHandler, loadingToastHandler } =
    useToast();

  const { mutate, isPending } = useCreateIndividual(
    errorToastHandler,
    (msg: string) => {
      successToastHandler(msg);
      router.push(
        `/otp-verification?p=${encodeURIComponent(
          formData?.phoneCountryCode as string,
        )}${encodeURIComponent(formData?.phoneNumber as string)}`,
      );
    },
  );

  const signupForm = useForm<IndividualSignupFormProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      phoneCountryCode: "",
      howDidYouHearAboutUs: null as any,
      country: null,
    },
    context: {
      activeTab,
    },
    resolver: yupResolver<any>(signUpSchema),
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

  const onSubmit = signupForm.handleSubmit(({ referredBy, ...others }) => {
    console.log("others :>> ", others);
    setFormData({
      ...others,
      howDidYouHearAboutUs: (others.howDidYouHearAboutUs as any)
        ?.value as string,
      country: (others.country as any)?.label as string,
      ...(others?.businessName
        ? { accountType: "Business" }
        : { accountType: "Individual" }),
      ...(referredBy ? { referredBy } : {}),
    });
    setActiveSection("password");
  });
  const loginSubmit = loginForm.handleSubmit((data) => {
    console.log("data :>> ", data);
  });
  const createPasswordSubmit = passwordCreationForm.handleSubmit((data) => {
    console.log("data :>> ", data);
    loadingToastHandler("Creating an account. Please wait...");
    mutate({
      ...((formData as Omit<IndividualSignupFormProps, "password">) || {}),
      password: data.password,
    });
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
    formData,
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
