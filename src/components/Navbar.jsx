import { Link, useLocation } from 'react-router-dom';
import logoDark from '../assets/Logo.svg';
import logoLight from '../assets/Logo-Light.svg';
import { useTheme } from '../context/ThemeContext';
import { Settings, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);

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
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt="FYD Academy Logo"
            className="h-10 w-auto transform scale-[2] origin-left transition-all duration-300"
          />
        </Link>

        {/* Nav Links & Login Button */}
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className={`relative text-sm font-semibold transition-all py-2 group ${isActive('/') ? 'text-[#fa4616]' : 'text-zinc-600 dark:text-white hover:text-[#fa4616]'
              }`}
          >
            Home
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fa4616] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,70,22,0.8)] ${isActive('/') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                }`}
            />
          </Link>
          <Link
            to="/curriculum"
            className={`relative text-sm font-semibold transition-all py-2 group ${isActive('/curriculum') ? 'text-[#fa4616]' : 'text-zinc-600 dark:text-white hover:text-[#fa4616]'
              }`}
          >
            Curriculum
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fa4616] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,70,22,0.8)] ${isActive('/curriculum') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                }`}
            />
          </Link>
          <Link
            to="/courses"
            className={`relative text-sm font-semibold transition-all py-2 group ${isActive('/courses') ? 'text-[#fa4616]' : 'text-zinc-600 dark:text-white hover:text-[#fa4616]'
              }`}
          >
            Courses
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fa4616] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,70,22,0.8)] ${isActive('/courses') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                }`}
            />
          </Link>
          <Link
            to="/contact"
            className={`relative text-sm font-semibold transition-all py-2 group ${isActive('/contact') ? 'text-[#fa4616]' : 'text-zinc-600 dark:text-white hover:text-[#fa4616]'
              }`}
          >
            Contact
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fa4616] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,70,22,0.8)] ${isActive('/contact') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                }`}
            />
          </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
