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
    <section className="relative w-full bg-zinc-50 dark:bg-[#050505] pt-24 pb-32 overflow-hidden transition-colors duration-300">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#fa4616]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-[95%] max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter">
            Why Learn <span className="text-[#fa4616]">With Us?</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#fa4616] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white dark:bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-white/5 hover:border-[#fa4616]/30 transition-all duration-500 shadow-2xl"
            >
              <div className="h-64 w-full overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-8 text-center flex flex-col items-center flex-grow">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-[#fa4616] transition-colors tracking-tight">
                  {card.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#fa4616] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLearn;
