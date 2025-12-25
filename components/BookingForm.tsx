
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center animate-in zoom-in duration-500">
        <span className="material-icons-round text-primary text-6xl mb-6">check_circle</span>
        <h3 className="text-2xl font-bold text-white mb-4 font-display">Bedankt voor uw aanvraag!</h3>
        <p className="text-stone-300 mb-8 font-light">Wij nemen binnen 24 uur contact met u op om de afspraak te bevestigen.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary hover:text-white transition-colors underline font-semibold"
        >
          Nieuwe afspraak maken
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
      <h3 className="text-3xl font-bold text-white mb-8 font-display">Maak een afspraak</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-bold ml-2">Naam</label>
            <input
              required
              className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 text-white placeholder-stone-600 focus:ring-2 focus:ring-primary transition-all"
              placeholder="Uw volledige naam"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-stone-500 font-bold ml-2">Telefoon</label>
            <input
              required
              className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 text-white placeholder-stone-600 focus:ring-2 focus:ring-primary transition-all"
              placeholder="06 12345678"
              type="tel"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-stone-500 font-bold ml-2">E-mailadres</label>
          <input
            required
            className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 text-white placeholder-stone-600 focus:ring-2 focus:ring-primary transition-all"
            placeholder="naam@voorbeeld.nl"
            type="email"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-stone-500 font-bold ml-2">Behandeling</label>
          <select
            required
            className="w-full bg-white/10 border-none rounded-2xl px-6 py-4 text-stone-300 focus:ring-2 focus:ring-primary cursor-pointer appearance-none transition-all"
          >
            <option className="text-stone-900" value="">Kies behandeling...</option>
            <option className="text-stone-900" value="medisch-esthetisch">Medisch & Esthetisch</option>
            <option className="text-stone-900" value="medisch-basis">Medisch Basis</option>
            <option className="text-stone-900" value="spa-wellness">Spa & Wellness</option>
          </select>
        </div>

        <button
          disabled={loading}
          className="w-full bg-primary hover:bg-stone-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
          type="submit"
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            <>
              <span>Verstuur Aanvraag</span>
              <span className="material-icons-round text-sm">send</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
