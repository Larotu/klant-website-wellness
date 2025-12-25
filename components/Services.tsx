
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto" id="behandelingen">
      <div className="mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-800 dark:text-stone-100 font-sans">
          Hoe wij uw voeten <span className="text-primary italic font-medium font-display">Verzorgen</span>
        </h2>
        <p className="text-stone-500 dark:text-stone-400 mt-4 text-lg font-light">Scroll horizontaal om al onze specialistische behandelingen te ontdekken</p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 -mx-4 px-4 md:px-0 md:-mx-0 no-scrollbar">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="snap-center shrink-0 w-[88vw] md:w-[850px] bg-white dark:bg-surface-dark rounded-[2.5rem] border border-stone-200 dark:border-stone-800 p-8 md:p-14 shadow-2xl shadow-stone-200/50 dark:shadow-none grid md:grid-cols-2 gap-10 md:gap-16 items-center group"
          >
            <div className="relative order-2 md:order-1">
              <span className="text-[10rem] font-sans text-stone-100 dark:text-stone-800/20 absolute -top-24 -left-10 -z-10 select-none font-bold opacity-30">
                {service.id}
              </span>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-800 dark:text-stone-100 mb-2 font-sans">
                {service.title.split(' & ')[0]} {service.title.includes(' & ') && <>& <span className="text-primary italic font-medium font-display">{service.title.split(' & ')[1]}</span></>}
                {!service.title.includes(' & ') && service.title.includes(' ') && (
                  <>{service.title.split(' ')[0]} <span className="text-primary italic font-medium font-display">{service.title.split(' ')[1]}</span></>
                )}
              </h3>
              <h4 className="text-xl text-stone-400 dark:text-stone-500 font-medium mb-6 italic font-display">{service.subtitle}</h4>
              <p className="text-stone-600 dark:text-stone-300 mb-8 leading-relaxed text-base font-light">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-stone-700 dark:text-stone-300 font-medium">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mr-4 aspect-square">
                      <span className="material-icons-round text-primary text-sm">check</span>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent-brown hover:bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-stone-300 dark:shadow-none transition-all duration-300 active:scale-95"
              >
                Boek deze behandeling
              </a>
            </div>

            <div className="order-1 md:order-2 h-[300px] md:h-[500px] rounded-3xl overflow-hidden relative shadow-inner">
              <img
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
                src={service.imageUrl}
              />
              <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 block mb-0.5 font-bold">Vanaf</span>
                <span className="text-xl font-bold text-stone-800 dark:text-white font-display italic">{service.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
