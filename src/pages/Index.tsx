
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Results from '@/components/Results';
import Work from '@/components/Work';
import ClientCarousel from '@/components/ClientCarousel';
import GetInTouch from '@/components/GetInTouch';
import FAQ from '@/components/FAQ'; // Added import
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollAnimation();
  useScrollReveal();

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
        <Work />
        <ClientCarousel />
        <GetInTouch />
        <FAQ /> {/* Added component */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
