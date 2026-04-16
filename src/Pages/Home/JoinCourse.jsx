import React from 'react';
import { courses } from '../../data/coursesData';

const JoinCourse = () => {
  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-24">
      <div className="w-[95%] max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-3">
            Join a Course
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Sign up for one of our courses and start learning immediately.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1B32] mb-2 group-hover:text-[#fa4616] transition-colors">
                  {course.title}
                </h3>
                <span className="text-[#fa4616] text-sm font-semibold mb-4 block">
                  {course.metadata}
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  {course.description}
                </p>
                <button className="self-start bg-[#fa4616] hover:bg-[#d43a12] text-white px-8 py-3 rounded-lg text-sm font-bold shadow-lg shadow-[#fa4616]/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#fa4616] focus:ring-opacity-50">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JoinCourse;
