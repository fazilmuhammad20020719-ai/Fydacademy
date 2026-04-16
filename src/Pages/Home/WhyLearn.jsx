import React from 'react';
import workingProfessionals from '../../assets/working_professionals.png';
import certifiedTrainers from '../../assets/certified_trainers.png';
import passionateTeaching from '../../assets/passionate_teaching.png';

const WhyLearn = () => {
  const cards = [
    {
      title: "Working Professionals",
      description: "We've been making films for corporate, commercial and creative clients for over 15 years. We don't just teach theory, we share our practical experience in every single lesson.",
      image: workingProfessionals
    },
    {
      title: "Certified Trainers",
      description: "We are a Blackmagic Design Certified Training Partner. That means we know what we're talking about, and... you can get official Blackmagic certification when you take our Resolve for Editors course.",
      image: certifiedTrainers
    },
    {
      title: "We love what we do!",
      description: "If the teacher doesn't care about what they are teaching, how can you expect the student to care about what they are learning! We put genuine passion into our teaching, we're determined to make it the best it can be.",
      image: passionateTeaching
    }
  ];

  return (
    <section className="w-full bg-slate-100 pt-12 pb-16">
      <div className="w-[95%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B32] text-center mb-12">
          Why Learn With Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-[#0B1B32] mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLearn;
