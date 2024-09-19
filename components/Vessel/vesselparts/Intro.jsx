"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../vessel.scss";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SplitText from "../../utils/Split3.min.js";
import gsap from "gsap";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";
import Icons from "../vesselparts/Icons"

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
      const splitPara1 = new SplitText("#para1", { type: "lines" });
      gsap.fromTo(
        splitPara1.lines,
        { opacity: 0, y: 20 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: "power2.out",
          onComplete: () => {
            document.querySelector("#para1").classList.add("is-reveal");
          },
        }
      );
  

      const splitPara2 = new SplitText("#para2", { type: "lines" });
      gsap.fromTo(
        splitPara2.lines,
        { opacity: 0, y: 20 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: "power2.out",
          onComplete: () => {
            document.querySelector("#para2").classList.add("is-reveal");
          },
        }
      );
    }
  }, [reveal]);

  return (
    <section className="py-16 px-6 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-10 items-center">
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center lg:justify-start">
          <a
            href="https://github.com/VesselPackaging/vesselsite_nextjs"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              src="/assets/imgs/vessel.png"
              alt="Vessel"
              width={500}
              height={500}
              className="w-full sm:w-full  lg:w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
              priority
            />
          </a>
        </div>

        <div
          ref={imageRef}
          className="lg:w-1/2 w-full text-center lg:text-left relative"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-NeueMontrealBold text-gray-800">
            Overview
          </h1>

          {reveal && (
            <div className="relative">
              <DotLottieReact
                src="/assets/lottie/underline.json"
                autoplay={reveal}
                style={{
                  width: "220px",
                  height: "50px",
                  position: "absolute",
                  bottom: "-15px",
                  left: "5%",
                  transform: "translateX(-15%)", // Centers underline on mobile
                }}
              />
            </div>
          )}

          <ul
            ref={ref}
            id="para1"
            className={cn(
              "mt-6 space-y-4 text-base sm:text-lg lg:text-xl font-NeueMontrealBook text-gray-600",
              {
                "opacity-100": reveal,
              }
            )}
            style={{ opacity: reveal ? 1 : 0 }}
          >
            <li>
              As the <span className="highlight">lead developer</span>, I
              designed and implemented a comprehensive order portal from
              scratch, significantly enhancing the customer experience and
              streamlining internal processes.
            </li>
          </ul>
        </div>
      </div>


      <div className="flex flex-col-reverse lg:flex-row lg:space-x-10 items-center">
      <div
          ref={imageRef}
          className="lg:w-1/2 w-full text-center lg:text-left relative mt-24"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-NeueMontrealBold text-gray-800">
            The Stack
          </h1>

          {reveal && (
            <div className="relative">
              <DotLottieReact
                src="/assets/lottie/underline.json"
                autoplay={reveal}
                style={{
                  width: "270px",
                  height: "50px",
                  position: "absolute",
                  bottom: "-15px",
                  left: "5%",
                  transform: "translateX(-15%)", // Centers underline on mobile
                }}
              />
            </div>
          )}
          <Icons />

          <ul
            ref={ref}
            id="para2"
            className={cn(
              "mt-6 space-y-4 text-base sm:text-lg lg:text-xl font-NeueMontrealBook text-gray-600",
              {
                "opacity-100": reveal,
              }
            )}
            style={{ opacity: reveal ? 1 : 0 }}
          >
            <li>
              The web app was built with <span className="highlight">NextJs 14.0</span> using the latest app router rather than page router. 
            </li>
            <li>
              I used <span className="highlight">Sanity.io</span> as a headless CMS, allowing my colleuges to update order leadtimes and the News & Updates section easily.
            </li>
            <li>
              The app is deployed using <span className="highlight">Vercel.</span>
            </li>
            <li>A login version of the site was launched and connected to a <span className="highlight">MongoDB database</span> - however this is not used in the final production.</li>
          </ul>
        </div>
            

      {reveal && (
        <div className="relative w-1/2 float-right mr-24">
          <DotLottieReact
            src="/assets/lottie/draw_arrow_1.json"
            autoplay={reveal} // Animation will only start when `reveal` is true
            style={{
              width: "220px",
              height: "220px",
              margin: "0 auto", // Center the arrow below the text
              transform: "rotate(-0.80turn)", // Apply rotation here
            }}
          />
        </div>
      )}
      </div>
    </section>
  );
}

export default Intro;
