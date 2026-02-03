import { handleMouseMove, handleTouchMove } from "@/utils/functions";
import React from "react";

interface Props {
  index: number;
  classname?: string;
  children: React.ReactNode;
}

const TeamCardInteractive: React.FC<Props> = ({
  index,
  classname,
  children,
}) => {
  return (
    <div
      className={`bg-card backdrop-blur-xl border border-primary-foreground/10 rounded-2xl text-center transition-all duration-500 group card p-4 sm:p-6 flex flex-col gap-4 ${classname}`}
      data-aos="zoom-in"
      data-aos-delay={300 + index * 100}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {children}
    </div>
  );
};

export default TeamCardInteractive;
