import React, { useState,useEffect } from 'react';

export const FadeIn = ({ children, duration = 2 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });
    observer.observe(document.querySelector('.fade-in-only'));
  }, []);

  return (
    <div className={`fade-in-only ${isVisible ? 'visible' : ''}`} style={{transition: `opacity ${duration}s`}}>
      {children}
    </div>
  );
};
