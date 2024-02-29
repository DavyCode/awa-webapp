'use client'
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import clsx from 'clsx'

interface CountryCodeInputProps {
  name: string;
  label: string
  error?: string
}

const CountryCodeInput: React.FC<CountryCodeInputProps> = ({ name, label, error  }) => {
  const { control } = useForm();

  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Controller
        render={({ field }) => (
          <PhoneInput
            {...field}
            inputProps={{
              name,
              required: true,
            }}
            country={"ng"}
            inputClass={clsx({
              ["flex justify-between items-center !w-full !border-none focus:outline-none placeholder:text-color-100 overflow-hidden"]:
                true,
            })}
            containerClass={clsx({
              "border border-solid border-gray-200 focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md mt-1 h-10":
                true,
              "border-red-600": !!error,
            })}
            dropdownClass="bg-white"
            countryCodeEditable={false}
          />
        )}
        control={control}
        name={name}
      />
    </div>
  );
};

export default CountryCodeInput;
