import React from 'react';
import { motion } from 'framer-motion';

export const processSteps = [
  {
    number: "01.",
    title: "Assess",
    description: "We dive deep into your current operations to identify AI opportunities that matter. No generic assessments—just strategic insights tailored to unlock your specific competitive advantages.",
    svg: (
      <motion.article
        initial={{ y: 0 }}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
        className="relative w-[340px] min-h-[400px] p-8 rounded-[24px]
                   bg-[#0d0f0f]/80 border border-transparent group
                   shadow-[0_3px_8px_rgba(0,0,0,.45)]
                   before:absolute before:inset-0 before:rounded-[24px]
                   before:border before:border-transparent"
      >
        {/* rotating conic-gradient rim */}
        <span 
          className="absolute inset-0 rounded-[24px] pointer-events-none
                     [background:conic-gradient(from_var(--angle),#9cff7f_0%,#62ffc0_40%,#00ffa3_70%,#9cff7f_100%)]
                     [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                     [mask-composite:xor] p-[2px]"
          style={{ '--angle': '0deg' } as React.CSSProperties}
        ></span>

        {/* radar grid */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 rounded-[24px] overflow-hidden opacity-[0.05]"
        >
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            {/* Radar grid lines */}
            <g stroke="rgba(211, 255, 202, 0.3)" strokeWidth="1">
              <circle cx="200" cy="200" r="80" fill="none" strokeDasharray="4,4"/>
              <circle cx="200" cy="200" r="120" fill="none" strokeDasharray="6,6"/>
              <circle cx="200" cy="200" r="160" fill="none" strokeDasharray="8,8"/>
              <line x1="200" y1="0" x2="200" y2="400"/>
              <line x1="0" y1="200" x2="400" y2="200"/>
              <line x1="58" y1="58" x2="342" y2="342"/>
              <line x1="342" y1="58" x2="58" y2="342"/>
            </g>
          </svg>
        </motion.div>

        {/* icon */}
        <motion.svg 
          className="w-16 h-16 mx-auto mt-4 text-[#94ff74]"
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <circle cx="11" cy="11" r="8"/>
          <path d="21 21l-4.35-4.35"/>
        </motion.svg>

        {/* floating sparks */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-[#94ff74] rounded-full"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 8)}%`,
              }}
              animate={{
                y: [-2, -8, -2],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2 + (i * 0.3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <h3 className="mt-6 text-[24px] font-semibold text-[#94ff74]">01. Assess</h3>
        <p className="mt-2 text-[14px] text-[#d9d9d9] max-w-[240px]">
          Deep-dive AI audit to surface hidden leverage across ops, data, and talent.
        </p>
      </motion.article>
    )
  },
  {
    number: "02.",
    title: "Architect", 
    description: "Your custom AI roadmap takes shape. We design solutions that integrate seamlessly with your existing workflows while positioning you for exponential growth ahead.",
    // Replacing SVG with code snippet animation structure
    svg: (
      <div className="architect-card-graphic code-container rounded-xl"> {/* Added scoping class and structure from snippet */}
          <div className="collaborator-cursor">Live Build</div>
          <div className="code-snippet">
              <pre dangerouslySetInnerHTML={{ __html: `
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
`}} />
          </div>
      </div>
    )
  },
  {
    number: "03.",
    title: "Activate",
    description: "Implementation begins with precision and pace. Our team deploys your AI systems—from intelligent chatbots to automated workflows—delivering measurable results within 30 days.",
    svg: (
      <div className="activate-container">
        <svg viewBox="0 0 200 100" className="activate-arrows">
          <defs>
            <linearGradient id="activateGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(211, 255, 202, 0.3)" />
              <stop offset="100%" stopColor="rgba(211, 255, 202, 0.8)" />
            </linearGradient>
          </defs>
          <g className="arrow-group">
            <path d="M20 30 L60 30 L55 25 M60 30 L55 35" stroke="url(#activateGradient)" strokeWidth="2" fill="none" className="arrow-1" />
            <path d="M20 50 L60 50 L55 45 M60 50 L55 55" stroke="url(#activateGradient)" strokeWidth="2" fill="none" className="arrow-2" />
            <path d="M20 70 L60 70 L55 65 M60 70 L55 75" stroke="url(#activateGradient)" strokeWidth="2" fill="none" className="arrow-3" />
          </g>
        </svg>
      </div>
    )
  },
  {
    number: "04.",
    title: "Test & optimise",
    description: "You either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
    svg: (
      <div className="optimize-progress-container" role="img" aria-label="Test and optimize progress visualization">
        <div className="optimize-progress-bars">
          {/* Speed Progress Bar */}
          <div className="optimize-progress-item">
            <span className="optimize-progress-label">Speed</span>
            <div className="optimize-progress-track">
              <div className="optimize-progress-fill optimize-progress-fill-speed"></div>
            </div>
          </div>
          
          {/* Security Progress Bar */}
          <div className="optimize-progress-item">
            <span className="optimize-progress-label">Security</span>
            <div className="optimize-progress-track">
              <div className="optimize-progress-fill optimize-progress-fill-security"></div>
            </div>
          </div>
          
          {/* Accuracy Progress Bar */}
          <div className="optimize-progress-item">
            <span className="optimize-progress-label">Accuracy</span>
            <div className="optimize-progress-track">
              <div className="optimize-progress-fill optimize-progress-fill-accuracy"></div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    number: "05.",
    title: "Accelerate",
    description: "Scale without limits. Your optimized AI systems become the foundation for exponential growth, enabling you to capture opportunities faster than ever before.",
    svg: (
      <div className="accelerate-container">
        <svg className="accelerate-svg" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Enhanced Gradients for Depth */}
            <radialGradient id="accelerate-rocket-gradient" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="rgba(211, 255, 202, 1)"/>
              <stop offset="50%" stopColor="rgba(16, 43, 31, 0.9)"/>
              <stop offset="100%" stopColor="rgba(211, 255, 202, 0.3)"/>
            </radialGradient>
            
            <radialGradient id="accelerate-exhaust-gradient" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="rgba(255, 100, 100, 0.9)"/>
              <stop offset="30%" stopColor="rgba(255, 200, 100, 0.8)"/>
              <stop offset="70%" stopColor="rgba(211, 255, 202, 0.6)"/>
              <stop offset="100%" stopColor="rgba(211, 255, 202, 0)"/>
            </radialGradient>
            
            <radialGradient id="accelerate-expansion-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(211, 255, 202, 0)"/>
              <stop offset="70%" stopColor="rgba(211, 255, 202, 0.3)"/>
              <stop offset="100%" stopColor="rgba(211, 255, 202, 0.1)"/>
            </radialGradient>

            {/* Glow Effects */}
            <filter id="accelerate-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="accelerate-strong-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background Expansion Rings */}
          <g className="accelerate-expansion-rings" opacity="0.4">
            <circle cx="140" cy="140" r="60" fill="none" stroke="rgba(211, 255, 202, 0.3)" strokeWidth="1" strokeDasharray="8,4">
              <animate attributeName="r" values="60;80;60" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="140" cy="140" r="90" fill="none" stroke="rgba(211, 255, 202, 0.2)" strokeWidth="1" strokeDasharray="12,6">
              <animate attributeName="r" values="90;110;90" dur="5s" repeatCount="indefinite" begin="1s"/>
              <animate attributeName="opacity" values="0.3;0.05;0.3" dur="5s" repeatCount="indefinite" begin="1s"/>
            </circle>
            <circle cx="140" cy="140" r="120" fill="none" stroke="rgba(211, 255, 202, 0.15)" strokeWidth="1" strokeDasharray="16,8">
              <animate attributeName="r" values="120;140;120" dur="6s" repeatCount="indefinite" begin="2s"/>
              <animate attributeName="opacity" values="0.2;0.02;0.2" dur="6s" repeatCount="indefinite" begin="2s"/>
            </circle>
          </g>

          {/* Rocket Body */}
          <g className="accelerate-rocket" transform="translate(140,140)">
            {/* Exhaust Flames */}
            <g className="accelerate-exhaust">
              <ellipse cx="0" cy="25" rx="8" ry="15" fill="url(#accelerate-exhaust-gradient)" opacity="0.8">
                <animate attributeName="ry" values="15;25;15" dur="0.3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.8;0.4;0.8" dur="0.3s" repeatCount="indefinite"/>
              </ellipse>
              <ellipse cx="-6" cy="22" rx="4" ry="10" fill="rgba(255, 150, 100, 0.6)">
                <animate attributeName="ry" values="10;18;10" dur="0.4s" repeatCount="indefinite" begin="0.1s"/>
              </ellipse>
              <ellipse cx="6" cy="22" rx="4" ry="10" fill="rgba(255, 150, 100, 0.6)">
                <animate attributeName="ry" values="10;18;10" dur="0.4s" repeatCount="indefinite" begin="0.2s"/>
              </ellipse>
            </g>

            {/* Rocket Main Body */}
            <rect x="-8" y="-20" width="16" height="30" rx="2" fill="url(#accelerate-rocket-gradient)" stroke="rgba(211, 255, 202, 0.8)" strokeWidth="1" filter="url(#accelerate-glow)"/>
            
            {/* Rocket Nose Cone */}
            <polygon points="0,-25 -6,-20 6,-20" fill="rgba(211, 255, 202, 0.9)" stroke="rgba(211, 255, 202, 1)" strokeWidth="1"/>
            
            {/* Rocket Wings */}
            <polygon points="-8,5 -12,15 -8,10" fill="rgba(16, 43, 31, 0.8)" stroke="rgba(211, 255, 202, 0.6)" strokeWidth="1"/>
            <polygon points="8,5 12,15 8,10" fill="rgba(16, 43, 31, 0.8)" stroke="rgba(211, 255, 202, 0.6)" strokeWidth="1"/>
            
            {/* Rocket Details */}
            <circle cx="0" cy="-10" r="2" fill="rgba(211, 255, 202, 0.8)"/>
            <rect x="-6" y="-5" width="12" height="1" fill="rgba(211, 255, 202, 0.6)"/>
            <rect x="-6" y="0" width="12" height="1" fill="rgba(211, 255, 202, 0.6)"/>
          </g>

          {/* Speed Lines */}
          <g className="accelerate-speed-lines" opacity="0.6">
            <line x1="50" y1="130" x2="90" y2="130" stroke="rgba(211, 255, 202, 0.4)" strokeWidth="2" strokeDasharray="4,4">
              <animate attributeName="x1" values="50;70;50" dur="1s" repeatCount="indefinite"/>
              <animate attributeName="x2" values="90;110;90" dur="1s" repeatCount="indefinite"/>
            </line>
            <line x1="50" y1="140" x2="90" y2="140" stroke="rgba(211, 255, 202, 0.5)" strokeWidth="2" strokeDasharray="6,4">
              <animate attributeName="x1" values="50;70;50" dur="1.2s" repeatCount="indefinite" begin="0.2s"/>
              <animate attributeName="x2" values="90;110;90" dur="1.2s" repeatCount="indefinite" begin="0.2s"/>
            </line>
            <line x1="50" y1="150" x2="90" y2="150" stroke="rgba(211, 255, 202, 0.4)" strokeWidth="2" strokeDasharray="4,4">
              <animate attributeName="x1" values="50;70;50" dur="1.1s" repeatCount="indefinite" begin="0.4s"/>
              <animate attributeName="x2" values="90;110;90" dur="1.1s" repeatCount="indefinite" begin="0.4s"/>
            </line>
            
            <line x1="190" y1="130" x2="230" y2="130" stroke="rgba(211, 255, 202, 0.4)" strokeWidth="2" strokeDasharray="4,4">
              <animate attributeName="x1" values="190;210;190" dur="1s" repeatCount="indefinite" begin="0.1s"/>
              <animate attributeName="x2" values="230;250;230" dur="1s" repeatCount="indefinite" begin="0.1s"/>
            </line>
            <line x1="190" y1="140" x2="230" y2="140" stroke="rgba(211, 255, 202, 0.5)" strokeWidth="2" strokeDasharray="6,4">
              <animate attributeName="x1" values="190;210;190" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
              <animate attributeName="x2" values="230;250;230" dur="1.2s" repeatCount="indefinite" begin="0.3s"/>
            </line>
            <line x1="190" y1="150" x2="230" y2="150" stroke="rgba(211, 255, 202, 0.4)" strokeWidth="2" strokeDasharray="4,4">
              <animate attributeName="x1" values="190;210;190" dur="1.1s" repeatCount="indefinite" begin="0.5s"/>
              <animate attributeName="x2" values="230;250;230" dur="1.1s" repeatCount="indefinite" begin="0.5s"/>
            </line>
          </g>

          {/* Trajectory Path */}
          <path d="M 140 140 Q 180 100 220 80 Q 240 70 260 60" stroke="rgba(211, 255, 202, 0.3)" strokeWidth="2" fill="none" strokeDasharray="8,8" opacity="0.5">
            <animate attributeName="stroke-dashoffset" values="0;16;0" dur="2s" repeatCount="indefinite"/>
          </path>

          {/* Launch Platform */}
          <g className="accelerate-platform" transform="translate(140,160)">
            <rect x="-20" y="0" width="40" height="4" fill="rgba(16, 43, 31, 0.8)" stroke="rgba(211, 255, 202, 0.4)" strokeWidth="1"/>
            <rect x="-15" y="4" width="30" height="2" fill="rgba(16, 43, 31, 0.6)"/>
          </g>

        </svg>
      </div>
    )
  }
];
