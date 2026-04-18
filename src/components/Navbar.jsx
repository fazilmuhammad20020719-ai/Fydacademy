import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.svg';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="backdrop-blur-xl w-full fixed top-0 left-0 right-0 z-[9999]"
      style={{
        background: 'rgba(10, 10, 10, 0.92)',
        borderBottom: '1px solid rgba(250,70,22,0.4)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo part */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={logo} alt="FYD Academy Logo" className="h-10 w-auto transform scale-[2] origin-left" />
        </Link>

        {/* Nav Links & Login Button */}
        <div className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`relative text-sm font-semibold transition-all py-2 group ${
              isActive('/') ? 'text-[#fa4616]' : 'text-white hover:text-[#fa4616]'
            }`}
          >
            Home
            <span 
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fa4616] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,70,22,0.8)] ${
                isActive('/') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
              }`} 
            />
          </Link>
          <Link 
            to="/curriculum" 
            className={`relative text-sm font-semibold transition-all py-2 group ${
              isActive('/curriculum') ? 'text-[#fa4616]' : 'text-white hover:text-[#fa4616]'
            }`}
          >
            Curriculum
            <span 
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fa4616] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,70,22,0.8)] ${
                isActive('/curriculum') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
              }`} 
            />
          </Link>
          <Link 
            to="/courses" 
            className={`relative text-sm font-semibold transition-all py-2 group ${
              isActive('/courses') ? 'text-[#fa4616]' : 'text-white hover:text-[#fa4616]'
            }`}
          >
            Courses
            <span 
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fa4616] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,70,22,0.8)] ${
                isActive('/courses') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
              }`} 
            />
          </Link>
          <Link 
            to="/contact" 
            className={`relative text-sm font-semibold transition-all py-2 group ${
              isActive('/contact') ? 'text-[#fa4616]' : 'text-white hover:text-[#fa4616]'
            }`}
          >
            Contact
            <span 
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fa4616] rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(250,70,22,0.8)] ${
                isActive('/contact') ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
              }`} 
            />
          </Link>
          <Link 
            to="/login"
            className="bg-[#fa4616] text-white px-5 py-2 rounded text-sm font-bold hover:bg-[#d43a12] shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:ring-opacity-50 active:scale-95"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
