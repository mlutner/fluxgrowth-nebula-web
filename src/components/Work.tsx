import React, { useState, useEffect } from 'react';

interface ProjectData {
  [key: string]: {
    image?: string;
    svg?: React.ReactNode;
  };
}

const Work: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<string>('skillt');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    // Fade-in animation observer
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projectContent: ProjectData = {
    skillt: {
      image: '/lovable-uploads/bc1e670f-0fd4-4dde-bc6c-10a0ffa0e3d6.png'
    },
    brainbites: {
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-3/5">
          <rect x="15" y="25" width="70" height="50" rx="5" stroke="rgb(211, 255, 202)" strokeWidth="2" fill="rgba(211, 255, 202, 0.1)"/>
          <path d="M30 40 H 70 M30 50 H 50 M30 60 H 70" stroke="rgb(211, 255, 202)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    sparky: {
      svg: (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/5 h-3/5">
          <path d="M30 20 L 70 50 L 30 80" stroke="rgb(211, 255, 202)" strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
          <line x1="40" y1="90" x2="60" y2="90" stroke="rgb(211, 255, 202)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    }
  };

  const handleProjectHover = (projectKey: string) => {
    if (projectKey !== currentProject) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentProject(projectKey);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const ArrowIcon = () => (
    <svg className="w-10 h-10 text-[rgb(211,255,202)] flex-shrink-0 transition-transform duration-300 ease-in-out group-hover:rotate-45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .fade-in-section.is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .font-space-grotesk {
            font-family: 'Space Grotesk', sans-serif;
          }
        `
      }} />
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 ease-out">

      <h2 className="font-space-grotesk text-5xl lg:text-8xl font-normal tracking-tight mb-12 lg:mb-20">
        Our <span className="text-[rgb(211,255,202)]">Work</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Project List */}
        <div className="flex flex-col">
          {/* Skillt Project */}
          <a 
            href="#" 
            className="flex justify-between items-center py-6 border-t border-b border-[#232323] cursor-pointer text-white no-underline group relative"
            onMouseEnter={() => handleProjectHover('skillt')}
          >
            {/* Animated green line that fills on hover */}
            <div className="absolute bottom-0 left-0 h-px bg-[rgb(211,255,202)] w-0 group-hover:w-full transition-all duration-700 ease-out z-10"></div>
            <div className="project-details">
              <p className="m-0 text-[#a0a0a0] text-sm">2024</p>
              <h3 className="mt-1 mb-0 font-space-grotesk text-3xl font-medium transition-colors duration-300 group-hover:text-[rgb(211,255,202)]">
                Skillt - AI Reskilling App
              </h3>
              <p className="m-0 text-[#a0a0a0] text-sm mt-1">
                AI-powered platform that analyzes career goals and creates personalized learning paths to close skill gaps.
              </p>
            </div>
            <ArrowIcon />
          </a>

          {/* Brain Bites Project */}
          <a 
            href="#" 
            className="flex justify-between items-center py-6 border-b border-[#232323] cursor-pointer text-white no-underline group relative"
            onMouseEnter={() => handleProjectHover('brainbites')}
          >
            {/* Animated green line that fills on hover */}
            <div className="absolute bottom-0 left-0 h-px bg-[rgb(211,255,202)] w-0 group-hover:w-full transition-all duration-700 ease-out z-10"></div>
            <div className="project-details">
              <p className="m-0 text-[#a0a0a0] text-sm">2023</p>
              <h3 className="mt-1 mb-0 font-space-grotesk text-3xl font-medium transition-colors duration-300 group-hover:text-[rgb(211,255,202)]">
                Brain Bites - Quiz Generator
              </h3>
              <p className="m-0 text-[#a0a0a0] text-sm mt-1">
                Turns any text, document, or URL into interactive flashcards and quizzes in seconds for smarter, faster learning.
              </p>
            </div>
            <ArrowIcon />
          </a>

          {/* Sparky Project */}
          <a 
            href="#" 
            className="flex justify-between items-center py-6 border-b border-[#232323] cursor-pointer text-white no-underline group relative"
            onMouseEnter={() => handleProjectHover('sparky')}
          >
            {/* Animated green line that fills on hover */}
            <div className="absolute bottom-0 left-0 h-px bg-[rgb(211,255,202)] w-0 group-hover:w-full transition-all duration-700 ease-out z-10"></div>
            <div className="project-details">
              <p className="m-0 text-[#a0a0a0] text-sm">2023</p>
              <h3 className="mt-1 mb-0 font-space-grotesk text-3xl font-medium transition-colors duration-300 group-hover:text-[rgb(211,255,202)]">
                Sparky - Code Chatbot
              </h3>
              <p className="m-0 text-[#a0a0a0] text-sm mt-1">
                An intelligent chatbot providing instant, accurate answers to complex electrical code and compliance questions.
              </p>
            </div>
            <ArrowIcon />
          </a>
        </div>

        {/* Right Column: Laptop Mockup */}
        <div className="border border-[#232323] rounded-2xl bg-[#0F0F0F] p-6 aspect-[4/3] relative">
          <div className={`bg-[#080807] w-full h-full rounded-lg overflow-hidden flex justify-center items-center transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {projectContent[currentProject]?.image && (
              <img 
                src={projectContent[currentProject].image} 
                alt={`${currentProject} screenshot`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log(`Failed to load image: ${projectContent[currentProject].image}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
            {projectContent[currentProject]?.svg && projectContent[currentProject].svg}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Work; 