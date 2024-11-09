import React, { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const MoreCheckOut = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [transition, setTransition] = useState(false); 

  const featureSets = [
    { 
      features: ['Lips', 'Eyes', 'Hands', 'Scent', 'Arms', 'Hair', 'Mind', 'Smile'],
      question: "Pick three features you love about heloo"
    },
    { 
      features: ['Travel', 'Walks', 'Chilling', 'Films', 'Dinning', 'Partying'],
      question: "Pick three activities you and heloo enjoy doing together"
    },
    { 
      features: ['Humor', 'Style', 'Kindness', 'Strength', 'Adventure', 'Sensuality'],
      question: "Pick three qualities you love about heloo"
    }
  ];

  const BackToHome = () => setTimeout(() => navigate("/"), 100);
  const BackToCheckOut = () => setTimeout(() => navigate("/checkout"), 100);

  const handleSelectFeature = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== feature));
    } else if (selectedFeatures.length < 3) {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleContinue = () => {
    if (selectedFeatures.length === 3) {
      setTransition(true); // Trigger animation
      setSelectedFeatures([]); // Reset selections

      setTimeout(() => {
        setTransition(false); // Reset animation state after the transition
        if (currentStep < featureSets.length - 1) {
          setCurrentStep(currentStep + 1); // Move to next question
        } else {
          navigate('/book/generate'); // Navigate to new route if it’s the last step
        }
      }, 300); // Match this delay with the animation duration
    } else {
      alert("Please select exactly 3 features before continuing.");
    }
  };

  return (
    <div className='checkoutpage w-full bg-[#FDF8F1] min-h-screen kanit'>
      {/* Static Top Bar */}
      <div className="top-bar w-full h-12 bg-[#23231e] relative flex items-center justify-center">
        <h2 className='text-white text-xl'>Where are You?</h2>
        <span className='absolute right-2 top-5 text-white cursor-pointer'>
          <RxCross1 onClick={BackToHome} />
        </span>
      </div>

      {/* Step Header with Slide Animation */}
      <div className={`step-header flex flex-col items-center mt-6 mb-4 ${transition ? 'slide-in' : ''}`}>
        <h4 className='text-gray-400 text-sm'>Step {currentStep + 3} of {3 + featureSets.length}</h4>
        <h3 className='text-2xl font-semibold text-center'>
          {featureSets[currentStep].question}
        </h3>
      </div>

      {/* Feature Selection with Slide Animation */}
      <div className={`features-container flex flex-col items-center w-full justify-center gap-2 mb-3 ${transition ? 'slide-in' : ''}`}>
        <p className='text-sm w-[40%] '>Choose 3 of {featureSets[currentStep].features.length}</p>
        {featureSets[currentStep].features.map((feature) => (
          <div 
            key={feature}
            onClick={() => handleSelectFeature(feature)}
            className={`cursor-pointer w-[95%] md:w-[40%] sm:w-[80%] py-2 px-4 text-center border 
              ${selectedFeatures.includes(feature) ? 'bg-[#1E5751] text-white' : 'bg-[#FFFFFF] border-2 border-gray-500 text-gray-700'}
              ${selectedFeatures.length === 3 && !selectedFeatures.includes(feature) ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="flex justify-center">
        <button
          onClick={handleContinue}
          className="bg-[#23231E] text-white px-6 py-2 w-[95%] sm:w-[80%] md:w-[40%] font-semibold transition-colors"
        >
          Continue
        </button>
      </div>

      {/* Back to Previous Step */}
      <div className="back-to-home flex items-center justify-center mt-3">
        <p className='flex items-center gap-3 '>
          <IoMdArrowBack size={21} onClick={BackToCheckOut} />Back to Previous Step
        </p>
      </div>
    </div>
  );
};

export default MoreCheckOut;
