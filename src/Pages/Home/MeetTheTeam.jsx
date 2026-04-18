import React from 'react';

const MeetTheTeam = () => {
  return (
    <section className="w-full bg-transparent py-16 md:py-24">
      <div className="w-[95%] max-w-6xl mx-auto bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        
        {/* Text Content */}
        <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center">
          <h2 className="text-[2.2rem] font-extrabold text-[#0B1B32] mb-6 tracking-tight">
            Meet the team!
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Hello! We are Leon and Natalie, the founders of FYD Academy. We're passionate about helping you master DaVinci Resolve and achieve your creative goals.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            We've worked on a variety of projects from short-form narrative to documentary. We're based in London, England but Natalie is originally from the U.S.A. When we're not editing or teaching, we love helping other people and spending time in the mountains.
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-[45%] lg:w-[40%] h-80 md:h-auto shrink-0 relative">
          <img 
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Leon and Natalie" 
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

      </div>
    </section>
  );
};

export default MeetTheTeam;
