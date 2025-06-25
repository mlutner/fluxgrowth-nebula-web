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
            <div className="service-card fade-in-section relative noise-bg bg-transparent border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#0c0c0b] transition-colors duration-300">
                {/* The existing card-graphic-container will be replaced by the new structure's graphic-container */}
                <div className="graphic-container rounded-xl workflow-automation-card"> {/* Added scoping class */}
                    <div className="workflow-steps">
                        {/* Step 1: Google Drive */}
                        <div className="workflow-step">
                            <div className="step-icon">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(211, 255, 202)"><title>Google Drive</title><path d="M19.52 14.34L14.48 5.66H9.52l-5.04 8.68L2 13.5l5.04-8.68a2 2 0 0 1 1.73-1h9.46a2 2 0 0 1 1.73 1L22 13.5l-2.48.84zM8.13 15l-1.73 1 5.6 9.5h2l5.6-9.5-1.73-1-3.87 6.5-3.87-6.5z"/></svg>
                            </div>
                            <div className="step-text">
                                <p className="app-name">Google Drive</p>
                                <p className="action-name">New file uploaded to folder</p>
                            </div>
                            <div className="step-handle">
                                <div className="dot"></div><div className="dot"></div>
                                <div className="dot"></div><div className="dot"></div>
                                <div className="dot"></div><div className="dot"></div>
                            </div>
                        </div>

                        <div className="step-connector">
                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1V15M8 15L12 11M8 15L4 11" stroke="rgb(211, 255, 202)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/></svg>
                        </div>

                        {/* Step 2: Airtable */}
                        <div className="workflow-step">
                            <div className="step-icon">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(211, 255, 202)"><title>Airtable</title><path d="M21.73 13.28l-5.5-9.4A1.67 1.67 0 0014.85 3H9.14a1.67 1.67 0 00-1.42.85L2.24 13.3a1.69 1.69 0 00.03 1.76l5.52 9.42A1.67 1.67 0 009.18 25h5.64a1.67 1.67 0 001.44-.88l5.49-9.39a1.69 1.69 0 00-.02-1.75zm-6.27-7.7L18.4 12h-4.32L12 7.71zM11.23 23l-3.05-5.2H12zm.77-6.2h-3L12 9.53zm3.77 6.2H12V13h4.98z"/></svg>
                            </div>
                            <div className="step-text">
                                <p className="app-name">Airtable</p>
                                <p className="action-name">Add data to Airtable</p>
                            </div>
                            <div className="step-handle">
                                <div className="dot"></div><div className="dot"></div>
                                <div className="dot"></div><div className="dot"></div>
                                <div className="dot"></div><div className="dot"></div>
                            </div>
                        </div>

                        <div className="step-connector">
                             <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1V15M8 15L12 11M8 15L4 11" stroke="rgb(211, 255, 202)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/></svg>
                        </div>

                        {/* Step 3: OpenAI */}
                        <div className="workflow-step">
                            <div className="step-icon">
                               <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(211, 255, 202)"><title>OpenAI</title><path d="M20.84 3.12c.3.18.5.43.6.72.08.24.12.5.12.78s-.04.54-.12.78a2.3 2.3 0 01-.6.72c-.17.15-.36.27-.57.36a2.1 2.1 0 01-.71.18c-.24.02-.48.02-.72 0-.25-.03-.48-.09-.7-.18a2.38 2.38 0 01-.58-.36 2.07 2.07 0 01-.6-.72c-.1-.24-.13-.5-.13-.78s.03-.54.13-.78c.09-.29.28-.54.58-.72.18-.15.37-.27.59-.36.2-.1.46-.15.7-.18.24-.03.48-.03.72 0zM12.98 9.5c.3.18.5.43.6.72.08.24.12.5.12.78s-.04.54-.12.78a2.3 2.3 0 01-.6.72c-.17.15-.36.27-.57.36-.25.1-.5.15-.71.18-.24.02-.48.02-.72 0-.25-.03-.48-.09-.7-.18a2.38 2.38 0 01-.58-.36 2.07 2.07 0 01-.6-.72c-.1-.24-.13-.5-.13-.78s.03-.54.13-.78c.09-.29.28-.54.58-.72a2.08 2.08 0 011.3-.54c.24-.03.48-.03.72 0zm-9.82 0c.3.18.5.43.6.72.08.24.12.5.12.78s-.04.54-.12.78a2.3 2.3 0 01-.6.72c-.17.15-.36.27-.57.36a2.1 2.1 0 01-.71.18c-.24.02-.48.02-.72 0-.25-.03-.48-.09-.7-.18a2.38 2.38 0 01-.58-.36 2.07 2.07 0 01-.6-.72c-.1-.24-.13-.5-.13-.78s.03-.54.13-.78c.09-.29.28-.54.58-.72a2.08 2.08 0 011.3-.54c.24-.03.48-.03.72 0zm9.82 6.38c.3.18.5.43.6.72.08.24.12.5.12.78s-.04.54-.12.78a2.3 2.3 0 01-.6.72c-.17.15-.36.27-.57.36a2.1 2.1 0 01-.71.18c-.24.02-.48.02-.72 0-.25-.03-.48-.09-.7-.18a2.38 2.38 0 01-.58-.36 2.07 2.07 0 01-.6-.72c-.1-.24-.13-.5-.13-.78s.03-.54.13-.78a2.3 2.3 0 01.6-.72c.17-.15.36-.27.57-.36.25-.1.5-.15.71-.18.24-.02.48-.02.72 0z"/></svg>
                            </div>
                            <div className="step-text">
                                <p className="app-name">OpenAI</p>
                                <p className="action-name">Write personalised message</p>
                            </div>
                            <div className="step-handle">
                                <div className="dot"></div><div className="dot"></div>
                                <div className="dot"></div><div className="dot"></div>
                                <div className="dot"></div><div className="dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-space-grotesk text-3xl font-bold">Workflow Automations</h3>
                    <p className="text-gray-400 mt-2">We automate your workflows by connecting your favourite applications, boosting efficiency and enhancing productivity.</p>
                </div>
            </div>

            {/* Service Card 2: Chatbot Development */}
            <div className="fade-in-section relative noise-bg bg-transparent border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#0c0c0b] transition-colors duration-300" style={{transitionDelay: '0.2s'}}>
                {/* Adapting card-graphic-container to be the code-container for this card */}
                <div className="card-graphic-container code-container rounded-xl chatbot-dev-card"> {/* Added scoping class */}
                    <div className="collaborator-cursor">Live Build</div>
                    <div className="code-snippet">
                        <pre>
{`\
<span class="syntax-keyword">import</span> { FeatureSection } <span class="syntax-keyword">from</span> <span class="syntax-component">'nebula-template'</span>;

<span class="syntax-keyword">const</span> App = () => {
    <span class="syntax-keyword">return</span> (
        <span class="syntax-tag">&lt;div&gt;</span>
            <span class="syntax-component">&lt;Header /&gt;</span>
            <span class="syntax-component">&lt;HeroSection /&gt;</span>
            <span class="syntax-component">&lt;FeatureSection /&gt;</span>
            <span class="syntax-component">&lt;Footer /&gt;</span>
        <span class="syntax-tag">&lt;/div&gt;</span>
    );
}

<span class="syntax-keyword">export default</span> App;

<span class="syntax-comment">// Deployment in progress...</span>
<span class="syntax-comment">// CI/CD pipeline running...</span>
<span class="syntax-comment">// ✓ Linting complete.</span>
<span class="syntax-comment">// ✓ Tests passed.</span>
<span class="syntax-comment">// ✓ Building production modules...</span>
<span class="syntax-comment">// Build successful.</span>
<span class="syntax-comment">// Deploying to production environment...</span>
`}
                        </pre>
                    </div>
                </div>
                <div>
                    <h3 className="font-space-grotesk text-3xl font-bold">Chatbot Development</h3>
                    <p className="text-gray-400 mt-2">We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.</p>
                </div>
            </div>

            {/* Service Card 3: Business Consulting */}
            <div className="fade-in-section relative noise-bg bg-transparent border border-gray-800 rounded-2xl p-8 flex flex-col gap-6 hover:bg-[#0c0c0b] transition-colors duration-300" style={{transitionDelay: '0.4s'}}>
                {/* Replacing content of card-graphic-container with the new SVG graph */}
                <div className="card-graphic-container rounded-xl business-consulting-card"> {/* Added scoping class */}
                    <svg viewBox="0 0 355 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="fill-grad" x1="0" y1="0" x2="0" y2="150" gradientUnits="userSpaceOnUse">
                                <stop stopColor="rgb(211, 255, 202)" stopOpacity="0.3"/>
                                <stop offset="1" stopColor="rgb(211, 255, 202)" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                        <path d="M0 103 C 40 120, 80 40, 120 70 C 160 100, 200 150, 240 120 C 280 90, 320 140, 355 130" stroke="#232323" strokeWidth="2"/>
                        <path d="M0 103 C 40 120, 80 40, 120 70 C 160 100, 200 150, 240 120 C 280 90, 320 140, 355 130 V 235 H 0 Z" fill="rgba(255,255,255,0.02)"/>
                        <path d="M0 120 C 50 100, 90 180, 140 160 C 190 140, 210 80, 260 100 C 310 120, 340 90, 355 80" stroke="#146144" strokeOpacity="0.5" strokeWidth="2"/>
                        <g className="graph-foreground-group">
                            <path d="M0 150 C 40 120, 80 80, 118 80 C 156 80, 180 30, 220 50 C 260 70, 280 110, 355 90" stroke="rgb(211, 255, 202)" strokeWidth="2"/>
                            <path d="M0 150 C 40 120, 80 80, 118 80 C 156 80, 180 30, 220 50 C 260 70, 280 110, 355 90 V 235 H 0 Z" fill="url(#fill-grad)"/>
                        </g>
                        <g className="percent-tag">
                            <rect x="170" y="50" width="55" height="28" rx="14" fill="#102b1f" stroke="rgba(211, 255, 202, 0.5)" strokeWidth="1"/>
                            <text className="text-start" x="197.5" y="69" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="rgb(211, 255, 202)" textAnchor="middle">+15%</text>
                            <text className="text-end" x="197.5" y="69" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="rgb(211, 255, 202)" textAnchor="middle">+40%</text>
                        </g>
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
