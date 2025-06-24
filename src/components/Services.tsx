import React, { useEffect } from 'react';
// We can keep the existing hook as it handles the fade-in animation
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Services = () => {
  // Call the hook to enable scroll reveal animations for elements with 'fade-in-section'
  useScrollReveal();

  // useEffect for any component-specific logic that needs to run after mount,
  // similar to the original script's DOMContentLoaded.
  // The useScrollReveal hook already handles the IntersectionObserver logic.
  useEffect(() => {
    // The IntersectionObserver logic from the original HTML is now handled by useScrollReveal.
    // If there were other initializations needed, they would go here.
  }, []);

  return (
    <section id="services" className="max-w-7xl mx-auto py-12 md:py-24">

        {/* Section Heading */}
        <div className="fade-in-section text-center md:text-left">
            <h2 className="font-space-grotesk text-4xl sm:text-5xl md:text-7xl font-bold">
                Our <span className="accent-text">services</span>
            </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Service Card 1: Workflow Automations */}
            <div className="fade-in-section relative noise-bg bg-transparent border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#0c0c0b] transition-colors duration-300">
                <div className="card-graphic-container rounded-xl flex justify-center items-center">
                    <svg className="workflow-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g className="gear-outer">
                            <path d="M50,10 L55,15 L60,10 L65,15 L70,10 L75,15 L80,20 L75,25 L80,30 L75,35 L80,40 L75,45 L80,50 L75,55 L80,60 L75,65 L80,70 L75,75 L70,80 L65,75 L60,80 L55,75 L50,80 L45,75 L40,80 L35,75 L30,70 L35,65 L30,60 L35,55 L30,50 L35,45 L30,40 L35,35 L30,30 L35,25 L30,20 L35,15 L40,10 L45,15 Z"/>
                            <circle cx="50" cy="50" r="12" fill="none"/>
                        </g>
                        <g className="gear-inner">
                            <path d="M50,25 L52,27 L54,25 L56,27 L58,25 L60,27 L62,29 L60,31 L62,33 L60,35 L62,37 L60,39 L62,41 L60,43 L62,45 L60,47 L62,49 L60,51 L62,53 L60,55 L62,57 L60,59 L62,61 L60,63 L62,65 L60,67 L58,69 L56,67 L54,69 L52,67 L50,69 L48,67 L46,69 L44,67 L42,65 L44,63 L42,61 L44,59 L42,57 L44,55 L42,53 L44,51 L42,49 L44,47 L42,45 L44,43 L42,41 L44,39 L42,37 L44,35 L42,33 L44,31 L42,29 L44,27 L46,25 L48,27 Z"/>
                            <circle cx="50" cy="50" r="8" fill="none"/>
                        </g>
                        <circle cx="50" cy="50" r="6" fill="rgba(211, 255, 202, 0.2)" stroke="rgb(211, 255, 202)" strokeWidth="1"/>
                    </svg>
                </div>
                <div>
                    <h3 className="font-space-grotesk text-3xl font-bold">Workflow Automations</h3>
                    <p className="text-gray-400 mt-2">We automate your workflows by connecting your favourite applications, boosting efficiency and enhancing productivity.</p>
                </div>
            </div>

            {/* Service Card 2: Chatbot Development */}
            <div className="fade-in-section relative noise-bg bg-transparent border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#0c0c0b] transition-colors duration-300" style={{transitionDelay: '0.2s'}}>
                <div className="card-graphic-container rounded-xl flex justify-center items-center">
                    <svg className="chatbot-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                       <path d="M20 20 H 80 Q 85 20, 85 25 V 55 Q 85 60, 80 60 H 30 L 20 70 V 25 Q 20 20, 25 20" stroke="rgb(211, 255, 202)" strokeWidth="2" fill="rgba(211, 255, 202, 0.1)" />
                       <circle className="dot1" cx="35" cy="40" r="3" fill="rgb(211, 255, 202)"/>
                       <circle className="dot2" cx="50" cy="40" r="3" fill="rgb(211, 255, 202)"/>
                       <circle className="dot3" cx="65" cy="40" r="3" fill="rgb(211, 255, 202)"/>
                    </svg>
                </div>
                <div>
                    <h3 className="font-space-grotesk text-3xl font-bold">Chatbot Development</h3>
                    <p className="text-gray-400 mt-2">We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.</p>
                </div>
            </div>

            {/* Service Card 3: Business Consulting */}
            <div className="fade-in-section relative noise-bg bg-transparent border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#0c0c0b] transition-colors duration-300" style={{transitionDelay: '0.4s'}}>
                <div className="card-graphic-container rounded-xl flex justify-center items-center">
                    <svg className="consulting-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path className="bubble1" d="M15 30 Q15 20 25 20 H 75 Q 85 20 85 30 V 40 Q 85 50 75 50 H 65 L 55 60 V 50 H 25 Q 15 50 15 40 Z" stroke="#232323" strokeWidth="2" fill="rgba(211, 255, 202, 0.1)"/>
                        <path className="bubble2" d="M85 70 Q85 80 75 80 H 25 Q 15 80 15 70 V 60 Q 15 50 25 50 H 35 L 45 40 V 50 H 75 Q 85 50 85 60 Z" stroke="rgb(211, 255, 202)" strokeWidth="2" fill="rgba(211, 255, 202, 0.1)"/>
                    </svg>
                </div>
                <div>
                    <h3 className="font-space-grotesk text-3xl font-bold">Business Consulting</h3>
                    <p className="text-gray-400 mt-2">Using our expertise, we delve deep into your organisation and consult you on how AI-driven automations could enhance your operations.</p>
                </div>
            </div>

            {/* Service Card 4: Lead Generation */}
            <div className="fade-in-section relative noise-bg bg-transparent border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#0c0c0b] transition-colors duration-300" style={{transitionDelay: '0.6s'}}>
                <div className="card-graphic-container rounded-xl flex justify-center items-center">
                    <svg className="leadgen-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45" stroke="#232323" strokeWidth="1" fill="none"/>
                        <circle cx="50" cy="50" r="30" stroke="#232323" strokeWidth="1" fill="none"/>
                        <circle cx="50" cy="50" r="15" stroke="#232323" strokeWidth="1" fill="none"/>
                        <circle className="target-pulse" cx="50" cy="50" r="8" fill="rgb(211, 255, 202)" />
                        <rect className="scan-line-v" x="49" y="0" width="2" height="100" fill="rgba(211, 255, 202, 0.3)" />
                        <rect className="scan-line-h" x="0" y="49" width="100" height="2" fill="rgba(211, 255, 202, 0.3)" />
                    </svg>
                </div>
                <div>
                    <h3 className="font-space-grotesk text-3xl font-bold">Lead Generation</h3>
                    <p className="text-gray-400 mt-2">We build intelligent systems to identify, qualify, and engage potential customers, filling your pipeline with high-quality leads.</p>
                </div>
            </div>

            {/* Service Card 5: Education */}
            <div className="fade-in-section relative noise-bg bg-transparent border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#0c0c0b] transition-colors duration-300" style={{transitionDelay: '0.8s'}}>
                <div className="card-graphic-container rounded-xl flex justify-center items-center">
                   <svg className="education-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path className="bulb-path" d="M50 15 C35 15 25 28 25 42 C25 52 30 60 35 65 L35 75 L65 75 L65 65 C70 60 75 52 75 42 C75 28 65 15 50 15 Z" stroke="rgb(211, 255, 202)" strokeWidth="1.5" fill="rgba(211, 255, 202, 0.1)"/>
                            <rect className="bulb-path" x="38" y="75" width="24" height="4" fill="rgba(211, 255, 202, 0.3)" stroke="rgb(211, 255, 202)" strokeWidth="1"/>
                            <rect className="bulb-path" x="38" y="80" width="24" height="4" fill="rgba(211, 255, 202, 0.3)" stroke="rgb(211, 255, 202)" strokeWidth="1"/>
                            <rect className="bulb-path" x="40" y="85" width="20" height="4" fill="rgba(211, 255, 202, 0.3)" stroke="rgb(211, 255, 202)" strokeWidth="1"/>
                        </g>
                    </svg>
                </div>
                <div>
                    <h3 className="font-space-grotesk text-3xl font-bold">Education</h3>
                    <p className="text-gray-400 mt-2">We provide workshops and training programs to upskill your team, ensuring they can leverage AI tools effectively and drive innovation internally.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Services;
