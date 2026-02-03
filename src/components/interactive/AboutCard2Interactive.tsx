import { handleMouseMove, handleTouchMove } from "@/utils/functions";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const AboutCard2Interactive: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`group relative overflow-visible rounded-3xl transition-all duration-700 backdrop-blur-sm bg-card hover:shadow-2xl card ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {children}
    </div>
  );
};

export default AboutCard2Interactive;
