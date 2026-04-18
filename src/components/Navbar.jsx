import { Link, useLocation } from 'react-router-dom';
import logoDark from '../assets/Logo.svg';
import logoLight from '../assets/Logo-Light.svg';
import { useTheme } from '../context/ThemeContext';
import { Settings, Sun, Moon, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="backdrop-blur-xl w-full fixed top-0 left-0 right-0 z-[9999] transition-all duration-300"
      style={{
        background: theme === 'dark' ? 'rgba(10, 10, 10, 0.92)' : 'rgba(255, 255, 255, 0.92)',
        borderBottom: theme === 'dark' ? '1px solid rgba(250,70,22,0.4)' : '1px solid rgba(250,70,22,0.2)',
        boxShadow: theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.5)' : '0 4px 30px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo part */}
        <Link to="/" className="flex items-center cursor-pointer relative z-[10001]">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="FYD Academy Logo"
            className="h-8 md:h-10 w-auto transform scale-[1.8] md:scale-[2] origin-left transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav Links & Login Button */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Curriculum', path: '/curriculum' },
            { name: 'Courses', path: '/courses' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm font-semibold transition-all py-2 group ${isActive(item.path) ? 'text-[#fa4616]' : 'text-zinc-600 dark:text-white hover:text-[#fa4616]'
                }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fa4616] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,70,22,0.8)] ${isActive(item.path) ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                  }`}
              />
            </Link>
          ))}

          <Link
            to="/login"
            className="bg-[#fa4616] text-white px-5 py-2 rounded text-sm font-bold hover:bg-[#d43a12] shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:ring-opacity-50 active:scale-95"
          >
            Login
          </Link>

          {/* Settings / Theme Toggle */}
          <div className="relative">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-full hover:bg-zinc-800/10 dark:hover:bg-white/10 transition-colors text-zinc-600 dark:text-white"
            >
              <Settings className={`w-5 h-5 transition-transform duration-500 ${showSettings ? 'rotate-90' : ''}`} />
            </button>

            {showSettings && (
              <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200 z-[10000]">
                <button
                  onClick={() => {
                    toggleTheme();
                    setShowSettings(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors group"
                >
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </span>
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                  ) : (
                    <Moon className="w-4 h-4 text-zinc-600 group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-4 relative z-[10001]">
          <button
            onClick={() => {
              toggleTheme();
            }}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-white border border-zinc-200 dark:border-white/10"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-[#fa4616] text-white shadow-lg shadow-[#fa4616]/20 transition-all active:scale-95"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full min-h-screen bg-white dark:bg-black z-[10000] p-6 pt-32 animate-in fade-in slide-in-from-top-10 duration-500 border-b border-[#fa4616]/20 shadow-2xl overflow-y-auto">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#fa4616]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col space-y-4 relative z-10">
            {[
              { name: 'Home', path: '/' },
              { name: 'Curriculum', path: '/curriculum' },
              { name: 'Courses', path: '/courses' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-between p-5 rounded-2xl transition-all border ${isActive(item.path)
                  ? 'bg-[#fa4616] text-white border-transparent shadow-xl shadow-[#fa4616]/20'
                  : 'bg-zinc-50 dark:bg-white/5 text-zinc-900 dark:text-white border-zinc-200 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-white/10'
                  }`}
              >
                <span className="text-lg font-black tracking-tight">{item.name}</span>
                <svg className={`w-5 h-5 ${isActive(item.path) ? 'opacity-100' : 'opacity-30'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}

            <div className="pt-8">
              <Link
                to="/login"
                className="flex items-center justify-center gap-3 w-full py-5 rounded-[2rem] bg-[#fa4616] text-white font-black text-xl shadow-2xl shadow-[#fa4616]/30 hover:bg-[#d43a12] transition-all active:scale-[0.98]"
              >
                Sign In
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M11 16l-4-4m0 0l4-4m-4 4h14" />
                </svg>
              </Link>

              <p className="mt-8 text-center text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">
                FYD Academy Premium Training
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
