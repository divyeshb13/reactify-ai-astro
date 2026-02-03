import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQCard1Props } from "@/utils/types";

type Props = FAQCard1Props & {
  open?: boolean;
  onToggle?: () => void;
};

const FaqsCard1Interactive: React.FC<Props> = ({
  question,
  answer,
  index,
  className = "",
  open: controlledOpen,
  onToggle,
}) => {
  const [localOpen, setLocalOpen] = useState(false);

  const isControlled =
    typeof controlledOpen === "boolean" && typeof onToggle === "function";
  const open = isControlled ? controlledOpen! : localOpen;

  const toggle = () => {
    if (isControlled) {
      if (onToggle) onToggle();
    } else {
      setLocalOpen((s) => !s);
    }
  };

  return (
    <div
      suppressHydrationWarning
      className={`bg-card/50 backdrop-blur-xl border border-primary-foreground/10 hover:shadow-[var(--shadow-glass)] rounded-2xl overflow-hidden transition-all duration-300 group relative ${className}`.trim()}
      data-aos="fade-right"
      data-aos-delay={300 + index * 50}
    >
      <button
        onClick={toggle}
        className="w-full p-4 sm:p-6 text-left flex items-center justify-between group gap-2 sm:gap-4 cursor-pointer relative z-10"
      >
        <h3 className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors z-1">
          {question}
        </h3>
        <div className="size-4 sm:size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors z-1">
          {open ? (
            <Minus className="size-3 sm:size-4 group-hover:text-primary" />
          ) : (
            <Plus className="size-3 sm:size-4 group-hover:text-primary" />
          )}
        </div>
      </button>

      <div
        className={`transform transition-all duration-700 ease-in-out origin-top z-[1000] ${
          open
            ? "max-h-96 opacity-100 scale-y-100 translate-y-0"
            : "max-h-0 opacity-0 scale-y-95 -translate-y-2 overflow-hidden"
        }`}
      >
        {/* NeuralLine implementation in React */}
        <div className={`absolute top-0 left-0 right-0 w-full`}>
          <div className="relative h-px overflow-hidden bg-[image:var(--gradient-primary)] opacity-30" />
        </div>
        <div className="p-4 sm:p-6 z-10">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </div>

      {open && (
        <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-gradiant-from/60 via-gradiant-via/80 to-gradiant-from/60 rounded-r-full" />
      )}
    </div>
  );
};

export default FaqsCard1Interactive;
