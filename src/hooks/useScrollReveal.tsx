
import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Select all elements with fade-in-section class
    const sections = document.querySelectorAll('.fade-in-section');

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // If the element is visible in the viewport
        if (entry.isIntersecting) {
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
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);
};
