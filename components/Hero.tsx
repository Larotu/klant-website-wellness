
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="relative w-full h-[550px] md:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
        <img
          alt="Luxe pedicure salon omgeving"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjq_dOxKXwQsNYY8vBzWZa6i5cLOogHEzwiQU-z5Uw9gyqP-wSfjPHqo18zekcBH_Lg9Gce-1hjUabrx3Ts3RFJI2cVlZdHbHmV8BZcTc-uW3obTuHsE1aw31lysgpM7Awg7LDdb9ShM1Mu7PNotB04_HfD8FhGDJCYk9vDTvAbWQREuVSnalCu6hPvjlKzrD50gnALoWEXoPlsjhj8znz2EDKtuYCWYVyQ4Spd_AP1ckDkoIzvPXAYGdszsKedTgCPko9rdMPMI0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-stone-900/10"></div>
        
        <div className="absolute bottom-0 left-0 p-8 md:p-20 w-full md:w-3/4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 font-sans">
            Rust en Verzorging <br />
            <span className="text-secondary/90 font-medium italic font-display">Voor Uw Voeten</span>
          </h1>
          <p className="text-stone-200 text-lg md:text-xl mb-10 max-w-xl font-normal leading-relaxed opacity-90">
            Ervaar professionele voetverzorging in een luxe, rustgevende omgeving. Wij combineren medische expertise met pure ontspanning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center gap-3 bg-white hover:bg-stone-100 text-stone-900 px-8 py-4 rounded-full font-bold shadow-xl transition-all active:scale-95">
              <span>Bekijk Behandelingen</span>
              <span className="material-icons-round bg-primary text-white p-1 rounded-full text-xs">arrow_forward</span>
            </button>
            <a href="#behandelingen" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all">
              Direct Boeken
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
