/* ================== START: Imports ================== */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
/* ================== END: Imports ================== */

/* ================== START: Mouse & Touch Handlers ================== */
export function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const mouseX = e.clientX - rect.left - rect.width / 2;
  const mouseY = e.clientY - rect.top - rect.height / 2;

  let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

  angle = (angle + 360) % 360;

  card.style.setProperty("--start", `${angle + 60}`);
}

export function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const touch = e.touches[0];

  const touchX = touch.clientX - rect.left - rect.width / 2;
  const touchY = touch.clientY - rect.top - rect.height / 2;

  let angle = Math.atan2(touchY, touchX) * (180 / Math.PI);
  angle = (angle + 360) % 360;

  card.style.setProperty("--start", `${angle + 60}`);
}
/* ================== END: Mouse & Touch Handlers ================== */

// ================== START: cn Utility ==================
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// ================== END: cn Utility ==================

// ================== START: Icon Mapper ==================
export const getIcon = (name: string): LucideIcon => {
  // @ts-ignore
  const Icon = Icons[name];
  return Icon || Icons.HelpCircle; // Fallback to HelpCircle if not found
};
// ================== END: Icon Mapper ==================
