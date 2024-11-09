import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import './css/checkout.css';
import { IoMdArrowBack } from "react-icons/io";
import { FaCheck } from 'react-icons/fa'
import { ImageUrls } from '../data/data';
import Image from '../components/Image';
const CheckOut = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        skinTone: '',
        hairStyle: '',
        facialHair: '',
        eyeColor: '',
        glasses: ''
    });

    const BackToHome = () => {
        setTimeout(() => {
            navigate("/");
        }, 100);
    };

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };
const nextGeneralStep =()=>{
    navigate("/more/checkout")
}
    const nextStep = () => {
        if (currentStep < 6) setCurrentStep(currentStep + 1);
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="step-content sm:w-[80%] w-[95%] md:w-[40%] flex flex-col items-center gap-4">
                        <label className="text-gray-700 text-sm self-start">Enter First Name:</label>
                        <input
                            type="text"
                            className="border-2 border-gray-500  px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                        <div className="flex gap-4 mt-2 w-full">
                            {['male', 'female'].map((gender) => (
                                <div
                                    key={gender}
                                    onClick={() => handleInputChange("gender", gender)}
                                    className={`cursor-pointer px-6 w-1/2 py-3 text-center  ${formData.gender === gender ? 'bg-[#1E5751] text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={gender}
                                        checked={formData.gender === gender}
                                        onChange={() => handleInputChange("gender", gender)}
                                        className="hidden"
                                    />
                                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                                </div>
                            ))}
                        </div>

                    </div>
                );
            case 2:
                return (
                    <div className="step-content flex w-[95%] sm:w-[80%] md:w-[40%] flex-wrap flex-col items-center gap-4">
                        <h3 className="text-sm text-gray-700 self-start">Choose Skin Tone</h3>
                        <div className="flex gap-4 w-full flex-wrap">
                            {[
                                { tone: 'Light', color: '#F9D1B8' },
                                { tone: 'Medium Light', color: '#F0B489' },
                                { tone: 'Medium', color: '#EDAB72' },
                                { tone: 'Medium Dark', color: '#D9A364' },
                                { tone: 'Dark 1', color: '#D0854E' },
                                { tone: 'Dark 2', color: '#B4672E' },
                                { tone: 'Darker', color: '#96522D' },
                                { tone: 'Darkest', color: '#7D2B15' }
                            ].map(({ tone, color }) => (
                                <div className="relative">
                                    <button
                                        key={tone}
                                        onClick={() => handleInputChange("skinTone", tone)}
                                        className={`border-2 px-4 py-2 rounded-lg h-10 w-10 sm:w-14 sm:h-14 md:w-24 md:h-24 ${formData.skinTone === tone ? 'border-blue-500' : 'border-gray-300'
                                            }`}
                                        style={{ backgroundColor: color }}
                                    >
                                    </button>
                                    {formData.skinTone === tone && (
                                        <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                                            <FaCheck className="text-white text-xs" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="step-content flex flex-col items-center gap-4 w-[95%] sm:w-[80%] md:w-[40%]">
                        <h3 className="text-lg text-gray-700">Select a HairStyle</h3>
                        <div className="flex gap-4 w-full flex-wrap items-center justify-center">
                            {[
                                { name: 'Very Very Short', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=short-buzz' },
                                { name: 'Very Short', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=short-shaved' },
                                { name: 'Short', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=short-buzz' },
                                { name: 'Short Buzz', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=short-back-sides' },
                                { name: 'Medium Short', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=short-wavy' },
                                { name: 'Medium', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=short-curly' },
                                { name: 'Medium Buzz', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=med-afro' },
                                { name: 'Medium Long', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=med-wavy' },
                                { name: 'Long', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=man-bun' },
                                { name: 'Long Buzz', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=long-braids' },
                                { name: 'Very Long', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=cover-wrap' },
                                { name: 'Curly', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=cover-turban' },
                                { name: 'nohair', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=hairtype&hairtype=bald' }
                            ].map(({ name, image }) => (
                                <button
                                    key={name}
                                    onClick={() => handleInputChange("hairStyle", name)}
                                    className={`border-2 h-[4.5rem] w-[4.5rem] rounded-lg ${formData.hairStyle === name ? 'border-blue-500' : 'border-gray-300'}`}
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </button>
                            ))}
                        </div>

                    </div>
                );
            case 4:
                return (
                    <div className="step-content flex flex-col items-center gap-4 w-[95%] sm:w-[80%] md:w-[40%]">
                        <h3 className="text-lg text-gray-700">Select Facial Hair</h3>
                        <div className="flex gap-4 w-full flex-wrap items-center justify-center">
                            {[
                                { name: 'None', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=facialhairtype&facialhairtype=none' },
                                { name: 'Beard', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=facialhairtype&facialhairtype=short-moustache' },
                                { name: 'Moustache', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=facialhairtype&facialhairtype=stubble' },
                                { name: 'Goatee', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=facialhairtype&facialhairtype=short-beard' },
                                { name: 'Sideburns', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=facialhairtype&facialhairtype=med-beard' }
                            ].map(({ name, image }) => (
                                <button
                                    key={name}
                                    onClick={() => handleInputChange("facialHair", name)}
                                    className={`border-2 h-[5rem] w-[5rem] rounded-lg ${formData.facialHair === name ? 'border-blue-500' : 'border-gray-300'}`}
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </button>
                            ))}
                        </div>
                    </div>

                );
            case 5:
                return (
                    <div className="step-content flex flex-col items-center gap-4 w-[95%] sm:w-[80%] md:w-[40%]">
                        <h3 className="text-lg text-gray-700">Choose Eye Color</h3>
                        <div className="flex gap-4 w-full flex-wrap items-center justify-center">
                            {[
                                { name: 'Blue', color: '#4A90E2' },
                                { name: 'Green', color: '#7ED321' },
                                { name: 'Brown', color: '#8B4513' },
                                { name: 'Hazel', color: '#A0522D' },
                                { name: 'Gray', color: '#BEBEBE' }
                            ].map(({ name, color }) => (
                                <button
                                    key={name}
                                    onClick={() => handleInputChange("eyeColor", name)}
                                    className={`border-2 h-[4.5rem] w-[4.5rem]  ${formData.eyeColor === name ? 'border-blue-500' : 'border-gray-300'}`}
                                    style={{
                                        backgroundColor: color,
                                    }}
                                >
                                </button>
                            ))}
                        </div>
                    </div>

                );
            case 6:
                return (
                    <div className="step-content flex flex-col items-center gap-4 w-[95%] sm:w-[80%] md:w-[40%]">
                        <h3 className="text-lg text-gray-700">Choose Glasses Option</h3>
                        <div className="flex gap-4 w-full flex-wrap items-center justify-center">
                            {[
                                { name: 'None', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=glasses&glasses=none' },
                                { name: 'Glasses', image: 'https://mu2.wonderbly.com/product/partner-i-love-you/image/avatar?product_slug=partner-i-love-you&pose=swatch&type=adult&gender=male&select=extra&extra=glasses-round' }
                            ].map(({ name, image }) => (
                                <button
                                    key={name}
                                    onClick={() => handleInputChange("glasses", name)}
                                    className={`border-2 h-[9rem] w-[9rem] rounded-lg ${formData.glasses === name ? 'border-blue-500' : 'border-gray-300'}`}
                                    style={{
                                        backgroundImage: `url(${image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                </button>
                            ))}
                        </div>
                    </div>

                );
            default:
                return null;
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

            {/* Step Header and Progress */}
            <div className="step-header flex flex-col items-center mt-6 mb-4">
                <h4 className='text-gray-400 text-sm'>Step {currentStep} of 6</h4>
                <h3 className='text-2xl font-bold'>Create Your Partner’s Avatar</h3>
                <div className="flex gap-2 mt-2">
                    {[1, 2, 3, 4, 5, 6].map((step) => (
                        <div key={step} className={`w-8 h-2 rounded ${step === currentStep ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                    ))}
                </div>
            </div>

            {/* Step Image */}
            <div className="step-image w-full flex items-end h-56 justify-center relative overflow-hidden border-2 border-gray-400 mb-6">
                {
                    formData.gender == "male" ? <Image url={ImageUrls[1].url} /> : <Image url={ImageUrls[0].url} />
                }
            </div>

            {/* Render Step Content */}
            <div className="step-content-container mb-4 w-full flex justify-center items-center">
                {renderStepContent()}
            </div>

            {/* Continue Button */}
            <div className="flex justify-center">
                <button
                    onClick={currentStep<6?nextStep:nextGeneralStep}
                    className="bg-[#23231E]  text-white px-6 py-2  sm:w-[80%] w-[95%] md:w-[40%] font-semibold  transition-colors"
                    // disabled={currentStep === 6}
                    
                >
                    Continue
                </button>
            </div>
            <div className="back-to-home flex items-center justify-center mt-3">
                <p className='flex items-center gap-3 '><IoMdArrowBack size={21} onClick={BackToHome} />Back to Poduct Page</p>
            </div>
        </div>
    );
};

export default CheckOut;
