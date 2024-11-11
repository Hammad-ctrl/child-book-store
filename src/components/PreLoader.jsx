// src/components/Preloader.js
import React, { useEffect, useState } from 'react';

const bounceDelayStyle = (delay) => ({
  animationDelay: `${delay}s`,
});

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#FFEBCC] text-[#FF6B6B] font-nalieta">
      {/* Book Stack */}
      <div className="flex gap-3">
        <div
          className="w-5 h-12 bg-[#FFB6C1] rounded-md shadow-lg transform animate-bounce"
          style={{ ...bounceDelayStyle(0), boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)' }}
        ></div>
        <div
          className="w-5 h-12 bg-[#FF6B6B] rounded-md shadow-lg transform animate-bounce"
          style={{ ...bounceDelayStyle(0.2), boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)' }}
        ></div>
        <div
          className="w-5 h-12 bg-[#FFD700] rounded-md shadow-lg transform animate-bounce"
          style={{ ...bounceDelayStyle(0.4), boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)' }}
        ></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-2xl font-semibold tracking-wide text-[#FF6B6B]">
        Loading your adventure...
      </p>

      {/* Progress Bar */}
      <div className="relative mt-6 w-3/4 h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="absolute inset-0 h-full rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFB6C1] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
