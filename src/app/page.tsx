import React from "react";
import LoginComponent from "@/components/Login/LoginComponent";
import AuthProvider from "@/context/AuthContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between sm:py-0 w-full">
      <AuthProvider>
        <LoginComponent />
      </AuthProvider>
    </main>
  );
}
