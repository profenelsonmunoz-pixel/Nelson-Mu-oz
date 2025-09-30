
import React from 'react';

interface AccordionItemProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, description, isOpen, onClick }) => {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-4 sm:p-5 bg-slate-50 hover:bg-slate-100 transition-colors"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg font-semibold text-slate-700">{title}</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 text-cyan-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="p-4 sm:p-5 text-slate-600 bg-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
