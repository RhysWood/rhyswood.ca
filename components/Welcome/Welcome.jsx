"use client";
import React, { useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";



function Welcome() {
  useEffect(() => {
    const split = new SplitText(".intromove", {
      type: "lines",
      linesClass: "lineChildren",
    });
    
 // eslint-disable-next-line 
    const splitParent = new SplitText(".intromove", {
      type: "lines",
      linesClass: "lineParent",
    });
    
    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    })
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black" data-scroll-section>
      <div className="absolute top-64 right-32 text-right intromove">
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-NeueMontrealBook transition-colors duration-300 hover:text-riceyellow transform-gpu">
          Full-Stack Developer
        </h1>
      </div>
      <div className="absolute bottom-64 md:left-32 text-left flex items-center intromove">
        <div>
          <h1 className="text-white text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-NeueMontrealBook leading-tight transition-colors duration-300 hover:text-ricegreen transform-gpu">
            Rhys Wood
          </h1>
        </div>
      </div>
      <div className="ml-8">
          <DotLottieReact src="/assets/lottie/arrow.json" loop autoplay style={{ width: '220px', height: '220px', filter: 'invert(100%)' }} />
        </div>
    </div>
  );
}

export default Welcome;
