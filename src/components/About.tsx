
import React from 'react';

const About = () => {
  const words = [
    { text: "We're", isGreen: false, class: "word-1" },
    { text: "your", isGreen: false, class: "word-2" },
    { text: "AI", isGreen: false, class: "word-3" },
    { text: "transformation", isGreen: true, class: "word-4" },
    { text: "partners", isGreen: false, class: "word-5" },
    { text: "🤝", isEmoji: true, class: "animated-emoji" },
    { text: "We", isGreen: false, class: "word-6" },
    { text: "turn", isGreen: false, class: "word-7" },
    { text: "complex", isGreen: false, class: "word-8" },
    { text: "technology", isGreen: false, class: "word-9" },
    { text: "into", isGreen: false, class: "word-10" },
    { text: "competitive", isGreen: false, class: "word-11" },
    { text: "💎", isEmoji: true, class: "sparkle-emoji" },
    { text: "business", isGreen: true, class: "word-12" },
    { text: "advantages.", isGreen: true, class: "word-13" }
  ];

  return (
    <section 
      className="explainer-section py-18 md:py-22 lg:py-26 relative overflow-hidden fade-in-section"
      style={{
        background: `
          radial-gradient(ellipse 1000px 500px at center, rgba(211, 255, 202, 0.08) 0%, rgba(211, 255, 202, 0.04) 40%, rgba(211, 255, 202, 0.02) 60%, transparent 80%),
          radial-gradient(ellipse 1200px 600px at center, rgba(211, 255, 202, 0.03) 0%, rgba(211, 255, 202, 0.015) 50%, transparent 70%),
          linear-gradient(to bottom, rgba(8, 8, 7, 0) 0%, rgba(8, 8, 7, 0.1) 20%, rgba(8, 8, 7, 0.3) 80%, rgba(8, 8, 7, 0.6) 100%),
          transparent
        `
      }}
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center px-6 sm:px-8">
          <div className="pb-13 pt-9">
            <p className="explainer-text font-headline text-3xl md:text-5xl lg:text-6xl font-light text-white leading-[1.2] tracking-[-0.02em]">
              {words.map((word, index) => {
                if (word.isEmoji) {
                  return (
                    <span 
                      key={index}
                      className={`${word.class} fade-in-section inline-flex items-center justify-center mx-2 md:mx-4`}
                      style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
                    >
                      <div className="graphic-bubble">
                        <div className="noise-overlay"></div>
                        <div className="gradient-overlay"></div>
                        <p className="emoji-text">{word.text}</p>
                      </div>
                    </span>
                  );
                }
                
                return (
                  <span
                    key={index}
                    className={`animated-word fade-in-section ${word.class} inline-block mx-1 md:mx-2 ${
                      word.isGreen ? 'text-nebula-lime font-medium' : ''
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
                  >
                    {word.text}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
