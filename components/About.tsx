
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="px-4 md:px-8 pb-20 max-w-7xl mx-auto" id="over-ons">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Stats Card */}
        <div className="lg:col-span-4 bg-primary dark:bg-surface-dark rounded-[2.5rem] p-10 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
            <svg fill="none" height="250" viewBox="0 0 100 100" width="250" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="2" />
              <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="2" />
              <circle cx="50" cy="50" r="28" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <p className="text-[10px] font-bold opacity-70 uppercase tracking-[0.3em] mb-2 font-sans">Onze Praktijk</p>
            <p className="text-sm opacity-60 italic font-display">Excellentie in voetverzorging</p>
          </div>

          <div className="flex gap-12 mt-16 relative z-10">
            <div>
              <span className="block text-5xl md:text-6xl font-semibold tracking-tighter mb-2 font-sans">12+</span>
              <span className="text-[10px] font-bold opacity-80 leading-tight uppercase tracking-[0.2em]">Jaren<br />Ervaring</span>
            </div>
            <div>
              <span className="block text-5xl md:text-6xl font-semibold tracking-tighter mb-2 font-sans">2k+</span>
              <span className="text-[10px] font-bold opacity-80 leading-tight uppercase tracking-[0.2em]">Tevreden<br />Cliënten</span>
            </div>
          </div>
        </div>

        {/* Right Info Card */}
        <div className="lg:col-span-8 bg-surface-light dark:bg-surface-dark rounded-[2.5rem] flex flex-col md:flex-row overflow-hidden shadow-sm group">
          <div className="p-8 md:p-14 flex flex-col justify-center md:w-1/2">
            <h2 className="text-4xl font-semibold text-stone-800 dark:text-stone-100 mb-6 font-sans tracking-tight">
              Wie <span className="text-primary italic font-medium font-display">Wij Zijn</span>
            </h2>
            <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed text-base font-light">
              <p>
                Bij Voetzorg begrijpen we dat uw voeten de basis vormen van uw gezondheid. Onze praktijk combineert medische precisie met een spa-achtige ervaring.
              </p>
              <p>
                Als gediplomeerd medisch pedicure zorgen wij ervoor dat elke behandeling niet alleen problemen oplost, maar u ook volledig tot rust brengt. Van eeltverwijdering tot complexe nagelreparatie.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[400px] overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                alt="Pedicure specialist aan het werk"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIeKW7l2-nbHikNOVFgsEqcIEgTXVsINp73sBR731hTHeqEGACQDrfNt-uhoCCPxgwhJ017ls08HYb-InXKjd4rZbZ1RC6uRODW7sFKbJFCL8O7GqKOj9qYynOxgz5qF7X9BONcZjLIIufzfjZFHSPhXOARjYGg5KQsDsy4xWoC996MuK0KfarIQkf_uk8iK8c7Ft5_J7QwuzE5Kw10LorqcT3Xy5v6gT2gKPhhYMGvJ9wrg53IeppKPKNIeF1ODrJh0WV-xtHgq4"
                />
            </div>
            {/* Elegant SVG curve separation - moved inside a dedicated container to avoid peeking */}
            <div 
              className="hidden md:block absolute top-0 left-0 bottom-0 w-24 bg-surface-light dark:bg-surface-dark z-10 translate-x-[-1px]" 
              style={{ clipPath: 'ellipse(70% 100% at 0% 50%)' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
