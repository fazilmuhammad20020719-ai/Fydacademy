import React from 'react';
import heroVideo from '../../assets/video.mp4';
import { Link } from 'react-router-dom';
import BackgroundLines from '../../components/BackgroundLines';

const Hero = () => {
  return (
    <section className="relative w-[100%] min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundLines />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-90 transition-all duration-300" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#fa4616]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff8c00]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-[98%] max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Headlines */}
        <div className="text-center mb-16 space-y-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fa4616]/10 border border-[#fa4616]/20 text-[#fa4616] text-xs font-bold tracking-[0.2em] uppercase mb-2">
            The Ultimate Learning Experience
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tighter transition-colors">
            We provide Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa4616] to-[#ff8c00] italic">
              "DaVinci Resolve"
            </span> Training
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed transition-colors">
            We help you and your team master DaVinci Resolve through live in-person, remote online, or pre-recorded training.
          </p>
        </div>

        {/* Video Box - Premium Cinema Frame */}
        <div className="relative w-full aspect-video mx-auto rounded-[2.5rem] p-2 md:p-4 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-white/10 shadow-2xl group overflow-hidden transition-all duration-300">
          {/* Inner Glow/Shadow */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#fa4616]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="relative z-10 w-full h-full rounded-[1.8rem] overflow-hidden bg-black shadow-inner">
            <video
              src={heroVideo}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              controls
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Decorative Corner Accent */}
          <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#fa4616]/30 rounded-tr-2xl" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-[#fa4616]/30 rounded-bl-2xl" />
        </div>

        {/* Floating Call to Action */}
        <div className="mt-16">
          <Link
            to="/courses"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-black font-black rounded-2xl hover:bg-[#fa4616] dark:hover:bg-[#fa4616] hover:text-white transition-all duration-300 shadow-xl hover:shadow-[#fa4616]/30 active:scale-95"
          >
            Explore All Courses
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;