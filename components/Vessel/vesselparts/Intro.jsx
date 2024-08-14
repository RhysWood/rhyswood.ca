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
  const arrowRef = useRef(null);
  const imageRef = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      setReveal(onScreen);
    }
  }, [onScreen]);

  const positionArrow = () => {
    if (imageRef.current && arrowRef.current) {
      const imageRect = imageRef.current.getBoundingClientRect();
      const textRect = ref.current.getBoundingClientRect();

      gsap.to(arrowRef.current, {
        duration: 1,
        opacity: 1,
        x: imageRect.left - textRect.left - arrowRef.current.clientWidth, // Horizontal distance between text and image
        y:
          imageRect.top -
          textRect.top +
          imageRect.height / 2 -
          arrowRef.current.clientHeight / 2, // Center the arrow vertically with the image
        ease: "power2",
      });
    }
  };

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

      gsap.set(arrowRef.current, {
        opacity: 0,
      });

      positionArrow(); // Position arrow initially
      window.addEventListener("resize", positionArrow); // Reposition arrow on window resize
    }

    return () => {
      window.removeEventListener("resize", positionArrow); // Cleanup event listener
    };
  }, [reveal]);

  return (
    <div
      className={cn("mt-8 ml-24 mr-6", { "is-reveal": reveal })}
      data-scroll-section
    >
      <div className="">
        <div>
          <h1>Overview</h1>
          <ul
            ref={ref}
            id="para1"
            className={cn({
              "is-reveal text-xl mt-6 font-NeueMontrealBook lg:w-1/4": reveal,
            })}
          >
            <li>
              As the lead developer, I designed and implemented a comprehensive
              order portal from scratch, significantly enhancing the customer
              experience and streamlining internal processes.
            </li>
          </ul>
        </div>

        <div ref={arrowRef} className="arrow text-ricegreen">
          ----➤
        </div>
        <div className="flex justify-end">
          <Image
            src="/assets/imgs/vessel.png"
            alt="Vessel"
            width={400}
            height={400}
            layout="responsive"
            ref={imageRef}
            onLoad={positionArrow} // Call positionArrow after image has loaded
            className="filter mt-16 max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
