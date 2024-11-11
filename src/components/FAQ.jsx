import React from 'react'
import Faqs from './Faqs'
import { FaqData } from '../data/data'

const FAQ = () => {
  return (
    <div>
        <div className="faqs">
                        <div className="faqs w-[100%] px-4 text-xl mx-auto my-5">
                            {FaqData.map((faq, index) => (
                                <Faqs
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    
                                />
                            ))}
                        </div>
                    </div>
    </div>
  )
}

export default FAQ