import React from 'react';
import Footer from '../../components/Footer';


const Contact = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">

      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B1B32] tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl">
              Have a question about our courses or products? We're here to help you master DaVinci Resolve.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div className="flex flex-col space-y-12">
              <div className="flex flex-col space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 rounded-xl text-[#fa4616]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B32]">Email us</h3>
                    <p className="text-gray-500 mt-1">Our friendly team is here to help.</p>
                    <a href="mailto:info@fydacademy.com" className="text-[#fa4616] font-semibold mt-2 block hover:underline">
                      info@fydacademy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 rounded-xl text-[#fa4616]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B32]">YouTube</h3>
                    <p className="text-gray-500 mt-1">Check out our free training content.</p>
                    <a href="https://youtube.com/@T2Ffilms" target="_blank" rel="noopener noreferrer" className="text-[#fa4616] font-semibold mt-2 block hover:underline">
                      @T2Ffilms
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 rounded-xl text-[#fa4616]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1B32]">Location</h3>
                    <p className="text-gray-500 mt-1">Remote-first with live in-person training worldwide.</p>
                  </div>
                </div>
              </div>

              {/* Decorative Card or Image placeholder */}
              <div className="bg-[#0B1B32] p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">Live Training?</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    We also provide in-person training for teams. Contact us for bespoke rates and availability.
                  </p>
                  <button className="bg-[#fa4616] text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-white hover:text-[#fa4616] transition-all">
                    Inquire Now
                  </button>
                </div>
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#fa4616]/10 rounded-full blur-3xl group-hover:bg-[#fa4616]/20 transition-all duration-700" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-gray-100 border border-gray-50">
              <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold text-[#0B1B32]">First name</label>
                    <input 
                      type="text" 
                      placeholder="First name" 
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-bold text-[#0B1B32]">Last name</label>
                    <input 
                      type="text" 
                      placeholder="Last name" 
                      className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-[#0B1B32]">Email</label>
                  <input 
                    type="email" 
                    placeholder="you@company.com" 
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-bold text-[#0B1B32]">Message</label>
                  <textarea 
                    rows="4"
                    placeholder="Leave us a message..." 
                    className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all resize-none"
                  ></textarea>
                </div>

                <button className="bg-[#fa4616] text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-[#fa4616]/20 hover:bg-[#d43a12] active:scale-[0.98] transition-all">
                  Send message
                </button>
              </form>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
