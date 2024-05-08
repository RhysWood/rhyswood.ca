import React, { useState, useEffect } from 'react';
import './fade.scss'

export const FadeLeft = ({ children, duration = 2 }) => {
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
    observer.observe(document.querySelector('.fade-in-element'));
  }, []);

  return (
    <div className={`fade-in-element ${isVisible ? 'visible' : ''}`} style={{transition: `all ${duration}s`}}>
      {children}
    </div>
  );
};
