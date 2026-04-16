import React from 'react';
import heroVideo from '../../assets/video.mp4';

const Hero = () => {
  return (
    <section className="w-full bg-transparent pt-20 pb-8 flex flex-col items-center justify-center text-center">

      <div className="w-[95%] max-w-7xl mx-auto flex flex-col">

        {/* Video Box */}
        <div className="relative w-full mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black mb-12">

          <video
            src={heroVideo}
            className="w-full h-auto object-cover block outline-none"
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Headlines Underneath */}
        <h2 className="text-4xl md:text-5xl font-medium text-[#0B1B32] tracking-normal mb-8 w-full">
          We provide Premium <span className="text-[#fa4616] font-extrabold italic">"DaVinci Resolve"</span> Training
        </h2>

        {/* Description Underneath */}
        <p className="text-base md:text-lg text-gray-500 font-medium pb-4 w-full leading-relaxed">
          We can help you and your team to get the most out of DaVinci Resolve through live in-person, remote online or pre-recorded training.
        </p>

      </div>
    </section>
  );
};

export default Hero;

