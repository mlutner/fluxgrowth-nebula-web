
import React, { useState, useEffect } from 'react';

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEmojis, setShowEmojis] = useState({ first: false, second: false });
  
  const fullText = "We're your AI transformation partners  We turn complex technology into competitive  business advantages.";
  const emojiPositions = [
    { index: 40, emoji: '🤝', key: 'first' },
    { index: 85, emoji: '💎', key: 'second' }
  ];
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        
        // Show emojis when we reach their positions
        emojiPositions.forEach(({ index, key }) => {
          if (currentIndex === index) {
            setTimeout(() => {
              setShowEmojis(prev => ({ ...prev, [key]: true }));
            }, 200);
          }
        });
      }, 50); // Typewriter speed
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText.length]);

  const renderTextWithEmojis = () => {
    let textParts = [];
    let lastIndex = 0;
    
    emojiPositions.forEach(({ index, emoji, key }, i) => {
      if (displayedText.length > index) {
        // Add text before emoji
        textParts.push(
          <span key={`text-${i}`}>
            {displayedText.slice(lastIndex, index)}
          </span>
        );
        
        // Add emoji with button styling
        textParts.push(
          <span 
            key={`emoji-${i}`}
            className={`inline-flex items-center justify-center w-12 h-12 mx-3 rounded-xl transition-all duration-500 ${
              showEmojis[key] 
                ? 'bg-emerald-800/30 border border-emerald-600/40 scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`}
          >
            <span className="text-2xl">{emoji}</span>
          </span>
        );
        
        lastIndex = index + 1;
      }
    });
    
    // Add remaining text
    if (lastIndex < displayedText.length) {
      textParts.push(
        <span key="text-end">
          {displayedText.slice(lastIndex)}
        </span>
      );
    }
    
    return textParts;
  };

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            {renderTextWithEmojis()}
            <span className="animate-pulse">|</span>
          </h2>
        </div>
      </div>
      
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"></div>
    </section>
  );
};

export default About;
