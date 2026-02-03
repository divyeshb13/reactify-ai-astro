import type { CardGradientBgProps } from "@/utils/types";
import React from "react";

const CardGradientBg: React.FC<CardGradientBgProps> = ({
  className = "",
  hover = false,
  gradientClass = "bg-[image:var(--gradient-primary)]",
  gridOpacity = 0.15,
  children,
}) => (
  <>
    {/* If children are provided, render as gradient text span */}
    {children ? (
      <span
        className={`${gradientClass} ${className} bg-clip-text text-transparent`}
      >
        {children}
      </span>
    ) : (
      <>
        {/* Gradient background, appears on hover if enabled */}
        <div
          className={`absolute inset-0 ${gradientClass} pointer-events-none transition-opacity duration-500 ${
            hover ? "opacity-0 group-hover:opacity-10" : ""
          } ${className}`}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: gridOpacity }}
        >
          <div
            style={{
              backgroundImage: `var(--gradient-grid)`,
              backgroundSize: "15px 15px",
            }}
            className="w-full h-full"
          />
        </div>
      </>
    )}
  </>
);

export default CardGradientBg;
