
import React from 'react';
import type { ContactMethod, ContactDetail } from '../types';

const ContactCard: React.FC<ContactMethod> = ({ icon, title, details }) => {
  const renderDetail = (detail: ContactDetail, index: number) => {
    const content = (
      <>
        {detail.label && <span className="font-semibold text-slate-600">{detail.label}: </span>}
        <span className={detail.label ? 'text-slate-500' : 'text-slate-500 text-sm'}>{detail.value}</span>
      </>
    );

    if (detail.href) {
      return (
        <a 
          key={index}
          href={detail.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
        >
          {content}
        </a>
      );
    }

    return <p key={index} className="text-slate-500">{content}</p>;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col h-full border border-slate-100">
      <div className="flex items-center mb-4">
        <div className="bg-cyan-100 rounded-full p-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-700 ml-4">{title}</h3>
      </div>
      <div className="space-y-2 mt-2">
        {details.map(renderDetail)}
      </div>
    </div>
  );
};

export default ContactCard;
