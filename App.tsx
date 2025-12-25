
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark transition-colors duration-300 overflow-x-hidden">
      <Navbar onToggleDarkMode={() => setDarkMode(!darkMode)} isDarkMode={darkMode} />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
      </main>

      <Footer />

      {/* Background Decorative Blurs */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
    </div>
  );
};

export default App;
