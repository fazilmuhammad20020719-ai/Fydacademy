import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1); // 1: Billing, 2: Payment
  const [showBusinessDetails, setShowBusinessDetails] = useState(false);

  // Mock course data
  const course = {
    title: 'DaVinci Resolve for Editors',
    price: 275,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-[#0B1B32] mb-8">Checkout</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Form Sections */}
            <div className="flex-grow space-y-6">
              
              {/* 1. Contact Info Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-[#0B1B32]">Contact Info</h2>
                  <button className="text-sm font-medium text-gray-400 hover:text-gray-600">Logout</button>
                </div>
                <p className="text-gray-600">fazilmuhammad@gmail.com</p>
              </div>

              {/* 2. Billing Section */}
              <div className={`bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 ${activeStep === 1 ? 'ring-2 ring-[#fa4616]/20' : ''}`}>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-[#0B1B32]">Billing</h2>
                    {activeStep > 1 && (
                      <button 
                        onClick={() => setActiveStep(1)}
                        className="text-sm font-bold text-[#fa4616] hover:text-[#d43a12]"
                      >
                        Edit
                      </button>
                    )}
                  </div>

                  {activeStep === 1 ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm font-bold text-[#0B1B32]">Country</label>
                          <select className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all">
                            <option>Sri Lanka</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>India</option>
                          </select>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm font-bold text-[#0B1B32]">State</label>
                          <input type="text" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all" />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm font-bold text-[#0B1B32]">Postal Code</label>
                          <input type="text" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col space-y-2 md:col-span-1">
                          <label className="text-sm font-bold text-[#0B1B32]">City</label>
                          <input type="text" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all" />
                        </div>
                        <div className="flex flex-col space-y-2 md:col-span-1">
                          <label className="text-sm font-bold text-[#0B1B32]">Address 1</label>
                          <input type="text" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all" />
                        </div>
                        <div className="flex flex-col space-y-2 md:col-span-1">
                          <label className="text-sm font-bold text-[#0B1B32]">Address 2</label>
                          <input type="text" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all" />
                        </div>
                      </div>

                      <div>
                        <button 
                          onClick={() => setShowBusinessDetails(!showBusinessDetails)}
                          className="text-sm font-medium text-[#fa4616] hover:underline"
                        >
                          {showBusinessDetails ? '- Hide business details' : '+ Add business details'}
                        </button>
                        {showBusinessDetails && (
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2">
                            <div className="flex flex-col space-y-2">
                              <label className="text-sm font-bold text-[#0B1B32]">Business Name</label>
                              <input type="text" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all" />
                            </div>
                            <div className="flex flex-col space-y-2">
                              <label className="text-sm font-bold text-[#0B1B32]">VAT / Tax ID</label>
                              <input type="text" className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#fa4616] transition-all" />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-6 border-t border-gray-100 flex justify-end">
                        <button 
                          onClick={() => setActiveStep(2)}
                          className="bg-[#fa4616] hover:bg-[#d43a12] text-white px-8 py-3 rounded-lg font-bold transition-all active:scale-95 shadow-lg shadow-[#fa4616]/20"
                        >
                          Save & Continue
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 italic">Billing information saved.</p>
                  )}
                </div>
              </div>

              {/* 3. Payment Section */}
              <div className={`bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 ${activeStep === 2 ? 'ring-2 ring-[#fa4616]/20' : ''}`}>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className={`text-lg font-bold ${activeStep === 2 ? 'text-[#0B1B32]' : 'text-gray-300'}`}>Payment</h2>
                  </div>
                  {activeStep === 2 ? (
                    <div className="space-y-8 py-4 animate-in fade-in slide-in-from-top-2">
                      {/* Payment Method Selector */}
                      <div className="flex items-center gap-8 px-2">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="payment" defaultChecked className="w-5 h-5 border-gray-300 text-[#0B1B32] focus:ring-[#0B1B32] cursor-pointer" />
                          <span className="text-base font-medium text-gray-700 group-hover:text-[#0B1B32] transition-colors">Credit or Debit</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="payment" className="w-5 h-5 border-gray-300 text-[#0B1B32] focus:ring-[#0B1B32] cursor-pointer" />
                          <span className="text-base font-medium text-gray-700 group-hover:text-[#0B1B32] transition-colors">PayPal</span>
                        </label>
                      </div>

                      {/* Card Details Form */}
                      <div className="space-y-6">
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm font-bold text-[#0B1B32]">Card number</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              placeholder="1234 1234 1234 1234" 
                              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#fa4616]/20 focus:border-[#fa4616] transition-all pr-32" 
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-60">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 w-auto" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-auto" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-5 w-auto" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Discover_Card_logo.svg" alt="Discover" className="h-3 w-auto" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-[#0B1B32]">Expiration date</label>
                            <input 
                              type="text" 
                              placeholder="MM / YY" 
                              className="bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#fa4616]/20 focus:border-[#fa4616] transition-all" 
                            />
                          </div>
                          <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-[#0B1B32]">Security code</label>
                            <div className="relative">
                              <input 
                                type="text" 
                                placeholder="CVC" 
                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#fa4616]/20 focus:border-[#fa4616] transition-all pr-12" 
                              />
                              <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30">
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
                    <p className="text-sm text-gray-400">Complete billing to proceed to payment.</p>
                  )}
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary */}
            <div className="w-full lg:w-96 shrink-0">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-none">Course</span>
                    <h3 className="text-sm font-bold text-[#0B1B32] mt-1 leading-tight">{course.title}</h3>
                    <p className="text-sm font-bold text-[#0B1B32] mt-1">${course.price}</p>
                  </div>
                </div>

                <div className="flex gap-2 mb-8">
                  <input 
                    type="text" 
                    placeholder="Discount code" 
                    className="flex-grow bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#fa4616] transition-all"
                  />
                  <button className="px-4 py-2 text-sm font-bold text-gray-300 bg-gray-50 border border-gray-200 rounded-lg cursor-not-allowed">
                    Apply
                  </button>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="text-[#0B1B32] font-medium">${course.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#0B1B32] pt-3 border-t border-gray-100">
                    <span>Total</span>
                    <span>${course.price.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-center mb-8">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0B1B32]">Due now</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded font-bold">USD</span>
                    <span className="text-lg font-black text-[#0B1B32]">${course.price.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  disabled={activeStep !== 2}
                  onClick={() => alert('Purchase successful!')}
                  className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all active:scale-95 ${
                    activeStep === 2 
                      ? 'bg-[#fa4616] text-white shadow-[#fa4616]/20 hover:bg-[#d43a12]' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-gray-200'
                  }`}
                >
                  Pay now
                </button>

                <p className="mt-6 text-[10px] text-gray-400 text-center leading-relaxed">
                  By clicking "Pay now" you agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
