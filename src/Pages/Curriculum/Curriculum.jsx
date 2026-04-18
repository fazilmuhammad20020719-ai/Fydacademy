import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import heroVideo from '../../assets/video.mp4';

// Assets for "What's included" section
import curriculumLessons from '../../assets/curriculum_lessons.png';
import curriculumTimeline from '../../assets/curriculum_timeline.png';
import curriculumMedia from '../../assets/curriculum_media.png';
import curriculumTrainers from '../../assets/curriculum_trainers.png';

const inclusionData = [
  {
    title: "52 Lessons",
    description: "Carefully planned high-quality lessons with notes and hotkeys.",
    number: "52",
    image: curriculumLessons
  },
  {
    title: "9 Hours",
    description: "Intense training packed with incredible information.",
    number: "9",
    image: curriculumTimeline
  },
  {
    title: "15GB Media",
    description: "Pro rushes shot on Red, Blackmagic & Kodak film.",
    number: "15",
    image: curriculumMedia
  },
  {
    title: "2 Trainers",
    description: "Learn from Natalie and Leon's industry experience.",
    number: "2",
    image: curriculumTrainers
  }
];

const Curriculum = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-12 px-4 md:px-8">
        {/* FIXED: Kept max-w-4xl so the video isn't overly massive on large screens */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Unified Background Box wrapping both Video and Text */}
          <div className="w-full bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden">

            {/* Video Container (Top Half) */}
            <div className="w-full aspect-video bg-black relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Simple Play Overlay Mockup */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>

            {/* Text Content (Bottom Half) */}
            <div className="py-10 px-6 md:px-12 flex flex-col items-center text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                A Comprehensive DaVinci Resolve Course for Filmmakers
              </h1>

              <p className="text-sm md:text-base text-gray-600 font-medium mb-6 max-w-2xl mx-auto tracking-wide">
                LIFETIME Access - 52 Lessons, 9 Hours of Training and 15GB of Sample Media
              </p>

              <Link
                to="/checkout"
                className="inline-block bg-[#fa4616] text-white font-bold text-base px-10 py-3 rounded-lg shadow-md hover:bg-[#d43a12] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                Join Now
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* What's Included Section (Compact Grid Style) */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* FIXED: Restored the section title which was missing */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            What's included?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusionData.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-300 flex flex-col items-center text-center h-full transform hover:-translate-y-1"
              >
                {/* Visual Header - Slightly taller (h-32) for better number visibility */}
                <div className="w-full h-32 relative bg-gray-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-black text-white drop-shadow-md italic tracking-tighter">
                      {item.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow w-full">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for future Curriculum content */}
      <section className="flex-grow bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-dashed border-gray-200 bg-gray-50 rounded-[2rem] p-12 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Curriculum Coming Soon</h3>
            <p className="text-gray-500 font-medium italic mb-6 text-sm">We're finalizing the lesson structure to give you the best learning experience.</p>
            <div className="flex justify-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#fa4616] rounded-full animate-bounce"></div>
              <div className="w-2.5 h-2.5 bg-[#fa4616] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2.5 h-2.5 bg-[#fa4616] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Curriculum;