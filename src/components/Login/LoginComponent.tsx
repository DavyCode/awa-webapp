"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowCircleLeft from "../../../assets/icons/ArrowCircleLeft";

import { Button } from "../Forms/Button";
import GoogleIcon from "../../../assets/icons/GoogleIcon";
import Link from "next/link";
import Header from "../Header";
import InputField from "../Forms/input-text";
import OrDivider from "../Divider";
import InputPassword from "../Forms/input-password";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="pt-5 flex gap-x-20 flex-col sm:flex-row">
      <Header />
      <div className="py-5 px-6 border border-[#EBEBEB] flex flex-col justify-center w-full sm:w-[438px]">
        <p className="mb-2 text-3xl font-bold text-[#1a1a1a] text-center">
          Login
        </p>
        <span className="mt-2 mb-4 text-[#333] text-center text-sm sm:text-base">
          Welcome back,Please Login to your account
        </span>
        <Button
          className="bg-white/70 w-full gap-x-2 py-3 border-gray-10 rounded-md flex justify-center items-center border-white/70"
          type="button"
        >
          <GoogleIcon />
          <span className="text-sm text-gray-800">Login with Google</span>
        </Button>
        <OrDivider content="or" />
        <div className="flex flex-col gap-6 text-left sm:gap-4">
          <InputField
            label="Email address / Phone number"
            name="email"
            type="email"
            /* error={errors.email?.message} */
            placeholder="Email address"
            /* register={register} */
          />
          <InputPassword
            name="password"
            label="Password"
            placeholder="Password"
          />
          
          <p className="my-1 text-xs">
            <Link href="/forgot-password" passHref>
              <span className="font-bold text-[#027D53] underline">
                Reset password?
              </span>
            </Link>
          </p>

          <Button
            variant="default"
            className="bg-[#3D663D] w-full flex justify-center items-center text-sm font-semibold text-white"
          >
            Log in
          </Button>
          <p className="py-1 text-center text-sm">
            Dont have an account?
            <Link
              href="/register"
              className="ml-1 font-bold text-base text-[#3D663D]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
