import React from 'react';
import heroVideo from '../../assets/video.mp4';

const Hero = () => {
  return (
    <section className="w-full bg-transparent pt-30 pb-8 flex flex-col items-center justify-center text-center">

      <div className="w-[95%] max-w-7xl mx-auto flex flex-col items-center">

        {/* Headlines Above the Video Box (Poppins Font added) */}
        <h2 className="font-['Poppins'] text-4xl md:text-5xl font-medium text-[#0B1B32] tracking-normal mb-8 w-full">
          We provide Premium <span className="text-[#D43A12] font-extrabold italic">"DaVinci Resolve"</span> Training
        </h2>

        {/* Video Box */}
        <div className="relative w-full mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black">

          {/* Background Lines inside video box */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              pointerEvents: 'none',
              backgroundImage:
                'repeating-linear-gradient(to right, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 80px)',
            }}
          />

          <video
            src={heroVideo}
            className="w-full h-auto object-cover block outline-none relative"
            style={{ zIndex: 10 }}
            controls
            autoPlay
            loop
            muted
            playsInline
          />

        </div>

        {/* Description Below the Video Box */}
        <p className="text-base md:text-lg text-gray-500 font-medium mt-8 w-full leading-relaxed">
          We can help you and your team to get the most out of DaVinci Resolve through live in-person, remote online or pre-recorded training.
        </p>

      </div>
    </section>
  );
};

export default Hero;