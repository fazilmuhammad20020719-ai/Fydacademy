import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseSection = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout');
  };
  return (
    <section className="relative w-full bg-white dark:bg-black py-24 md:py-32 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#fa4616]/5 blur-[100px] rounded-full" />

      <div className="relative z-10 w-[95%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Column: Premium Banner */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#fa4616]/20 to-[#ff8c00]/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />

          <div className="relative aspect-[16/10] bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-xl rounded-[2.5rem] border border-zinc-200 dark:border-white/10 flex items-center justify-center p-8 overflow-hidden transition-all duration-300">
            {/* Visual elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,70,22,0.1)_0%,transparent_70%)]" />

            <div className="relative z-10 flex items-center gap-6 transform group-hover:scale-105 transition-transform duration-700">
              {/* App Icon Mockup */}
              <div className="w-24 h-24 rounded-[1.5rem] p-[2px] bg-gradient-to-tr from-[#fa4616] via-[#ff8c00] to-orange-400 shadow-[0_0_30px_rgba(250,70,22,0.4)]">
                <div className="w-full h-full bg-black rounded-[1.4rem] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-4 w-8 h-8 bg-[#fa4616] rounded-full blur-[4px] opacity-80 mix-blend-screen"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-[#ff8c00] rounded-full blur-[4px] opacity-80 mix-blend-screen"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-red-600 rounded-full blur-[4px] opacity-80 mix-blend-screen"></div>
                </div>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-2 font-black transition-colors">FYD Academy</span>
                <div className="text-zinc-900 dark:text-white text-3xl font-black leading-none tracking-tighter space-y-1 transition-colors">
                  <div>DaVinci</div>
                  <div className="text-[#fa4616]">Resolve</div>
                </div>
                <span className="text-zinc-600 dark:text-zinc-400 text-sm font-medium mt-2 transition-colors">for Editors</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="text-left space-y-8">
          <div className="space-y-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#fa4616]/10 border border-[#fa4616]/20 text-[#fa4616] text-[10px] font-black tracking-widest uppercase">
              Limited Time Offer
            </span>
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white transition-colors">82,500 LKR</span>
              <span className="text-zinc-400 dark:text-zinc-600 line-through text-xl md:text-2xl font-bold decoration-[#fa4616]/40 transition-colors">131,700 LKR</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter leading-tight transition-colors">
            DaVinci Resolve <br />
            <span className="italic font-light">for Editors</span>
          </h2>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800" />
              ))}
            </div>
            <span className="text-zinc-500 text-sm font-bold">57+ Professional Lessons</span>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed text-lg max-w-xl transition-colors">
            The most comprehensive and professional course for editors moving to DaVinci Resolve. Specifically tailored for professionals with experience in Premiere Pro, Final Cut, or Media Composer.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button
              onClick={handleBuyNow}
              className="group relative overflow-hidden bg-[#fa4616] text-white px-10 py-5 rounded-[2rem] font-black text-lg transition-all hover:bg-[#d43a12] active:scale-95 shadow-[0_10px_30px_-5px_rgba(250,70,22,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer" />
            </button>

            <button className="text-zinc-900 dark:text-white font-bold hover:text-[#fa4616] transition-colors flex items-center gap-2 group/link">
              Learn more
              <div className="w-6 h-6 rounded-full border border-zinc-200 dark:border-white/20 flex items-center justify-center group-hover/link:border-[#fa4616] group-hover/link:bg-[#fa4616]/10 transition-all">
                <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseSection;
