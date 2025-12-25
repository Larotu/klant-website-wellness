
import React from 'react';
import BookingForm from './BookingForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-24 px-4 md:px-8 mt-12 rounded-t-[4rem] relative overflow-hidden" id="contact">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="material-icons-round text-primary text-4xl">spa</span>
            <span className="text-4xl font-extrabold text-white font-sans tracking-tight">
              Voet<span className="font-display italic font-medium text-primary">zorg.</span>
            </span>
          </div>
          
          <p className="max-w-md text-stone-400 mb-12 text-lg leading-relaxed font-medium">
            Uw professionele partner voor medische en cosmetische voetverzorging in Amsterdam. Wij combineren jarenlange ervaring met een passie voor welzijn.
          </p>

          <div className="space-y-8 font-medium">
            <div className="flex items-start gap-5">
              <div className="bg-white/5 p-3 rounded-2xl text-primary">
                <span className="material-icons-round">location_on</span>
              </div>
              <div>
                <span className="block text-white font-black mb-1">Bezoek ons</span>
                <span className="text-stone-400">Kerkstraat 12, 1010 AB Amsterdam</span>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-white/5 p-3 rounded-2xl text-primary">
                <span className="material-icons-round">schedule</span>
              </div>
              <div>
                <span className="block text-white font-black mb-1">Openingstijden</span>
                <span className="text-stone-400">Maandag - Vrijdag: 09:00 - 18:00</span>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-white/5 p-3 rounded-2xl text-primary">
                <span className="material-icons-round">phone</span>
              </div>
              <div>
                <span className="block text-white font-black mb-1">Direct Contact</span>
                <span className="text-stone-400">+31 (0)6 1234 5678</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex gap-4">
            {['facebook', 'instagram', 'linkedin'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span className="material-icons-round text-xl">share</span>
              </a>
            ))}
          </div>
        </div>

        <BookingForm />
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 font-medium">
        <p className="">© {new Date().getFullYear()} Voetzorg Praktijk. Alle rechten voorbehouden.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Algemene Voorwaarden</a>
          <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
