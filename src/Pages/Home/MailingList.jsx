import React from 'react';

import { useTheme } from '../../context/ThemeContext';

const MailingList = () => {
  const { theme } = useTheme();
  return (
    <section className="relative w-full bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div
        className="relative w-full py-20 px-6 md:px-12 backdrop-blur-3xl border-y border-zinc-200 dark:border-white/5 shadow-2xl transition-all duration-300"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, rgba(250,70,22,0.1) 0%, rgba(5,5,5,1) 50%, rgba(250,70,22,0.05) 100%)'
            : 'linear-gradient(135deg, rgba(250,70,22,0.05) 0%, rgba(255,255,255,1) 50%, rgba(250,70,22,0.02) 100%)',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#fa4616]/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff8c00]/5 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">

          {/* Text Content */}
          <div className="flex flex-col text-center lg:text-left space-y-2">
            <span className="text-[#fa4616] text-[10px] font-black uppercase tracking-[0.3em] mb-1">Stay Updated</span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter leading-tight transition-colors">
              Join the <span className="text-[#fa4616]">Circle</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium text-lg transition-colors">
              Be the first to know about new workshops and tool releases.
            </p>
          </div>

          {/* Input Form */}
          <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
            <div className="relative group flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="Full Name"
                className="px-6 py-4.5 rounded-[1.5rem] border border-zinc-200 dark:border-white/10 outline-none w-full sm:w-56 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium"
              />
            </div>
            <div className="relative group flex-1 sm:flex-none">
              <input
                type="email"
                placeholder="Email Address"
                className="px-6 py-4.5 rounded-[1.5rem] border border-zinc-200 dark:border-white/10 outline-none w-full sm:w-72 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium"
              />
            </div>
            <button className="group relative overflow-hidden bg-[#fa4616] text-white px-10 py-4.5 rounded-[1.5rem] font-black text-sm shadow-xl hover:bg-[#d43a12] active:scale-95 transition-all">
              <span className="relative z-10">Subscribe Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MailingList;
