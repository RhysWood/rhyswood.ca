"use client";
import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";

function Welcome() {
  useEffect(() => {
    const split = new SplitText(".intromove", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText(".intromove", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col justify-between bg-black"
      data-scroll-section>
      {/* Top-right on large screens, centered and stacked on smaller screens */}
      <div className="lg:absolute lg:top-[10vh] lg:right-[5vw] text-center lg:text-right mt-48 lg:mt-0 mx-4 intromove">
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[clamp(3rem,8vw,9rem)] font-NeueMontrealBook transition-colors duration-300 hover:text-riceyellow">
          Full-Stack Developer
        </h1>
      </div>

      {/* Bottom-left on large screens, centered and stacked on smaller screens */}
      <div className="lg:absolute lg:bottom-[10vh] lg:left-[5vw] text-center lg:text-left mb-24 lg:mt-0 mx-4 intromove">
        <h1 className="text-white text-6xl sm:text-8xl md:text-9xl lg:text-[clamp(4rem,10vw,10rem)] font-NeueMontrealBook leading-tight transition-colors duration-300 hover:text-ricegreen">
          Rhys Wood
        </h1>
      </div>

      {/* Arrow animation centered both vertically and horizontally */}
      <div className="absolute inset-0 flex items-center justify-center">
        <DotLottieReact
          src="/assets/lottie/arrow.json"
          loop
          autoplay
          style={{ width: "220px", height: "220px", filter: "invert(100%)" }}
        />
      </div>
    </div>
  );
}

export default Welcome;
