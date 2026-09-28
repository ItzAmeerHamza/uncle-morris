"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/pages";

export function FaqList({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div key={faq.question} className="faq-item">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              {faq.question}
            </button>
            {isOpen ? <p>{faq.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
