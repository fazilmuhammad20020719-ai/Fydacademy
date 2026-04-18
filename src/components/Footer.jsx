import React, { useState } from 'react';
import { X } from 'lucide-react';

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer className="w-full bg-black py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Left Section: Info & Links */}
        <div className="flex flex-col space-y-8 order-2 md:order-1">
          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-bold text-lg">
              Copyright FYD Academy © 2024
            </h3>
            <div className="flex items-center space-x-6">
              <a href="#contact" className="text-white hover:text-[#fa4616] transition-colors font-medium">
                Contact
              </a>
              <a href="https://youtube.com/@T2Ffilms" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#fa4616] transition-colors font-medium">
                YouTube
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Right Section: Newsletter */}
        <div className="flex flex-col space-y-4 w-full md:max-w-md order-1 md:order-2">
          <p className="text-white text-base font-medium">
            Sign up to be notified of future free training.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              className="flex-grow bg-white px-5 py-3 rounded-md text-black outline-none focus:ring-2 focus:ring-[#fa4616] transition-all"
            />
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-md font-bold transition-all whitespace-nowrap border border-white shadow-lg active:scale-95">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Floating Chat Bubble & Window */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end">
        {/* Chat Window */}
        {isChatOpen && (
          <div className="mb-4 w-full max-w-[360px] sm:w-[380px] bg-white dark:bg-[#0d0d0d] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(250,70,22,0.15)] overflow-hidden border border-zinc-200 dark:border-white/10 flex flex-col animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-500 transition-colors">
            {/* Header */}
            <div className="bg-[#fa4616] p-5 md:p-6 flex items-center gap-4 relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full -mr-16 -mt-16" />

              <div className="relative w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#fa4616] font-black text-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
                LB
              </div>
              <div className="flex flex-col relative z-10">
                <span className="text-white font-black text-lg tracking-tight leading-none transition-colors">Leon Barnard</span>
                <div className="flex items-center gap-1.5 mt-1.5 opacity-90">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white/90 text-xs font-bold uppercase tracking-widest">Always Here</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="h-[320px] bg-zinc-50 dark:bg-black/40 flex flex-col items-center justify-center p-8 text-center transition-colors">
              <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-3xl flex items-center justify-center mb-6 border border-zinc-200 dark:border-white/5 transition-colors">
                <svg className="w-10 h-10 text-zinc-300 dark:text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-zinc-900 dark:text-white font-black text-xl mb-2 tracking-tight transition-colors">No messages yet</h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium leading-relaxed max-w-[200px] transition-colors">
                Drop me a message and I'll get back to you personally.
              </p>
            </div>

            {/* Input Footer */}
            <div className="p-5 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900 flex items-center gap-3 transition-colors">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full bg-zinc-100 dark:bg-white/5 border border-transparent dark:border-white/5 rounded-2xl px-5 py-3.5 text-sm font-bold text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:bg-white dark:focus:bg-black transition-all placeholder-zinc-400 dark:placeholder-zinc-600"
                />
              </div>
              <button className="bg-[#fa4616] hover:bg-[#d43a12] text-white p-3.5 rounded-2xl shadow-xl shadow-[#fa4616]/20 transition-all active:scale-90 flex-shrink-0 group/send">
                <svg className="w-5 h-5 transform rotate-90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`text-white p-5 rounded-[1.5rem] shadow-2xl transition-all transform hover:scale-110 active:scale-95 group overflow-hidden ${isChatOpen
            ? 'bg-zinc-900 dark:bg-white text-white dark:text-black'
            : 'bg-[#fa4616] shadow-[#fa4616]/40'
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
          {isChatOpen ? (
            <X className="w-8 h-8 relative z-10" />
          ) : (
            <div className="flex items-center gap-2 relative z-10">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
