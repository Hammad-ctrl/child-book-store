import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const Faqs = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item border-b poppins-medium border-gray-300 py-3">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={toggleFaq}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        {isOpen ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowDown size={24} />}
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <p className="mt-2 text-gray-600 text-md">{answer}</p>
      </div>
    </div>
  );
};




export default Faqs;
