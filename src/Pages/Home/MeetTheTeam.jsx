import React from 'react';

const MeetTheTeam = () => {
  return (
    <section className="relative w-full bg-white dark:bg-black py-24 md:py-32 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#fa4616]/5 blur-[100px] rounded-full" />

      <div className="relative z-10 w-[95%] max-w-7xl mx-auto bg-white dark:bg-zinc-900/30 backdrop-blur-xl rounded-[3rem] border border-zinc-200 dark:border-white/5 flex flex-col md:flex-row overflow-hidden shadow-2xl transition-all duration-300">

        {/* Text Content */}
        <div className="p-10 md:p-16 lg:p-20 flex-1 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#fa4616]/10 border border-[#fa4616]/20 text-[#fa4616] text-[10px] font-black tracking-widest uppercase">
              Founders
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter leading-tight transition-colors">
              Meet the <span className="text-[#fa4616]">Team</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed text-lg transition-colors">
              Hello! We are <span className="text-zinc-900 dark:text-white font-bold transition-colors">Leon and Natalie</span>, the founders of FYD Academy. We're passionate about helping you master DaVinci Resolve and achieve your creative goals.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed text-lg italic border-l-2 border-[#fa4616] pl-6 transition-colors">
              We've worked on a variety of projects from short-form narrative to documentary. Based in London, we bring a global perspective combined with industry-certified expertise.
            </p>
          </div>

          <div className="pt-4">
            <button className="text-[#fa4616] font-black flex items-center gap-2 group">
              Our Full Story
              <div className="w-8 h-8 rounded-full border border-[#fa4616]/30 flex items-center justify-center group-hover:bg-[#fa4616] group-hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-[45%] lg:w-[40%] h-96 md:h-auto shrink-0 relative overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Leon and Natalie"
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 dark:from-zinc-950/80 via-transparent to-transparent md:bg-gradient-to-r transition-all duration-300" />
        </div>

      </div>
    </section>
  );
};

export default MeetTheTeam;
