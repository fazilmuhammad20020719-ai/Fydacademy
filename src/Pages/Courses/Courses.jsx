import ScrollReveal from '../../components/ScrollReveal';


const Courses = () => {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-[#fa4616]/30 transition-colors duration-300">

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundLines />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-90 transition-all duration-300" />
      </div>

      <main className="relative z-10 pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <ScrollReveal>
            <div className="mb-20 text-center space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#fa4616]/10 border border-[#fa4616]/20 text-[#fa4616] text-xs font-bold tracking-[0.2em] uppercase">
                Curated Curriculum
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter leading-tight transition-colors">
                Master the workflow <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa4616] to-[#ff8c00]">
                  Like a Pro
                </span>
              </h1>
              <div className="w-24 h-1.5 bg-[#fa4616] mx-auto rounded-full mt-6" />
            </div>
          </ScrollReveal>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <ScrollReveal key={course.id} delay={index * 0.1}>
                <div
                  className="group relative flex flex-col bg-white dark:bg-zinc-900/40 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-white/5 hover:border-[#fa4616]/30 transition-all duration-500 shadow-2xl transition-all duration-300"
                >
                  {/* Image & Price Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                    />
                    {/* Decorative Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent opacity-60 transition-all duration-300" />

                    <div className="absolute top-6 left-6 flex flex-col space-y-2">
                      {course.oldPrice && (
                        <span className="bg-black/60 text-white/50 text-[10px] px-3 py-1 rounded-full backdrop-blur-md line-through w-fit font-bold border border-white/5">
                          {course.oldPrice}
                        </span>
                      )}
                      <span className="bg-[#fa4616] text-white text-[12px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-xl backdrop-blur-md w-fit border border-white/10">
                        {course.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-[#fa4616] transition-colors line-clamp-2 tracking-tight transition-colors">
                      {course.title}
                    </h2>
                    <p className="text-[#fa4616] text-[13px] font-bold mb-6 tracking-wide uppercase">
                      {course.metadata}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-10 flex-grow line-clamp-3 font-medium transition-colors">
                      {course.description}
                    </p>

                    <button className="group/btn relative overflow-hidden self-start bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white px-10 py-3.5 rounded-2xl text-sm font-bold transition-all hover:bg-[#fa4616] dark:hover:bg-[#fa4616] hover:text-white active:scale-95 shadow-lg transition-all duration-300">
                      <span className="relative z-10">View Details</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn:animate-shimmer" />
                    </button>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#fa4616]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Courses;
