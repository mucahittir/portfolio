import React from 'react';
import { MotionConfig } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-page text-ink">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <PortfolioContent />
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
