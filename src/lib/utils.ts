import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    locale?: string | string[] | undefined;
    currency?: "USD" | "EUR" | "GBP" | "BDT" | "VND";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "VND", notation = "compact", locale = "vn-VN" } = options;

  const numbericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numbericPrice);
}
