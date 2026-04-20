import ScrollReveal from '../../components/ScrollReveal';


const Curriculum = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-[#fa4616]/30 transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BackgroundLines />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-80 transition-all duration-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fa4616]/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="flex flex-col items-center">

            {/* Header Text - Enhanced Typography */}
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#fa4616]/10 border border-[#fa4616]/20 text-[#fa4616] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                  Professional Training
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tighter transition-colors">
                  Master the Art of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa4616] to-[#ff8c00]">
                    DaVinci Resolve
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-600 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed transition-colors">
                  LIFETIME Access • 52 Lessons • 9 Hours of Training • 15GB Pro Media
                </p>
              </div>
            </ScrollReveal>

            {/* Video Container - Premium "Cinema" Frame */}
            <ScrollReveal delay={0.2}>
              <div className="w-full relative group">
                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fa4616]/20 to-[#ff8c00]/20 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                <div className="relative bg-zinc-100 dark:bg-zinc-900/50 backdrop-blur-xl rounded-[2rem] p-2 md:p-3 border border-zinc-200 dark:border-white/10 shadow-2xl overflow-hidden transition-all duration-300">
                  <div className="aspect-video rounded-[1.5rem] overflow-hidden bg-black relative group/video">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/video:scale-[1.02]"
                    >
                      <source src={heroVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Overlay for aesthetic */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/40 dark:from-black/40 via-transparent to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Action Button - Floating above/below video for better balance */}
                <div className="mt-12 flex justify-center">
                  <Link
                    to="/checkout"
                    className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-[#fa4616] rounded-2xl hover:bg-[#d43a12] shadow-[0_10px_30px_-5px_rgba(250,70,22,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(250,70,22,0.5)] transform hover:-translate-y-1 active:scale-95 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Start Learning Today
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Included Section - Grid Style */}
      <section className="relative py-32 px-4 md:px-8 bg-zinc-50 dark:bg-[#050505] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight transition-colors">
                What's <span className="text-[#fa4616]">Included?</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#fa4616] mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusionData.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className="group relative flex flex-col h-full rounded-[2.5rem] bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 hover:border-[#fa4616]/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none"
                >
                  {/* Visual Header */}
                  <div className="w-full h-56 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-100 dark:to-zinc-950/90" />

                    <div className="absolute top-6 left-6">
                      <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                        <span className="text-4xl font-black text-zinc-950 dark:text-white italic tracking-tighter drop-shadow-xl transition-colors">
                          {item.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow relative z-10">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-[#fa4616] transition-colors transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-medium transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa4616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Placeholder */}
      <section className="py-32 px-6 bg-white dark:bg-black relative transition-colors duration-300">
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-[3rem] blur opacity-25" />
              <div className="relative bg-zinc-50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-[3rem] p-16 text-center transition-all duration-300">
                <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800/50 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-zinc-200 dark:border-zinc-700 transition-colors">
                  <svg className="w-8 h-8 text-[#fa4616]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 italic tracking-tight transition-colors">Detailed Curriculum Coming Soon</h3>
                <p className="text-zinc-600 dark:text-zinc-500 font-medium max-w-md mx-auto mb-8 transition-colors">
                  We're meticulously crafting each lesson to provide you with the most comprehensive Davinci Resolve experience.
                </p>
                <div className="flex justify-center gap-4">
                  <div className="w-3 h-3 bg-[#fa4616] rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-[#fa4616] rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                  <div className="w-3 h-3 bg-[#fa4616] rounded-full animate-pulse [animation-delay:-0.6s]"></div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Curriculum;