"use client";
import React, {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import TinyApp from "./lhouseproj/TinyApp";
import Tweeter from "./lhouseproj/Tweeter";
import LightBnb from "./lhouseproj/LightBnb";
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import cn from "classnames";
import "./Lhouse.scss";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const FloatingLetters = () => {
    const lettersRef = useRef([]);
    const textRef = useRef(null);
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        const elements = lettersRef.current;

        // Animate floating letters with GSAP and ScrollTrigger
        gsap.fromTo(
            elements,
            {y: 0, rotation: 0},
            {
                y: 30, // Floating effect along Y-axis
                rotation: 20, // Rotate letters
                stagger: 0.2, // Delay between each letter's animation
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".text-container",
                    start: "top center-=250",
                    end: "bottom top+=500",
                    scrub: 2, // Smooth sync with scrolling
                    invalidateOnRefresh: true, // Recalculate on refresh/resize
                },
            }
        );

        // Animate paragraph text when it's in view
        const observer = new IntersectionObserver(
            ([entry]) => setReveal(entry.isIntersecting),
            {threshold: 0.2}
        );
        if (textRef.current) observer.observe(textRef.current);

        return () => {
            observer.disconnect();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    useEffect(() => {
        if (reveal) {
            // Dynamically split paragraph text into span elements
            const para = textRef.current.querySelector("#para-lighthouse");
            if (para) {
                para.innerHTML = para.textContent
                    .split(" ")
                    .map((word) => `<span>${word}</span>`)
                    .join(" ");
            }

            const splitText = gsap.utils.toArray("#para-lighthouse span");
            gsap.fromTo(
                splitText,
                {opacity: 0, y: 20},
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.1,
                    stagger: 0.05,
                    ease: "power2.out",
                }
            );
        }
    }, [reveal]);

    return (
        <section id="lighthouse" className="bg-yellow-100">
            <div
                className="text-container h-auto flex justify-center items-center overflow-visible mx-12 py-8 sm:pb-12">
                <div
                    className="text-center text-3xl sm:text-4xl md:text-6xl font-bold flex flex-wrap justify-center space-x-1 sm:space-x-2 md:space-x-3 my-8">
                    {["L", "I", "G", "H", "T", "H", "O", "U", "S", "E", " ", "L", "A", "B", "S"].map(
                        (letter, index) => (
                            <span
                                key={index}
                                ref={(el) => (lettersRef.current[index] = el)}
                                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-12 bg-green-200 rounded-lg flex justify-center items-center"
                            >
                <span className={`${getColor(index)} text-lg sm:text-2xl md:text-4xl font-bold`}>
                  {letter}
                </span>
              </span>
                        )
                    )}
                </div>
            </div>

            {/* Content Section with Paragraph Text */}
            <section ref={textRef} className="pb-24 px-6 lg:px-24 ">
                <div className="max-w-screen-2xl mx-auto text-center">
                    {/* Title */}
                    <h1 className="text-3xl  sm:text-4xl lg:text-5xl font-bold font-NeueMontrealBold text-gray-800">
                        Full-Stack Web Developer Bootcamp
                    </h1>
                    <p
                        id="para-lighthouse"
                        className={cn(
                            "mt-6 space-y-4 text-base lg:mx-52 sm:text-lg lg:text-xl font-NeueMontrealBook text-gray-600",
                            {"opacity-100": reveal}
                        )}
                        style={{opacity: reveal ? 1 : 0}}
                    >
                        I graduated from Lighthouse Labs' intensive diploma program, where I honed my skills in
                        front-end and back-end development, database management, Git version control, and Agile
                        methodologies. I gained proficiencies and valuable knowledge in HTML, CSS, JavaScript, Node.js,
                        Express.js, SQL, Ruby,
                        and React/Next.js, I specialized in creating dynamic, high-performance web applications and had
                        a
                        strong emphasis on collaboration, code reviews, and industry best practices.
                    </p>
                </div>
            </section>

            <div>
                <div className="mb-20 text-center">
                <h1 className="text-3xl mb-5 sm:text-4xl lg:text-3xl font-NeueMontrealBold text-gray-800">
                    <a href="https://gitfront.io/r/user-1032879/3e7d07fa38a345b6e1b6c84d5b053004e14d88d1/RW-Site/">
                    Learning Experiences
                    </a>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 max-w-7xl mx-auto">
              <TinyApp />
              <Tweeter />
              <LightBnb />
            </div>
            </div>

        </section>
    )
        ;
};

// Helper function to assign bright colors to each letter
function getColor(index) {
    const colors = [
        "text-red-500",
        "text-blue-500",
        "text-yellow-500",
        "text-green-500",
        "text-orange-500",
        "text-purple-500",
    ];
    return colors[index % colors.length];
}

export default FloatingLetters;
