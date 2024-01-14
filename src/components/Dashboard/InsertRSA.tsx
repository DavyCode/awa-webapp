"use client";
import React, { useState } from "react";

import Link from "next/link";
import InputFieldText from '../Forms/input-text'
import { Button } from "../ui/button";

const InsertPFAPin = () => {
  const [showPassword] = useState(true);
  return (
    <div className="flex flex-col">
        <div className="flex flex-col gap-6 text-left sm:gap-4">
          <InputFieldText
            label="Enter PFA"
            name="rfa"
            type="tel"
            /* error={errors.email?.message} */
            placeholder="5647563746736"
            /* register={register} */
          />
          <InputFieldText
            label="Enter PIN"
            name="rfa"
            type="tel"
            /* error={errors.email?.message} */
            placeholder="5647563746736"
            /* register={register} */
          />
          <InputFieldText
            label="Name"
            name="Name"
            type={"text"}
            /* error={errors.userPassword?.message} */
            placeholder="Name"
            /* register={register} */
          />

          <Button
            type="button"
            className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="link"
            className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4"
          >
            Enroll
          </Button>
        </div>
      </div>
  );
};

export default InsertPFAPin;
