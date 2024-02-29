// components/DatePicker.tsx
import React, { useEffect, useRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import DateCalendarIcon from '@/assets/svg/date-calendar.svg'

interface DatePickerProps {
  name: string;
  label: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, label }) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({ name, control });
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const datePicker = flatpickr(inputRef.current!, {
      dateFormat: "d-m-Y",
    });

    return () => {
      datePicker.destroy();
    };
  }, []);

  return (
    <div className="mb-4 relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
      <input
        {...field}
        ref={(e) => {
          inputRef.current = e;
          field.ref(e);
        }}
        type="text"
        placeholder="Select a date"
        className={`w-full border rounded-md mt-1 pl-3 h-10 focus:outline-none sm:text-sm ${
          fieldState.invalid ? "border-red-500" : ""
        }`}
      />
       <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <DateCalendarIcon />
        </div>
    </div>
      {fieldState.invalid && (
        <p className="mt-2 text-sm text-red-500">
          {fieldState?.error?.message}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
