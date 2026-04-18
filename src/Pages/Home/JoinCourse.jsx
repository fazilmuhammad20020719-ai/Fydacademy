import React from 'react';
import { courses } from '../../data/coursesData';

const JoinCourse = () => {
  return (
    <section className="relative w-full bg-white dark:bg-black py-24 md:py-32 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#fa4616]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-[95%] max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fa4616]/10 border border-[#fa4616]/20 text-[#fa4616] text-[10px] font-black tracking-widest uppercase">
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter transition-colors">
            Join a <span className="text-[#fa4616]">Course</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#fa4616] mx-auto rounded-full mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-md rounded-[3rem] overflow-hidden border border-zinc-200 dark:border-white/5 hover:border-[#fa4616]/30 transition-all duration-500 shadow-2xl transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover grayscale-[0.3] opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950/80 via-transparent to-transparent opacity-60 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-10 md:p-12 flex flex-col flex-grow relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-[#fa4616] transition-colors tracking-tight leading-tight transition-colors">
                  {course.title}
                </h3>
                <span className="text-[#fa4616] text-xs font-black uppercase tracking-widest mb-6 block">
                  {course.metadata}
                </span>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-10 flex-grow text-sm transition-colors">
                  {course.description}
                </p>

                <button className="group/btn relative overflow-hidden self-start bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white px-10 py-5 rounded-[2rem] font-black text-sm transition-all hover:bg-[#fa4616] dark:hover:bg-[#fa4616] hover:text-white active:scale-95 shadow-xl transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn:animate-shimmer" />
                </button>
              </div>

              {/* Decorative side accent */}
              <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#fa4616]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JoinCourse;
