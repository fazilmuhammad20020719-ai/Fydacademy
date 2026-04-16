import React from 'react';
import heroVideo from '../../assets/video.mp4';

const Hero = () => {
  return (
    <section className="w-full bg-transparent pt-30 pb-8 flex flex-col items-center justify-center text-center">

      {/* Width அதிகரிக்கப்பட்டுள்ளது (w-[98%] max-w-[1400px]) */}
      <div className="w-[98%] max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Headlines Above the Video Box */}
        <h2 className="font-['Poppins'] text-4xl md:text-5xl font-medium text-[#0B1B32] tracking-normal mb-8 w-full">
          We provide Premium <span className="text-[#D43A12] font-extrabold italic">"DaVinci Resolve"</span> Training
        </h2>

        {/* Video Box - உயரம் மாறாமல் இருக்க நிலையான உயரம் (h-[400px] md:h-[600px]) கொடுக்கப்பட்டுள்ளது */}
        <div className="relative w-full h-[400px] md:h-[600px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black">

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

          {/* Video - h-auto மாற்றி h-full கொடுக்கப்பட்டுள்ளது */}
          <video
            src={heroVideo}
            className="w-full h-full object-cover block outline-none relative"
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