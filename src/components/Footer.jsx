import React, { useState } from 'react';

const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer className="w-full bg-black py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Section: Info & Links */}
        <div className="flex flex-col space-y-8 order-2 md:order-1">
          <div className="flex flex-col space-y-2">
            <h3 className="text-white font-bold text-lg">
              Copyright Team 2 Films © 2024
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
      <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end">
        {/* Chat Window */}
        {isChatOpen && (
          <div className="mb-4 w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300">
            {/* Header */}
            <div className="bg-[#3b82f6] p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#fbcfe8] flex items-center justify-center text-[#e11d48] font-bold text-lg shadow-sm">
                LB
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base leading-tight">Leon Barnard</span>
                <div className="flex items-center gap-1 opacity-90">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="text-white text-xs font-medium">Away</span>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="h-80 bg-white flex flex-col items-center justify-center p-8 text-center">
              <span className="text-[#0B1B32] font-bold text-lg mb-1">No messages yet</span>
              <span className="text-gray-400 text-sm">Start messaging below</span>
            </div>

            {/* Input Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Message Leon" 
                className="flex-grow bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all placeholder-gray-400"
              />
              <button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white p-2.5 rounded-full shadow-lg transition-all active:scale-95 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 group shadow-[#3b82f6]/20 bg-[#3b82f6] hover:bg-[#2563eb]`}
        >
          {isChatOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
