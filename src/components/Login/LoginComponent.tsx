"use client";
import React, { useState } from "react";

import GoogleIcon from "@/assets/icons/GoogleIcon";
import Link from "next/link";
import InputFieldText from "../Forms/input-text";
import Header from "../Header";
import OrDivider from "../Divider";
import { useAuthContext } from "@/context/AuthContext";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const LoginComponent = () => {
  const [showPassword] = useState(true);
  const {
    loginForm: {
      register,
      formState: { errors },
    },
    loginSubmit,
    isLoginPending,
  } = useAuthContext();
  return (
    <div>
      <div className="py-5 pl-4 sm:pl-[120px] shadow-auth_header_shadow">
        <Image
          src={"/awabah_logo_updated.png"}
          alt="active Users"
          sizes="80"
          width={118}
          height={45}
        />
      </div>
      <div className="tab:pt-12 flex px-4 tab:px-20 gap-x-20 flex-col tab:flex-row relative tab:justify-center pb-[20px]">
        <div className="py-6 px-4 tab:px-[40px] tab:border border-[#EBEBEB] flex flex-col justify-center w-full max-w-[518px] relative mx-auto">
          <Header />
          <p className="mb-2 text-[32px] leading-[48px] font-bold text-[#1a1a1a] text-center">
            Login
          </p>
          <span className="mt-2 mb-4 text-[#333] text-center text-sm sm:text-base">
            Welcome back. Please Login to your account
          </span>
          {/* <Button
          className="bg-[rgba(241,241,241,0.60)] w-full gap-x-2 py-3 rounded-md flex justify-center items-center border-[#EBEBEB] border px-4 h-[unset] shadow-none"
          type="button"
        >
          <GoogleIcon />
          <span className="text-sm leading-[22px] text-[#333]">
            Login with Google
          </span>
        </Button>
        <OrDivider content="or" /> */}
          <form
            className="flex flex-col gap-6 text-left sm:gap-4"
            onSubmit={loginSubmit}
          >
            <InputFieldText
              label="Email address"
              name="email"
              type="email"
              error={errors.email?.message}
              placeholder="Email address"
              register={register}
            />
            <InputFieldText
              label="Password"
              name="password"
              type="password"
              error={errors.password?.message}
              placeholder="Enter password"
              register={register}
              showIcon={true}
            />
            <p className="">
              <Link href="/reset-password" passHref>
                <span className="font-semibold text-[#3D663D] underline text-sm leading-4">
                  Reset password?
                </span>
              </Link>
            </p>

            <Button
              type="submit"
              className={cn(
                "py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4",
                {
                  "bg-button_loading": isLoginPending,
                },
              )}
              style={{
                backgroundColor: "var(--primary)",
              }}
              disabled={isLoginPending}
            >
              {isLoginPending ? "Logging in. Please wait..." : "Log in"}
            </Button>
            <p className="py-1 text-center text-[#333]">
              Dont have an account?
              <Link
                href="/register"
                className="ml-1 font-bold text-base text-[#3D663D] leading-[19px]"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
