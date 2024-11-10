import React from "react";

const Testimonial = () => {
  return (
    <section className="relative mt-4 bg-[#D8460D] text-white text-center shadow-lg h-52">
      {/* Top Wave (Reversed) */}
      <div className="absolute top-0 left-0 w-full flex overflow-hidden leading-none  transform -translate-y-1/2 scale-y-[-1]">
        {[...Array(20)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 640 100"
            preserveAspectRatio="none"
            className="w-20 h-8"
          >
            <path fill="#fff" d="M640 60C516 60 476-0 316 0 156 0 116 60 0 60V100h640V60z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <figure className="relative z-10 max-w-3xl mx-auto py-8">
        <blockquote className="italic text-lg md:text-xl">
          "I love how your books positively support children and your imaginative stories and drawings are so much fun!"
        </blockquote>
        <figcaption className="mt-4 text-sm font-semibold">
          — Written by Ross
        </figcaption>
      </figure>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full flex overflow-hidden leading-none transform translate-y-1/2">
        {[...Array(20)].map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 640 100"
            preserveAspectRatio="none"
            className="w-20 h-8"
          >
            <path fill="#fff" d="M640 60C516 60 476-0 316 0 156 0 116 60 0 60V100h640V60z" />
          </svg>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
