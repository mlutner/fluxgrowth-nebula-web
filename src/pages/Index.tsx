
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Results from '@/components/Results';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Results />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
