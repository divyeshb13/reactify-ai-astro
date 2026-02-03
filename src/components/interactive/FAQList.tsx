import React, { useState, useRef } from "react";
import FaqsCard1Interactive from "@/components/interactive/FaqsCard1Interactive";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
};

const FAQList: React.FC<Props> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const animationDuration = 700;
  const openTimeoutRef = useRef<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {items.map((faq, index) => (
        <FaqsCard1Interactive
          key={index}
          question={faq.question}
          answer={faq.answer}
          index={index}
          open={openIndex === index}
          onToggle={() => {
            // If clicking the already-open item -> close it
            if (openIndex === index) {
              setOpenIndex(null);
              return;
            }

            // If another item is open, close it first, then open the clicked one
            if (openIndex !== null && openIndex !== index) {
              setOpenIndex(null);
              // clear any existing timeout
              if (openTimeoutRef.current) {
                window.clearTimeout(openTimeoutRef.current);
              }
              // after animationDuration, open the requested index
              openTimeoutRef.current = window.setTimeout(() => {
                setOpenIndex(index);
                openTimeoutRef.current = null;
              }, animationDuration);
              return;
            }

            // Otherwise, open the clicked item immediately
            setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default FAQList;
