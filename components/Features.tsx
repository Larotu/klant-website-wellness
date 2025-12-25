
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto" id="waarom">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-stone-800 dark:text-stone-100 mb-14 font-sans">
        Waarom kiezen voor <span className="text-primary italic font-medium font-display">Voetzorg</span>?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[300px]">
        {/* Hygiene Card */}
        <div className="md:col-span-4 bg-surface-light dark:bg-surface-dark rounded-[2.5rem] p-10 flex flex-col justify-between group hover:bg-stone-200 dark:hover:bg-stone-800 transition-all duration-500">
          <div>
            <div className="w-14 h-14 rounded-full bg-white dark:bg-stone-700 flex items-center justify-center text-primary shadow-sm mb-6 group-hover:-translate-y-2 transition-transform duration-500 aspect-square">
              <span className="material-icons-round text-2xl">medical_services</span>
            </div>
            <h3 className="text-2xl font-semibold text-stone-800 dark:text-stone-100 mb-4 font-sans tracking-tight">100% Hygiëne</h3>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed font-light">
              Wij werken volgens de strengste HAM-code richtlijnen voor een gegarandeerd veilige en steriele behandeling.
            </p>
          </div>
        </div>

        {/* Relaxation Image Card */}
        <div className="md:col-span-4 rounded-[2.5rem] overflow-hidden relative group shadow-lg">
          <img
            alt="Ontspannen sfeer"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 will-change-transform"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDARrvmu_0v60nntUV1C_wiIfjuwLkN5mYzOT0LB5J_l70lOO8S8aH2Yuxgheqz_xV7uMy3dH0WWyPd2HO_LRm7yLA72d2suBi1FKGpP00vnswkR9pg8aJ1fvFe99Yp0M-Go43QK_fLN4fss2sYRwIIf7I4PfNXZZKSyYUeq1A7aNxzqp4kEJEvU4muuEFsV_dC5vm3nLvCx2wzdcor8cky44GJ4waDrMMTvJNatdsG-2mSli8oCAzkf_86tKkMG8qoIl8BDq3hH_I"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent group-hover:from-stone-900/80 transition-all"></div>
          <div className="absolute bottom-0 left-0 p-10">
            <h3 className="text-2xl font-semibold text-white mb-2 font-sans tracking-tight">Volledige Ontspanning</h3>
            <p className="text-stone-200 text-sm font-light opacity-90">Een moment van pure rust in uw drukke dag.</p>
          </div>
        </div>

        {/* Focus/No Pressure Card */}
        <div className="md:col-span-4 bg-accent-brown dark:bg-[#151312] rounded-[2.5rem] p-10 flex flex-col justify-center text-center text-white relative overflow-hidden group shadow-xl">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <h3 className="text-3xl font-semibold mb-4 font-sans italic relative z-10 tracking-tight">Geen tijdsdruk</h3>
          <p className="text-stone-300 text-base leading-relaxed relative z-10 max-w-xs mx-auto font-light opacity-80">
            Wij plannen ruim in. Persoonlijke aandacht en advies op maat staan bij ons centraal. Uw voeten verdienen de tijd.
          </p>
        </div>

        {/* Quality Card */}
        <div className="md:col-span-8 bg-white dark:bg-surface-dark border border-stone-100 dark:border-stone-800 rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 group shadow-sm">
          <div className="max-w-md">
            <h3 className="text-3xl font-semibold text-stone-800 dark:text-stone-100 mb-4 font-sans tracking-tight">Superieure Kwaliteit</h3>
            <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-6 font-light">
              Wij werken uitsluitend met de beste verzorgingsproducten van merken zoals Peclavus en HFL Labs die uw huid optimaal voeden en herstellen.
            </p>
            <div className="flex gap-4">
              <span className="bg-stone-50 dark:bg-stone-800 px-4 py-2 rounded-full text-[10px] font-bold text-stone-400 uppercase tracking-widest font-sans">Premium</span>
              <span className="bg-stone-50 dark:bg-stone-800 px-4 py-2 rounded-full text-[10px] font-bold text-stone-400 uppercase tracking-widest font-sans">Natural</span>
            </div>
          </div>
          <div className="w-full md:w-64 h-56 relative overflow-hidden rounded-[2rem] shadow-xl">
            <img
              alt="Kwaliteitsproducten"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2r9Rhv-mPuhG2A2YUI2ABZg8jzOaJ6-BmKX8E472IeFfi_mtZ5Yaly8yEOpbVExKKws8wIuu5ElRlJMBe-FxZtFvMM1Wy1M4ETEiOAJiN6bQHdkK-mO_Yh6n5t9ow97GSK5C9TPwy_11cIft3nvihV1VEondLVsDk4tgQ3LHvQoXbya_OpL-d5i7S60N21MDbNEpj028_0O_PzTljzhfhR5-rfsrP5KthPPHRa0D-Zr9vMW4CCaN4429EAB0LyvqHAES6Kj_b160"
            />
          </div>
        </div>

        {/* Advice Card */}
        <div className="md:col-span-4 bg-primary rounded-[2.5rem] p-10 flex flex-col justify-end relative overflow-hidden text-white group shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform aspect-square">
              <span className="material-icons-round text-white text-xl">lightbulb</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 font-sans italic tracking-tight">Advies op Maat</h3>
            <p className="text-stone-100 text-sm leading-relaxed font-light opacity-90">
              Heeft u specifieke klachten of sportdoelen? Wij stellen een behandelplan op dat naadloos aansluit bij uw levensstijl.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
