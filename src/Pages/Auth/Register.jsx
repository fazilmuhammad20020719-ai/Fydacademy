import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import BackgroundLines from '../../components/BackgroundLines';

const Register = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col justify-center py-20 px-6 lg:px-8 relative transition-colors duration-300">
      <BackgroundLines />

      {/* Decorative Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#fa4616]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#fa4616]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link to="/" className="flex justify-center mb-6 group">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#fa4616]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              className="h-10 w-auto transform scale-[2.2] relative z-10"
              src={logo}
              alt="FYD Academy"
            />
          </div>
        </Link>
        <h2 className="text-center text-4xl font-black text-zinc-900 dark:text-white tracking-tighter transition-colors">
          Join the <span className="text-[#fa4616]">Academy</span>
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-500 font-medium">
          Already a member?{' '}
          <Link to="/login" className="font-black text-[#fa4616] hover:text-[#ff8c00] transition-colors underline decoration-[#fa4616]/30 underline-offset-4">
            Sign In Here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 dynamic-stroke-container">
        <div className="bg-white dark:bg-zinc-900/40 backdrop-blur-2xl py-12 px-8 shadow-2xl rounded-[2.5rem] mx-4 sm:mx-0 border border-zinc-200 dark:border-white/5 transition-all duration-300">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest text-[#fa4616] dark:text-[#fa4616] mb-2 ml-1 transition-colors">
                Full name
              </label>
              <div className="relative group">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="appearance-none block w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl shadow-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:border-transparent transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-[#fa4616] dark:text-[#fa4616] mb-2 ml-1 transition-colors">
                Email address
              </label>
              <div className="relative group">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@company.com"
                  className="appearance-none block w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl shadow-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:border-transparent transition-all font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-xs font-black uppercase tracking-widest text-[#fa4616] dark:text-[#fa4616] mb-2 ml-1 transition-colors">
                  Password
                </label>
                <div className="relative group">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="appearance-none block w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl shadow-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:border-transparent transition-all font-medium"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-xs font-black uppercase tracking-widest text-[#fa4616] dark:text-[#fa4616] mb-2 ml-1 transition-colors">
                  Confirm
                </label>
                <div className="relative group">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    required
                    placeholder="••••••••"
                    className="appearance-none block w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl shadow-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:border-transparent transition-all font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center px-1">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 bg-white dark:bg-zinc-900 border-zinc-300 dark:border-white/10 text-[#fa4616] focus:ring-[#fa4616] rounded cursor-pointer transition-colors"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-zinc-600 dark:text-zinc-400 font-medium cursor-pointer transition-colors">
                I agree to the{' '}
                <Link to="/terms" className="font-black text-[#fa4616] hover:text-[#ff8c00] transition-colors">
                  Terms of Service
                </Link>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="group relative w-full overflow-hidden flex justify-center py-5 px-4 bg-[#fa4616] border border-transparent rounded-2xl shadow-2xl shadow-[#fa4616]/20 text-lg font-black text-white hover:bg-[#d43a12] transition-all active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Create Account
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-shimmer" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200 dark:border-white/5" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-white dark:bg-zinc-900 text-zinc-500 font-bold uppercase tracking-widest transition-colors">Or continue with</span>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => alert('Google Sign-up Coming Soon!')}
                className="w-full inline-flex justify-center items-center py-4 px-4 rounded-2xl border border-zinc-200 dark:border-white/5 bg-zinc-100 dark:bg-zinc-950/50 text-sm font-bold text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-all shadow-sm active:scale-[0.98] group"
              >
                <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                </svg>
                Google Account
              </button>
            </div>
          </form>

          <div className="mt-10 text-center">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
              Join 10,000+ professionals at <span className="text-[#fa4616]">FYD Academy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
