import RegisterComponent from "@/components/Register";
import AuthProvider from "@/context/AuthContext";
import React from "react";

const page = () => {
  return (
    <AuthProvider>
      <RegisterComponent />
    </AuthProvider>
  );
};

export default page;
