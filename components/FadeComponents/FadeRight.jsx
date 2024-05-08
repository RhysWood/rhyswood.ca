import React, { useState, useEffect } from 'react';

const FadeRight = ({ children, duration = 2 }) => {
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
    observer.observe(document.querySelector('.fade-in-right-element'));
  }, []);

  return (
    <div className={`fade-in-right-element ${isVisible ? 'visible' : ''}`} style={{transition: `all ${duration}s`}}>
      {children}
    </div>
  );
};

export default FadeRight;
