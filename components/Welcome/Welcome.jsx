'use client';
import React, { useEffect } from "react";
import gsap from 'gsap';
// import "./welcome.scss";
import SplitText from '../utils/Split3.min.js';

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
    <div className="welcome"
      data-scroll-section  
    >
    <div className="h-screen">
      <div className="intromove">
      <div className="h-screen w-[90%] pt-20 mx-auto grid relative place-items-center grid-cols-2 grid-rows-2">
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 text-right mb-6">
          <h1 className="text-9xl font-NeueMontrealBook">
            Full-Stack Developer
          </h1>
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 text-left">
          <h1 className="font-NeueMontrealBook text-9xl leading-snug">
            Rhys Wood
          </h1>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Welcome;
