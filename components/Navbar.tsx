
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-0">
      <div className="max-w-5xl mx-auto glass-nav rounded-full shadow-lg border border-stone-100/50 dark:border-stone-800/50 px-6 py-3 flex justify-between items-center transition-all duration-500">
        <div className="flex items-center gap-2">
          <span className="material-icons-round text-primary text-3xl">spa</span>
          <span className="text-xl md:text-2xl font-semibold tracking-tight text-stone-800 dark:text-stone-100 font-sans">
            Voet<span className="font-display italic font-medium text-primary">zorg.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600 dark:text-stone-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-icons-round text-stone-600 dark:text-stone-400">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <a
            href="#contact"
            className="bg-primary hover:bg-accent-brown text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-primary/20 transition-all active:scale-95 whitespace-nowrap"
          >
            Afspraak Maken
          </a>

          <button 
            className="md:hidden p-2 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-icons-round text-stone-800 dark:text-stone-100">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-2xl border border-stone-100 dark:border-stone-800 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-stone-800 dark:text-stone-100 py-2 border-b border-stone-50 dark:border-stone-800"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
