import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import BackgroundLines from '../../components/BackgroundLines';

const Checkout = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1); // 1: Billing, 2: Payment
  const [showBusinessDetails, setShowBusinessDetails] = useState(false);

  // Mock course data
  const course = {
    title: 'DaVinci Resolve for Editors',
    price: 82500,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black pt-24 pb-20 px-4 md:px-8 relative overflow-hidden transition-colors duration-300">
        <BackgroundLines />

        {/* Gradient Overlay (கருப்பு/வெள்ளை நிழல்) புதிதாக சேர்க்கப்பட்டது */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black opacity-90 pointer-events-none transition-all duration-300" />

        {/* Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fa4616]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fa4616]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter transition-colors">
              Verify <span className="text-[#fa4616]">Checkout</span>
            </h1>
            <div className="w-20 h-1.5 bg-[#fa4616] mt-4 rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Column: Form Sections */}
            <div className="flex-grow space-y-6">

              {/* 1. Contact Info Section */}
              <div className="bg-white dark:bg-zinc-900/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-200 dark:border-white/5 p-8 group transition-all duration-300">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fa4616]/10 border border-[#fa4616]/20 flex items-center justify-center text-[#fa4616] text-xs font-black transition-colors">01</div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight transition-colors">Contact Info</h2>
                  </div>
                  <button className="text-xs font-black uppercase tracking-widest text-zinc-500 hover:text-[#fa4616] transition-colors">Logout</button>
                </div>
                <div className="pl-11">
                  <p className="text-zinc-600 dark:text-zinc-300 font-medium transition-colors">fazilmuhammad@gmail.com</p>
                </div>
              </div>

              {/* 2. Billing Section */}
              <div className={`bg-white dark:bg-zinc-900/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-200 dark:border-white/5 transition-all duration-500 ${activeStep === 1 ? 'ring-2 ring-[#fa4616]/50 border-transparent shadow-[#fa4616]/5' : ''}`}>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors ${activeStep >= 1 ? 'bg-[#fa4616] text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 transition-colors'}`}>02</div>
                      <h2 className={`text-xl font-bold tracking-tight transition-colors ${activeStep >= 1 ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-600'}`}>Billing</h2>
                    </div>
                    {activeStep > 1 && (
                      <button
                        onClick={() => setActiveStep(1)}
                        className="text-xs font-black uppercase tracking-widest text-[#fa4616] hover:text-[#ff8c00]"
                      >
                        Edit
                      </button>
                    )}
                  </div>

                  {activeStep === 1 ? (
                    <div className="space-y-8 pl-11">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Country</label>
                          <select className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium appearance-none">
                            <option>Sri Lanka</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                          </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">State</label>
                          <input type="text" className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium placeholder-zinc-400" />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Postal Code</label>
                          <input type="text" className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium placeholder-zinc-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">City</label>
                          <input type="text" className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium placeholder-zinc-400" />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Address 1</label>
                          <input type="text" className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium placeholder-zinc-400" />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Address 2</label>
                          <input type="text" className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium placeholder-zinc-400" />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => setShowBusinessDetails(!showBusinessDetails)}
                          className="text-xs font-black uppercase tracking-[0.2em] text-[#fa4616] hover:text-[#ff8c00] flex items-center gap-2"
                        >
                          <span className="text-lg leading-none">{showBusinessDetails ? '−' : '+'}</span>
                          {showBusinessDetails ? 'Hide business details' : 'Add business details'}
                        </button>
                        {showBusinessDetails && (
                          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="flex flex-col space-y-2">
                              <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Business Name</label>
                              <input type="text" className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium placeholder-zinc-400" />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">VAT / Tax ID</label>
                              <input type="text" className="bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 transition-all font-medium placeholder-zinc-400" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-8 border-t border-white/5 flex justify-end">
                        <button
                          onClick={() => setActiveStep(2)}
                          className="group relative overflow-hidden bg-[#fa4616] hover:bg-[#d43a12] text-white px-10 py-4.5 rounded-[1.5rem] font-black text-sm transition-all active:scale-95 shadow-2xl shadow-[#fa4616]/20"
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            Save & Continue
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="pl-11">
                      <p className="text-zinc-500 text-sm font-medium italic">Billing details confirmed.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Payment Section */}
              <div className={`bg-white dark:bg-zinc-900/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-zinc-200 dark:border-white/5 transition-all duration-500 ${activeStep === 2 ? 'ring-2 ring-[#fa4616]/50 border-transparent shadow-[#fa4616]/5' : ''}`}>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors ${activeStep === 2 ? 'bg-[#fa4616] text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 transition-colors'}`}>03</div>
                      <h2 className={`text-xl font-bold tracking-tight transition-colors ${activeStep === 2 ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-600'}`}>Payment</h2>
                    </div>
                  </div>
                  {activeStep === 2 ? (
                    <div className="space-y-10 pl-11 animate-in fade-in slide-in-from-top-4 duration-700">
                      {/* Payment Method Selector */}
                      <div className="flex items-center gap-10">
                        <label className="flex items-center gap-4 cursor-pointer group">
                          <div className="relative flex items-center justify-center">
                            <input type="radio" name="payment" defaultChecked className="peer opacity-0 absolute w-6 h-6 cursor-pointer" />
                            <div className="w-6 h-6 rounded-full border-2 border-zinc-700 peer-checked:border-[#fa4616] flex items-center justify-center transition-all">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#fa4616] opacity-0 peer-checked:opacity-100 transition-all scale-0 peer-checked:scale-100" />
                            </div>
                          </div>
                          <span className="text-base font-bold text-zinc-400 group-hover:text-white transition-colors">Credit or Debit</span>
                        </label>
                        <label className="flex items-center gap-4 cursor-pointer group">
                          <div className="relative flex items-center justify-center">
                            <input type="radio" name="payment" className="peer opacity-0 absolute w-6 h-6 cursor-pointer" />
                            <div className="w-6 h-6 rounded-full border-2 border-zinc-700 peer-checked:border-[#fa4616] flex items-center justify-center transition-all">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#fa4616] opacity-0 peer-checked:opacity-100 transition-all scale-0 peer-checked:scale-100" />
                            </div>
                          </div>
                          <span className="text-base font-bold text-zinc-400 group-hover:text-white transition-colors">PayPal</span>
                        </label>
                      </div>

                      {/* Card Details Form */}
                      <div className="space-y-8">
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Card number</label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="1234 1234 1234 1234"
                              className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 focus:border-transparent transition-all font-medium pr-32 placeholder-zinc-400"
                            />
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-3 grayscale opacity-40">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 w-auto" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-auto" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-5 w-auto" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                          <div className="flex flex-col space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Expiration date</label>
                            <input
                              type="text"
                              placeholder="MM / YY"
                              className="bg-white border border-zinc-200 rounded-2xl px-6 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 focus:border-transparent transition-all font-medium placeholder-zinc-400"
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Security code</label>
                            <div className="relative">
                              <input
                                type="text"
                                placeholder="CVC"
                                className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 text-black outline-none focus:ring-2 focus:ring-[#fa4616]/50 focus:border-transparent transition-all font-medium pr-12 placeholder-zinc-400"
                              />
                              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="pl-11">
                      <p className="text-zinc-600 text-sm font-medium">Complete billing to proceed to payment.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full lg:w-96 shrink-0 relative">
              <div className="bg-white dark:bg-zinc-900/30 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl border border-zinc-200 dark:border-white/5 p-10 lg:sticky lg:top-24 group transition-colors duration-300">
                {/* Backdrop Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fa4616]/5 to-transparent rounded-[2.5rem] transition-opacity group-hover:opacity-100 opacity-60 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-10">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-white/10 p-0.5 bg-zinc-800">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-[calc(1rem-2px)] grayscale-[0.2]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#fa4616] font-black uppercase tracking-[0.2em] leading-none transition-colors">Your Selection</span>
                      <h3 className="text-lg font-black text-zinc-900 dark:text-white mt-1.5 leading-tight tracking-tight transition-colors">{course.title}</h3>
                      <p className="text-xl font-black text-[#fa4616] mt-2 transition-colors">{course.price.toLocaleString()} LKR</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-10">
                    <input
                      type="text"
                      placeholder="Discount code"
                      className="flex-grow bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-sm text-black outline-none focus:ring-2 focus:ring-[#fa4616]/30 transition-all font-medium placeholder-zinc-400"
                    />
                    <button className="px-6 py-4 text-xs font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-600 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 rounded-2xl cursor-not-allowed transition-colors">
                      Apply
                    </button>
                  </div>

                  <div className="space-y-4 mb-10">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-zinc-500">Subtotal</span>
                      <span className="text-zinc-900 dark:text-white transition-colors">{course.price.toLocaleString()} LKR</span>
                    </div>
                    <div className="flex justify-between items-center text-xl font-black text-zinc-900 dark:text-white pt-6 border-t border-zinc-200 dark:border-white/5 transition-colors">
                      <span>Total Due</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-[#fa4616]/10 text-[#fa4616] px-2 py-1 rounded font-black tracking-widest">LKR</span>
                        <span>{course.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={activeStep !== 2}
                    onClick={() => alert('Purchase successful!')}
                    className={`group relative overflow-hidden w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-2xl ${activeStep === 2
                      ? 'bg-[#fa4616] text-white shadow-[#fa4616]/20 hover:bg-[#d43a12]'
                      : 'bg-zinc-800 text-zinc-600 cursor-not-allowed border border-white/5'
                      }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Complete Payment
                      {activeStep === 2 && (
                        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      )}
                    </span>
                    {activeStep === 2 && <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer" />}
                  </button>

                  <p className="mt-8 text-[10px] text-zinc-600 text-center leading-relaxed font-bold uppercase tracking-widest">
                    Secured by FYD Academy Encryption<br />
                    <a href="#" className="text-zinc-500 hover:text-[#fa4616] transition-colors">Terms</a> • <a href="#" className="text-zinc-500 hover:text-[#fa4616] transition-colors">Privacy</a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
};

export default Checkout;