
import React, { useState } from 'react';
import type { Mechanism } from '../types';
import AccordionItem from './AccordionItem';

interface AccordionProps {
  mechanisms: Mechanism[];
}

const Accordion: React.FC<AccordionProps> = ({ mechanisms }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3">
      {mechanisms.map((mechanism, index) => (
        <AccordionItem
          key={mechanism.title}
          title={mechanism.title}
          description={mechanism.description}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
