import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-4 text-left font-medium text-gray-800 hover:text-primary transition-colors"
      >
        <span>{question}</span>
        <span className="transition-transform duration-300">
          {open ? (
            <ChevronUp className="w-5 h-5 transform rotate-180" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </span>
      </button>

      {/* Transisi konten jawaban */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm text-gray-600">{answer}</p>
      </div>
    </div>
  );
}
