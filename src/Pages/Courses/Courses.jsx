import React from 'react';
import { courses } from '../../data/coursesData';
import Footer from '../../components/Footer';


const Courses = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">

      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B1B32] tracking-tight">
              Our Training Courses
            </h1>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Image & Price Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex flex-col space-y-1">
                    {course.oldPrice && (
                      <span className="bg-gray-900/80 text-white/70 text-[10px] px-2 py-0.5 rounded backdrop-blur-sm line-through w-fit font-bold">
                        {course.oldPrice}
                      </span>
                    )}
                    <span className="bg-[#fa4616] text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-lg backdrop-blur-sm w-fit">
                      {course.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold text-[#0B1B32] mb-1 group-hover:text-[#fa4616] transition-colors line-clamp-2">
                    {course.title}
                  </h2>
                  <p className="text-[#fa4616] text-[13px] font-bold mb-4">
                    {course.metadata}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {course.description}
                  </p>
                  <button className="self-start bg-[#fa4616] hover:bg-[#d43a12] text-white px-8 py-2.5 rounded text-sm font-bold shadow-md transition-all shadow-[#fa4616]/20 active:scale-95">
                    View product
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
