
import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    console.log('useScrollReveal hook initialized');
    
    // Select all elements with fade-in-section class
    const sections = document.querySelectorAll('.fade-in-section');
    console.log('Found sections:', sections.length);

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log('Element intersecting:', entry.target, 'isIntersecting:', entry.isIntersecting);
        // If the element is visible in the viewport
        if (entry.isIntersecting) {
          console.log('Adding is-visible class to:', entry.target);
          // Add the 'is-visible' class to trigger the animation
          entry.target.classList.add('is-visible');
          // Stop observing the element once it's visible
          observer.unobserve(entry.target);
        }
      });
    }, {
      // Animation triggers when 15% of the element is visible
      threshold: 0.15,
      // Start animation slightly before element enters viewport
      rootMargin: '0px 0px -50px 0px'
    });

    // Tell the observer to watch each section
    sections.forEach(section => {
      console.log('Observing section:', section);
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);
};
