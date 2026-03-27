import { Snowflake, Heart, BedDouble, Activity, Lightbulb, Wind, type LucideIcon } from "lucide-react";

export interface CategoryStyle {
  icon: LucideIcon;
  gradient: string;
}

export const categoryStyles: Record<string, CategoryStyle> = {
  "medical-cold-chain": {
    icon: Snowflake,
    gradient: "from-blue-500 to-cyan-600",
  },
  "blood-bank-equipment": {
    icon: Heart,
    gradient: "from-red-500 to-rose-600",
  },
  "hospital-furniture": {
    icon: BedDouble,
    gradient: "from-emerald-500 to-teal-600",
  },
  "medical-equipment": {
    icon: Activity,
    gradient: "from-violet-500 to-purple-600",
  },
  "modular-ot": {
    icon: Lightbulb,
    gradient: "from-amber-500 to-orange-600",
  },
  "medical-gas-pipeline": {
    icon: Wind,
    gradient: "from-sky-500 to-blue-600",
  },
};

export function getCategoryStyle(categoryId: string): CategoryStyle {
  return (
    categoryStyles[categoryId] ?? {
      icon: Activity,
      gradient: "from-slate-500 to-slate-600",
    }
  );
}
