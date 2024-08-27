'use client';
import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const FloatingLetters = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const elements = lettersRef.current;

    // Create GSAP animations with ScrollTrigger
    gsap.fromTo(
      elements,
      { y: 0, rotation: 0 },
      {
        y: 30, // Move letters up
        rotation: 10, // Rotate letters
        stagger: 0.1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".text-container",
          start: "top center-=100", // Start animation 100px before the trigger reaches the center of the viewport
          end: "bottom top+=100", // End animation 100px after the trigger reaches the top of the viewport
          scrub: true, // Smooth animation based on scroll
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis autoRaf={false}>
      <div className="text-container h-auto flex justify-center items-center overflow-hidden">
        <div className="text-center text-4xl sm:text-6xl font-bold flex flex-wrap justify-center space-x-1 sm:space-x-2 my-12">
          {['L', 'I', 'G', 'H', 'T', 'H', 'O', 'U', 'S', 'E', ' ', 'L', 'A', 'B', 'S'].map((letter, index) => (
            <span
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
              className={getColor(index)}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </ReactLenis>
  );
};

// Helper function to assign bright colors to each letter
function getColor(index) {
  const colors = ['text-red-500', 'text-blue-500', 'text-yellow-500', 'text-green-500', 'text-orange-500', 'text-purple-500'];
  return colors[index % colors.length];
}

export default FloatingLetters;
