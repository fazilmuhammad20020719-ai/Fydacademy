import React from 'react';

const MailingList = () => {
  return (
    <section className="w-full bg-white">
      <div 
        className="w-full backdrop-blur-xl py-12 px-6 md:px-12"
        style={{
          background: 'linear-gradient(135deg, rgba(250,70,22,0.18) 0%, rgba(20,10,5,0.85) 60%, rgba(250,70,22,0.15) 100%)',
          borderTop: '1px solid rgba(250,70,22,0.3)',
          borderBottom: '1px solid rgba(250,70,22,0.3)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Text Content */}
        <div className="flex flex-col text-left w-full lg:w-auto">
          <h2 className="text-2xl md:text-[1.8rem] font-bold text-white tracking-tight mb-1">
            Join our mailing list
          </h2>
          <p className="text-white/80 text-[15px]">
            Sign Up to be notified of future training
          </p>
        </div>

        {/* Input Form */}
        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
          <input 
            type="text" 
            placeholder="Name" 
            className="px-5 py-3.5 rounded-xl border border-white/10 outline-none w-full sm:w-48 text-sm bg-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-[#fa4616]/50 transition-all"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="px-5 py-3.5 rounded-xl border border-white/10 outline-none w-full sm:w-64 text-sm bg-white/10 text-white placeholder-white/40 focus:ring-2 focus:ring-[#fa4616]/50 transition-all"
          />
          <button className="bg-[#fa4616] hover:bg-[#d43a12] text-white px-10 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-[#fa4616]/20 transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white/20">
            Subscribe
          </button>
        </div>

        </div>
      </div>
    </section>
  );
};

export default MailingList;
