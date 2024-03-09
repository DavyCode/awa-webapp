import RegisterComponent from "@/components/Register";
import AuthProvider from "@/context/AuthContext";
import RegistrationProvider from "@/context/RegistrationContext";
import React from "react";

const page = () => {
  return (
    <AuthProvider>
      <RegistrationProvider>
        <RegisterComponent />
      </RegistrationProvider>
    </AuthProvider>
  );
};

export default page;
