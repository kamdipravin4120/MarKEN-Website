import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+\d{2})(\d{2})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}
