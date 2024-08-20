"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SplitText from "../../utils/Split3.min.js";
import gsap from "gsap";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";

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
      const split = new SplitText("#para1", { type: "lines" });

      gsap.fromTo(
        split.lines,
        { opacity: 0, y: 20 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }
  }, [reveal]);

  return (
    <section className="py-16 px-6 lg:px-24 bg-gray-50">
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-10 items-center">
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <Image
            src="/assets/imgs/vessel.png"
            alt="Vessel"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
            priority
          />
        </div>

        <div ref={imageRef} className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl font-bold font-NeueMontrealBold text-gray-800">
            Overview
          </h1>
          <ul
            ref={ref}
            id="para1"
            className={cn("mt-6 space-y-4 text-xl font-NeueMontrealBook text-gray-600", {
              "opacity-100": reveal,
            })}
            style={{ opacity: reveal ? 1 : 0 }}
          >
            <li>
              As the lead developer, I designed and implemented a comprehensive
              order portal from scratch, significantly enhancing the customer
              experience and streamlining internal processes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Intro;
