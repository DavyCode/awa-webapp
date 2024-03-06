"use client";

/* eslint-disable consistent-return */
import dayjs from "dayjs";
import flatpickr from "flatpickr";
import { Instance } from "flatpickr/dist/types/instance";
import { BaseOptions } from "flatpickr/dist/types/options";
import { useCallback, useRef } from "react";
import CalendarIcon from "@/assets/svgs/calendar.svg";

import "flatpickr/dist/flatpickr.min.css";

import "../../styles/flatpickr.css";

interface Props extends Partial<BaseOptions> {
  placeholder?: string;
  onDateChange?: (arg: any) => void;
}

const options: Partial<BaseOptions> = {
  mode: "single",
  static: true,
  monthSelectorType: "static",
  dateFormat: "M j, Y",
  defaultDate: dayjs().toDate(),
  prevArrow:
    '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
  nextArrow:
    '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
  onReady: (selectedDates, dateStr, instance) => {
    (instance.element as HTMLInputElement).value = dateStr.replace("to", "-");
  },
  onChange: (selectedDates, dateStr, instance) => {
    (instance.element as HTMLInputElement).value = dateStr.replace("to", "-");
  },
};

const DatePicker = ({ placeholder, onDateChange, ...others }: Props) => {
  const fpRef = useRef<Instance | null>(null);
  const refCallback = useCallback((node: HTMLInputElement) => {
    if (!node) return null;
    fpRef.current = flatpickr(node, {
      ...options,
      ...others,
      onChange: (selectedDates, dateStr, instance) => {
        (instance.element as HTMLInputElement).value = dateStr.replace(
          "to",
          "-",
        );
        onDateChange?.({
          target: {
            value: selectedDates[0],
          },
        });
      },
    });
  }, []);

  return (
    <div className="relative flex flex-1 w-full">
      <div className="flex flex-1 w-full">
        <div className="flex items-center calendar px-4 py-[10px] bg-white rounded-lg w-full [&>div]:flex-1 relative">
          <CalendarIcon />
          <input
            type="text"
            ref={refCallback}
            className="w-full px-3 font-medium form-input text-slate-500 hover:text-slate-600 focus:border-slate-300 flatpickr-input active focus:outline focus:outline-2 focus:outline-transparent"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
