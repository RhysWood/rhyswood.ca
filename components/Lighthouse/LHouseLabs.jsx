"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
            { y: 0, rotation: 0 },
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
            { threshold: 0.2 }
        );
        if (textRef.current) observer.observe(textRef.current);

        return () => {
            observer.disconnect();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    useEffect(() => {
        if (reveal) {
            // Split text animation (paragraph fade-in and slide up)
            const splitText = gsap.utils.toArray("#para-lighthouse span");
            gsap.fromTo(
                splitText,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                }
            );
        }
    }, [reveal]);

    return (
        <>
            {/* Floating Letters (Title Section) */}
            <div className="text-container h-auto flex justify-center items-center overflow-visible py-8 sm:py-12 md:py-16">
                <div className="text-center text-3xl sm:text-4xl md:text-6xl font-bold flex flex-wrap justify-center space-x-1 sm:space-x-2 md:space-x-3 my-8">
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
            <section ref={textRef} className="py-16 px-6 lg:px-24">
                <div className="max-w-screen-2xl mx-auto text-center lg:text-left">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-NeueMontrealBold text-gray-800">
                        Lighthouse Labs Diploma
                    </h1>
                    {/*{reveal && (*/}
                    {/*    <div className="relative">*/}
                    {/*        /!* Lottie Underline Animation *!/*/}
                    {/*        <DotLottieReact*/}
                    {/*            src="/assets/lottie/underline.json"*/}
                    {/*            autoplay={reveal}*/}
                    {/*            style={{*/}
                    {/*                width: "500px",*/}
                    {/*                height: "50px",*/}
                    {/*                position: "absolute",*/}
                    {/*                bottom: "-10px",*/}
                    {/*                left: "25%",*/}
                    {/*                transform: "translateX(-50%)",*/}
                    {/*                filter: "invert(1)",*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*)}*/}

                    {/* Animated Paragraph */}
                    <p
                        id="para-lighthouse"
                        className={cn(
                            "mt-6 space-y-4 text-base sm:text-lg lg:text-xl font-NeueMontrealBook text-gray-600",
                            { "opacity-100": reveal }
                        )}
                        style={{ opacity: reveal ? 1 : 0 }}
                    >
            <span>
              Through my diploma at Lighthouse Labs, I mastered front-end and
              back-end web development, database management, Git version
              control, and Agile project management.
            </span>
                        <span>
              Proficient in HTML, CSS, JavaScript, Node.js, Express.js, SQL,
              React/Next.js, I create dynamic web apps.
            </span>
                        <span>
              I excel in teamwork, code reviews, and best coding practices,
              ready for complex software projects.
            </span>
                    </p>
                </div>
            </section>
        </>
    );
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