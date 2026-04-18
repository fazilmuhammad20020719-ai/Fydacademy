import React from 'react';
import Footer from '../../components/Footer';
import BackgroundLines from '../../components/BackgroundLines';


const Contact = () => {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white selection:bg-[#fa4616]/30 transition-colors duration-300">

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BackgroundLines />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-90 transition-all duration-300" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#fa4616]/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#fa4616]/10 border border-[#fa4616]/20 text-[#fa4616] text-xs font-bold tracking-[0.2em] uppercase">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter leading-tight transition-colors">
              Let's craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fa4616] to-[#ff8c00]">
                Something Great
              </span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg font-medium leading-relaxed transition-colors">
              Have a question about our courses or products? We're here to help you master DaVinci Resolve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Info */}
            <div className="flex flex-col space-y-12">
              <div className="flex flex-col space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl text-[#fa4616] border border-zinc-200 dark:border-white/5 group-hover:border-[#fa4616]/50 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors">Email us</h3>
                    <p className="text-zinc-600 dark:text-zinc-500 font-medium transition-colors">Our friendly team is here to help.</p>
                    <a href="mailto:info@fydacademy.com" className="text-[#fa4616] font-bold mt-2 block hover:text-[#ff8c00] transition-colors underline decoration-black hover:decoration-current underline-offset-4">
                      info@fydacademy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl text-[#fa4616] border border-zinc-200 dark:border-white/5 group-hover:border-[#fa4616]/50 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors">YouTube</h3>
                    <p className="text-zinc-600 dark:text-zinc-500 font-medium transition-colors">Check out our free training content.</p>
                    <a href="https://youtube.com/@T2Ffilms" target="_blank" rel="noopener noreferrer" className="text-[#fa4616] font-bold mt-2 block hover:text-[#ff8c00] transition-colors underline decoration-black hover:decoration-current underline-offset-4">
                      @T2Ffilms
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl text-[#fa4616] border border-zinc-200 dark:border-white/5 group-hover:border-[#fa4616]/50 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors">Location</h3>
                    <p className="text-zinc-600 dark:text-zinc-500 font-medium leading-relaxed transition-colors">Remote-first with live in-person training worldwide.</p>
                  </div>
                </div>
              </div>

              {/* Decorative Banner Card */}
              <div className="relative p-10 rounded-[2.5rem] bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-200 dark:border-white/5 overflow-hidden group transition-colors duration-300">
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight transition-colors">Need Team Training?</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium text-sm leading-relaxed mb-8 transition-colors">
                    We provide bespoke in-person training for professional teams. Let us know your requirements.
                  </p>
                  <button className="bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-2xl font-black text-sm hover:bg-[#fa4616] dark:hover:bg-[#fa4616] hover:text-white transition-all duration-300 active:scale-95 shadow-xl">
                    Inquire Now
                  </button>
                </div>
                {/* Visual Accent */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#fa4616]/10 rounded-full blur-[80px] group-hover:bg-[#fa4616]/20 transition-all duration-1000" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-zinc-900/40 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-zinc-200 dark:border-white/5 shadow-2xl relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fa4616]/5 blur-3xl rounded-full" />

              <form className="relative z-10 flex flex-col space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-[#fa4616]">First name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="bg-white border border-zinc-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#fa4616]/50 focus:border-[#fa4616]/50 transition-all placeholder:text-zinc-400 text-black font-medium"
                    />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-[#fa4616]">Last name</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="bg-white border border-zinc-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#fa4616]/50 focus:border-[#fa4616]/50 transition-all placeholder:text-zinc-400 text-black font-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[#fa4616]">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="bg-white border border-zinc-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#fa4616]/50 focus:border-[#fa4616]/50 transition-all placeholder:text-zinc-400 text-black font-medium"
                  />
                </div>

                <div className="flex flex-col space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[#fa4616]">Your Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your needs..."
                    className="bg-white border border-zinc-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#fa4616]/50 focus:border-[#fa4616]/50 transition-all placeholder:text-zinc-400 text-black font-medium resize-none"
                  ></textarea>
                </div>

                <button className="group relative overflow-hidden bg-[#fa4616] text-white py-5 rounded-[2rem] font-black text-lg shadow-[0_10px_30px_-5px_rgba(250,70,22,0.4)] hover:bg-[#d43a12] active:scale-[0.98] transition-all">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                </button>
              </form>
            </div>

          </div>

        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
