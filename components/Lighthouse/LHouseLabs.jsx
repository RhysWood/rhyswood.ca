'use client';
import { useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Lhouse.scss';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const FloatingLetters = () => {
  const lettersRef = useRef([]);
  const lenis = useLenis();

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
          start: "top center-=250",
          end: "bottom top+=250", 
          scrub: true,
          invalidateOnRefresh: true, // Make sure ScrollTrigger updates on refresh
        },
      }
    );

    // Sync ScrollTrigger with Lenis on scroll
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }

    return () => {
      if (lenis) {
        lenis.off('scroll', ScrollTrigger.update);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [lenis]);

  return (
    <div className="text-container h-auto flex justify-center items-center overflow-visible py-12"> {/* Added py-12 and overflow-visible */}
      <div className="text-center text-4xl sm:text-6xl font-bold flex flex-wrap justify-center space-x-1 sm:space-x-2 my-8">
        {['L', 'I', 'G', 'H', 'T', 'H', 'O', 'U', 'S', 'E', ' ', 'L', 'A', 'B', 'S'].map((letter, index) => (
          <span
            key={index}
            ref={(el) => (lettersRef.current[index] = el)}
            className="w-12 h-12 sm:w-16 sm:h-16 bg-green-200 rounded-lg flex justify-center items-center"
          >
            <span className={`${getColor(index)} text-3xl sm:text-5xl font-bold`}>
              {letter}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

// Helper function to assign bright colors to each letter
function getColor(index) {
  const colors = ['text-red-500', 'text-blue-500', 'text-yellow-500', 'text-green-500', 'text-orange-500', 'text-purple-500'];
  return colors[index % colors.length];
}

export default FloatingLetters;