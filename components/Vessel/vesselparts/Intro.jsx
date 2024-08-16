"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image.js";
import SplitText from "../../utils/Split3.min.js";
import gsap from "gsap";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";
import "../vessel.scss";

function Intro() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#para1", {
        type: "lines",
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  return (
    <div
      className={cn("mt-24 ml-24 mr-6 border-red-400 border", { "is-reveal": reveal })}
      data-scroll-section
    >
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        <div ref={imageRef} className="lg:w-1/2">
          <h1 className="">Overview</h1>
          <ul
            ref={ref}
            id="para1"
            className={cn({
              "is-reveal text-xl font-NeueMontrealBook mt-12": reveal,
            })}
          >
            <li>
              As the lead developer, I designed and implemented a comprehensive
              order portal from scratch, significantly enhancing the customer
              experience and streamlining internal processes.
            </li>
          </ul>
        </div>
  
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/assets/imgs/vessel.png"
            alt="Vessel"
            width={500}
            height={500}
            className="filter max-w-full"
          />
        </div>
      </div>
    </div>
  );
  
}

export default Intro;
