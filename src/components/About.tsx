
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
    
    // Define text segments with their styling
    const textSegments = [
      { start: 0, end: 23, text: "We're your AI ", isGreen: false },
      { start: 23, end: 37, text: "transformation", isGreen: true },
      { start: 37, end: 46, text: " partners", isGreen: false },
      { start: 46, end: 89, text: " We turn complex technology into competitive", isGreen: false },
      { start: 89, end: 108, text: " business advantages", isGreen: true },
      { start: 108, end: 109, text: ".", isGreen: false }
    ];
    
    emojiPositions.forEach(({ index, emoji, key }, i) => {
      if (displayedText.length > index) {
        // Add text before emoji
        const textBeforeEmoji = displayedText.slice(lastIndex, index);
        
        // Apply green styling to specific parts
        const styledText = textSegments.map((segment, segIndex) => {
          if (segment.start >= lastIndex && segment.end <= index) {
            const segmentText = displayedText.slice(Math.max(segment.start, lastIndex), Math.min(segment.end, index));
            if (segmentText) {
              return (
                <span 
                  key={`segment-${i}-${segIndex}`}
                  className={segment.isGreen ? 'text-sage-green' : ''}
                >
                  {segmentText}
                </span>
              );
            }
          }
          return null;
        }).filter(Boolean);
        
        if (styledText.length > 0) {
          textParts.push(...styledText);
        } else {
          textParts.push(
            <span key={`text-${i}`}>
              {textBeforeEmoji}
            </span>
          );
        }
        
        // Add emoji inline with text
        textParts.push(
          <span 
            key={`emoji-${i}`}
            className={`inline-flex items-center justify-center w-16 h-16 mx-2 rounded-2xl transition-all duration-500 ${
              showEmojis[key] 
                ? 'bg-sage-green/20 border border-sage-green/30 scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`}
          >
            <span className="text-4xl">{emoji}</span>
          </span>
        );
        
        lastIndex = index + 1;
      }
    });
    
    // Add remaining text with proper styling
    if (lastIndex < displayedText.length) {
      const remainingText = displayedText.slice(lastIndex);
      const remainingSegments = textSegments.filter(segment => segment.start >= lastIndex);
      
      if (remainingSegments.length > 0) {
        remainingSegments.forEach((segment, segIndex) => {
          const segmentText = displayedText.slice(Math.max(segment.start, lastIndex), Math.min(segment.end, displayedText.length));
          if (segmentText) {
            textParts.push(
              <span 
                key={`remaining-${segIndex}`}
                className={segment.isGreen ? 'text-sage-green' : ''}
              >
                {segmentText}
              </span>
            );
          }
        });
      } else {
        textParts.push(
          <span key="text-end">
            {remainingText}
          </span>
        );
      }
    }
    
    return textParts;
  };

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.85] tracking-tighter">
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
