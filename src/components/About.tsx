
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
      className="explainer-section py-24 md:py-32 lg:py-36 relative overflow-hidden fade-in-section"
      style={{
        background: `
          radial-gradient(ellipse 600px 300px at center, rgba(211, 255, 202, 0.10) 0%, transparent 60%),
          radial-gradient(ellipse 800px 400px at center, rgba(211, 255, 202, 0.05) 0%, transparent 70%),
          transparent
        `
      }}
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center px-6 sm:px-8">
          <div className="pb-16 pt-8">
            <p className="explainer-text font-headline text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2] tracking-[-0.02em]">
              {words.map((word, index) => {
                if (word.isEmoji) {
                  return (
                    <span 
                      key={index}
                      className={`${word.class} fade-in-section inline-flex items-center justify-center mx-2 md:mx-3`}
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
