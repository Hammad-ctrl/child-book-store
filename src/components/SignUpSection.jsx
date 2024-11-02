import React from "react";

const SignUpSection = () => {
  return (
    <section className="relative w-full bg-[#C1F1A1] text-black py-8 px-4 text-center shadow-lg overflow-hidden">
      {/* Sign-Up Content */}
      <div className="relative z-10 max-w-3xl mx-auto py-8 flex flex-col items-center gap-3">
        <h2 className="text-xl poppins-medium md:text-xl mb-4">
        Sign up for 10% off your first order
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 w-1/2  rounded-sm border border-gray-600 text-black"
        />
        <button className="bg-black rounded-sm w-1/2  py-2 px-2 hover:bg-[#C1F1A1] text-[#C1F1A1] hover:text-black border  hover:border-black">Sign me Up</button>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full flex overflow-hidden leading-none transform translate-y-1/2">
        {[...Array(60)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 640 100"
            preserveAspectRatio="none"
            className="w-20 h-8"
          >
            <path fill="#1E5751" d="M640 60C516 60 476-0 316 0 156 0 116 60 0 60V100h640V60z" />
          </svg>
        ))}
      </div>
    </section>
  );
};

export default SignUpSection;
