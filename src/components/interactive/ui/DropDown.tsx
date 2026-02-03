import React, { Fragment, useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

type DropDownItem = {
  name: string;
  to: string;
  description?: string;
};

type Props = {
  label: string;
  items: DropDownItem[];
  activePath?: string;
  className?: string;
  onItemClick?: () => void;
};

const DropDown: React.FC<Props> = ({
  label,
  items,
  activePath = "",
  className = "",
  onItemClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (e.target instanceof Node && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // activePath matching uses full-path equality only

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      ref={rootRef}
      className={`relative z-10 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((s) => !s)}
        className={`flex items-center gap-2 px-2 py-1 cursor-pointer ${isOpen ? "text-primary" : ""}`}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div
          className="absolute left-0 mt-2 w-56 bg-card border rounded-lg shadow-lg p-2 ring-1 ring-black/5"
          role="menu"
        >
          <div className="space-y-1">
            {items.map((item) => {
              const isActive = item.to === activePath;

              return (
                <a
                  key={item.to}
                  href={item.to}
                  onClick={() => {
                    setIsOpen(false);
                    if (onItemClick) onItemClick();
                  }}
                  className={`block px-3 py-2 rounded-lg hover:bg-primary/10 transition ${isActive ? "bg-primary/10 text-primary font-medium" : "text-foreground/90"}`}
                  role="menuitem"
                >
                  <div className="text-sm">{item.name}</div>
                  {item.description && (
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {item.description}
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default DropDown;
