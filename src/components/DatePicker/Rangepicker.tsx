"use client";

/* eslint-disable consistent-return */
import flatpickr from "flatpickr";
import { Instance } from "flatpickr/dist/types/instance";
import { BaseOptions } from "flatpickr/dist/types/options";
import { forwardRef, Ref, useCallback } from "react";
import CalendarIcon from "@/assets/svgs/calendar.svg";
import "flatpickr/dist/flatpickr.min.css";

import "../../styles/flatpickr.css";

const options: Partial<BaseOptions> = {
  mode: "range",
  static: true,
  monthSelectorType: "static",
  dateFormat: "M j, Y",
  minDate: "2000-01",
  //   maxDate: +dayjs().endOf("day"),
  //   defaultDate: [dayjs().subtract(1, "year").toDate(), dayjs().toDate()],
  prevArrow:
    '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
  nextArrow:
    '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
  onReady: (selectedDates, dateStr, instance) => {
    // (instance.element as HTMLInputElement).value = dateStr.replace("to", "-");
  },
};

const RangePicker = forwardRef((props: any, ref: Ref<Instance>) => {
  const refCallback = useCallback((node: HTMLInputElement) => {
    if (!node) return null;
    const dateRef = (ref as any) || {};
    if ("current" in dateRef) {
      (ref as any).current = flatpickr(node, {
        ...options,
        defaultDate: props.defaultDates || [],
        onChange: (selectedDates, dateStr, instance) => {
          if (selectedDates.length > 1) {
            props.dateHandler(selectedDates);
          }
          // dayjs(dateRef?.selectedDates?.[0]).format("DD-MM-YYYY HH:mm:ss")
          (instance.element as HTMLInputElement).value = dateStr.replace(
            "to",
            "-",
          );
        },
        onClose: (selectedDates) => {
          props.closeDateHandler?.(selectedDates);
        },
        onOpen: (selectedDates) => {
          props.openDateHandler?.();
        },
      });
    }
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div className="flex items-center calendar gap-2 max-w-[270px] pl-[21px] p-[3px] [&>svg]:w-[17px] [&>svg]:h-4">
          <CalendarIcon />
          <input
            type="text"
            ref={refCallback}
            className="px-3 py-[14px] font-normal form-input hover:text-[#344054] focus:border-slate-300 min-w-[13rem] flatpickr-input active focus:outline focus:outline-2 focus:outline-transparent text-xs text-[#656161]"
            placeholder="Select a date range"
          />
        </div>
      </div>
    </div>
  );
});

RangePicker.displayName = "RangePicker";

export default RangePicker;
