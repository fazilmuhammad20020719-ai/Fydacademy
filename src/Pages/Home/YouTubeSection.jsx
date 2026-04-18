import React from 'react';

const videos = [
  {
    id: 'eAbf0D7fVMY',
    title: 'DaVinci Resolve 19.1 – Small Changes, BIG Improvements (Our fav...)',
  },
  {
    id: 'BLNijqxO7vE',
    title: 'MICRO COLOR PANEL Hands On Review – Blackmagic DaVinci Res...',
  },
  {
    id: 'O8gfzGeXncs',
    title: 'Better than After Effects? Incredible FUSION VFX Compositing Ma...',
  },
  {
    id: 'u8nOa9f7d9c',
    title: 'NORMALISATION – Audio Deliveries on DaVinci Resolve 19.5 Mast...',
  },
  {
    id: 'nEuMKAoG0_Y',
    title: 'DaVinci Resolve Color Management MASTERCLASS – LUTs, CSTs, #...',
  },
  {
    id: 'v0M0y_0d5oM',
    title: 'The Secret to Professional Color Grading in DaVinci Resolve',
  },
];

const YouTubeSection = () => {
  return (
    <section className="relative w-full bg-white dark:bg-[#050505] py-24 md:py-32 transition-colors duration-300">
      <div className="w-[95%] max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter transition-colors">
            Follow our <span className="text-[#fa4616]">Journey</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-medium text-lg max-w-2xl mx-auto transition-colors">
            We regularly release amazing free content on our{' '}
            <a
              href="https://www.youtube.com/@T2Ffilms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fa4616] font-bold hover:text-[#ff8c00] transition-colors"
            >
              YouTube Channel
            </a>
          </p>
        </div>

        {/* Video List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-md hover:border-[#fa4616]/30 transition-all duration-500 shadow-2xl"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden bg-black">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#fa4616] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <svg className="w-7 h-7 text-white ml-1 filter drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title bar */}
              <div className="px-8 py-6 flex flex-col space-y-1">
                <p className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-[#fa4616] transition-colors line-clamp-1 tracking-tight">
                  {video.title}
                </p>
                <p className="text-xs text-zinc-500 font-black uppercase tracking-widest">FYD Academy</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.youtube.com/@T2Ffilms"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-[#fa4616] hover:bg-[#d43a12] text-white px-10 py-5 rounded-2xl font-black text-sm transition-all duration-300 shadow-xl shadow-[#fa4616]/20 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.2 5 12 5 12 5s-4.2 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9C6.8 19 12 19 12 19s4.2 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3L10 15z" />
              </svg>
              Subscribe for Free Content
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default YouTubeSection;
