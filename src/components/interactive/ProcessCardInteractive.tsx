import { handleMouseMove, handleTouchMove } from "@/utils/functions";
import React from "react";

interface Props {
  index: number;
  className?: string;
  children: React.ReactNode;
}

const ProcessCardInteractive: React.FC<Props> = ({
  index,
  className,
  children,
}) => {
  const baseClassName =
    "relative flex card rounded-2xl dark:bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 backdrop-blur-xl border-border/50 hover:border-primary/50 group transition-all duration-500";

  return (
    <div
      className={`${baseClassName} ${className || ""}`}
      data-aos="fade-up"
      data-aos-delay={300 + index * 100}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {children}
    </div>
  );
};

export default ProcessCardInteractive;
