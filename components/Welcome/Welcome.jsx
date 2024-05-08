'use client';
import React, { useEffect } from "react";
import gsap from 'gsap';
// import "./welcome.scss";
import SplitText from '../utils/Split3.min.js';

function Welcome() {

  useEffect(() => {
    const split = new SplitText(".block", {
      type: "lines",
      linesClass: "lineChildren",
    });
    
 // eslint-disable-next-line 
    const splitParent = new SplitText(".block", {
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
    <div className="welcome"
      data-scroll-section  
    >
    <div className="h-screen">
    <div className="h-[95%] w-[90%] pt-[5rem] mx-auto grid relative place-items-center grid-cols-2 grid-rows-[auto,auto]">
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 text-right">
          <h1 className="text-9xl font-RadioGrotesk-Ultralight m-0">
            Full-Stack Devloper
          </h1>
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 text-left">
          <h1 className="font-RadioGrotesk-Ultralight text-[10vw] p-0 m-0 text-black">
            Rhys Wood
          </h1>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Welcome;