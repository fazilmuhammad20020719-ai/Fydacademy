import React from 'react';

const CourseSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-[95%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image/Banner */}
        <div className="w-full aspect-[16/10] md:h-80 bg-[#060A11] rounded shadow-xl flex items-center justify-center relative overflow-hidden group">
          {/* Subtle glow background */}
          <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full scale-110"></div>
          
          <div className="relative z-10 flex items-center gap-5 scale-110 transform transition-transform duration-500 group-hover:scale-110">
             {/* App Icon Mockup */}
             <div className="w-20 h-20 rounded-[1.25rem] p-[2px] bg-gradient-to-tr from-yellow-400 via-green-400 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <div className="w-full h-full bg-black rounded-[1.15rem] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-3 w-6 h-6 bg-blue-400 rounded-full blur-[2px] opacity-80 mix-blend-screen"></div>
                    <div className="absolute bottom-3 left-3 w-6 h-6 bg-yellow-400 rounded-full blur-[2px] opacity-80 mix-blend-screen"></div>
                    <div className="absolute bottom-3 right-3 w-6 h-6 bg-red-500 rounded-full blur-[2px] opacity-80 mix-blend-screen"></div>
                </div>
             </div>
             {/* Text */}
             <div className="flex flex-col text-left">
                <span className="text-gray-400 text-[10px] tracking-widest uppercase mb-1">Team 2 Films</span>
                <span className="text-white text-2xl font-bold leading-none tracking-tight mb-1">DaVinci <br /> Resolve</span>
                <span className="text-gray-300 text-sm font-light">for Editors</span>
             </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col items-start text-left pl-0 md:pl-4">
          <div className="flex items-center gap-2 mb-2 text-sm">
            <span className="text-[#4bb3d1] line-through font-medium opacity-80">$439</span>
            <span className="text-[#4bb3d1] font-bold">$275</span>
          </div>
          
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#0B1B32] mb-3 tracking-tight leading-tight">
            DaVinci Resolve for Editors
          </h2>
          
          <div className="text-gray-400 text-sm font-medium mb-6 flex items-center gap-2">
            <span>Course</span>
            <span className="text-xs">•</span>
            <span>57 Lessons</span>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-8 text-[1.05rem]">
            The most comprehensive and professional course for editors moving to DaVinci Resolve. This course has been specifically tailored to professional editors with experience using Premiere Pro, but it also contains thorough explanations that beginner editors will find helpful.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#fa4616] hover:bg-[#d43a12] text-white px-7 py-3 rounded text-sm font-bold shadow-lg shadow-[#fa4616]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:ring-opacity-50">
              Buy now
            </button>
            <button className="bg-[#fa4616] hover:bg-[#d43a12] text-white px-7 py-3 rounded text-sm font-bold shadow-lg shadow-[#fa4616]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:ring-opacity-50">
              Learn more
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseSection;
