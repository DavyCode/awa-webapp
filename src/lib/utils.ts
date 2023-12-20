import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatAmount = (num: number) => {
  if (!num) return "0.00";
  const formatted = num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted;
};

export const formatAmountVariant = (num: number) => {
  if (!num) return "0";
  const formatted = num.toLocaleString("en-US");
  return formatted;
};

let timer: any = "";

export class JSONUtils {
  static parse(data: unknown) {
    try {
      return JSON.parse(data as string);
    } catch (error) {
      return null;
    }
  }
}
